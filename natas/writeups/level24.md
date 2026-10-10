## Connexion (username=natas23 password=CH1OBxJy8uAxMM15Nx6VXSMwcJbBbnS5)
```
http://natas23.natas.labs.overthewire.org/
```

## Recherche du mot de passe
```php
if(strstr($_REQUEST["passwd"],"iloveyou") && ($_REQUEST["passwd"] > 10 ))
```
```$_REQUEST["passwd"]``` est un string. strstr s'assure de la présence de iloveyou dans le password, puis la seconde condition compare de gauche à droite que les caractères sont plus grand que 10. Donc il faut que les premiers caractères soient des chiffres et non des lettres (donnant 0 et 0 est inférieur à 10)

Donc si j'entre: 11iloveyou

Je trouve le prochain password

## Prochain mot de passe
```
shlL4BvOtawNCd81dwdKRHFzmTEjYYQX
```