## Connexion (mot de passe EjmOSvuAu7sGAHqHVcBDPirRe9T03kxl)
```
ssh -p 2220 bandit9@bandit.labs.overthewire.org
```

## Indice
Le mot de passe est précédé de symboles '='

## Recherche du mot de passe
```
awk -F'==+' '{for(i=2; i<=NF; i++) {split($i, a, " "); print a[1]}}' data.txt
```

## Prochain mot de passe
```
B0s2khmbT9u0geKuOoVGW3JZKhndE3BG
```
