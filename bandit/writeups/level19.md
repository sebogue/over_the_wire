## Indice préalable
- Le shell de ssh est bloqué via .bashrc

## Connexion (mot de passe OQxXZjELndr90zuhOTDYBEomI0SZITXI )
On a un message de byebye
On va forcer un autre shell plutôt que ssh
```
ssh -p 2220 bandit18@bandit.labs.overthewire.org /bin/sh
```

Sinon on peut forcer bash a launch sans utiliser de fichier d'initialisation
```
ssh -p 2220 bandit18@bandit.labs.overthewire.org "bash --noprofile --norc"
```

## Recherche du mot de passe
le shell est laid mais on peut taper des commandes ...
```
cat readme
```

## Prochain mot de passe
```
KpsOfPkcP7i1FlIExk2QEjyt6dw8dxZI
```