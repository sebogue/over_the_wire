## Connexion (username=natas24 password=shlL4BvOtawNCd81dwdKRHFzmTEjYYQX)
```
http://natas24.natas.labs.overthewire.org/
```

## Recherche du mot de passe
Un strcmp, ca retourne 1 ou -1, Je ne peux pas guess le mot de passe mais au lieu de vérifier si le résultat du strcmp retourne 0, l'opérateur not (!) est utilisé. Donc si je fais un strcmp entre un tableau et le mot de passe (string), comme les deux types sont différents, NULL sera généré par la comparaison et l'inverse (opérateur !) de NULL est true donc j'entrerai dans le if.

http://natas24.natas.labs.overthewire.org/?passwd[]=

## Prochain mot de passe
```
UJEF5OAHF1eW3lqkpdCDM7ow4syzh4oo
```