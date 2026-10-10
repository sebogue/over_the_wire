(async function () {
  const els = {
    logList: document.getElementById('log-list'),
    count: document.getElementById('challenge-count'),
    empty: document.getElementById('empty-state'),
    entry: document.getElementById('entry'),
    title: document.getElementById('entry-title'),
    body: document.getElementById('entry-body'),
    index: document.getElementById('entry-index'),
    prev: document.getElementById('btn-prev'),
    next: document.getElementById('btn-next'),
  };
 
  let challenges = [];
  let currentIndex = -1;
 
  async function init() {
    try {
      const res = await fetch('writeups.json', { cache: 'no-store' });
      challenges = await res.json();
    } catch (err) {
      els.empty.innerHTML = '<p>impossible de charger writeups.json — sers ce dossier via un serveur local (pas file://)</p>';
      return;
    }
 
    renderList();
 
    window.addEventListener('hashchange', routeFromHash);
    document.addEventListener('keydown', onKeydown);
 
    routeFromHash();
  }
 
  function renderList() {
    els.logList.innerHTML = '';
    challenges.forEach((c, i) => {
      const btn = document.createElement('button');
      btn.className = 'log__item';
      btn.id = 'log-item-' + i;
      btn.type = 'button';
 
      const label = document.createElement('span');
      label.className = 'log__label';
      label.textContent = c.title;
 
      btn.append(label);
      btn.addEventListener('click', () => {
        window.location.hash = c.id;
      });
 
      els.logList.appendChild(btn);
    });
  }
 
  function routeFromHash() {
    const id = window.location.hash.replace('#', '');
    let i = challenges.findIndex((c) => c.id === id);
    if (i === -1) i = 0;
    loadChallenge(i);
  }
 
  async function loadChallenge(i) {
    if (i < 0 || i >= challenges.length) return;
    currentIndex = i;
    const c = challenges[i];
 
    document.querySelectorAll('.log__item').forEach((el) => el.classList.remove('is-active'));
    const activeItem = document.getElementById('log-item-' + i);
    if (activeItem) {
      activeItem.classList.add('is-active');
      activeItem.scrollIntoView({ block: 'nearest' });
    }
 
    if (window.location.hash.replace('#', '') !== c.id) {
      history.replaceState(null, '', '#' + c.id);
    }
 
    els.title.textContent = c.title;
    els.index.textContent = (i + 1) + ' / ' + challenges.length;
 
    els.prev.disabled = i === 0;
    els.next.disabled = i === challenges.length - 1;
 
    try {
      const res = await fetch(c.file, { cache: 'no-store' });
      const md = await res.text();
 
      const template = document.createElement('template');
      template.innerHTML = marked.parse(md);
      template.content.querySelectorAll('img').forEach((img) => {
        const src = img.getAttribute('src') || '';
        if (src) {
          img.setAttribute('src', new URL(src, new URL(c.file, document.baseURI)).href);
        }
      });
 
      els.body.innerHTML = '';
      els.body.appendChild(template.content);
      els.body.querySelectorAll('pre code').forEach((block) => hljs.highlightElement(block));
    } catch (err) {
      els.body.innerHTML = '<p>impossible de charger ' + c.file + '</p>';
    }
 
    els.body.scrollIntoView({ block: 'start' });
    document.querySelector('.viewer').scrollTo(0, 0);
  }
 
  function goPrev() {
    if (currentIndex > 0) window.location.hash = challenges[currentIndex - 1].id;
  }
 
  function goNext() {
    if (currentIndex < challenges.length - 1) window.location.hash = challenges[currentIndex + 1].id;
  }
 
  function onKeydown(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowLeft') goPrev();
    if (e.key === 'ArrowRight') goNext();
  }
 
  els.prev.addEventListener('click', goPrev);
  els.next.addEventListener('click', goNext);
 
  init();
})();