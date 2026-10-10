## Connexion (username=natas8 password=ugXL95KQmUAJJj6bMezOlBNDyI9Imwkc)
```
http://natas8.natas.labs.overthewire.org/
```

## Recherche du mot de passe
Cette fois le lien du code source affiche le code php suivant:

```php
<?
$encodedSecret = "3d3d516343746d4d6d6c315669563362";
function encodeSecret($secret) {
    return bin2hex(strrev(base64_encode($secret)));
}
if(array_key_exists("submit", $_POST)) {
    if(encodeSecret($_POST['secret']) == $encodedSecret) {
    print "Access granted. The password for natas9 is <censored>";
    } else {
    print "Wrong secret";
    }
}
?>
```

L'encodage est réversible, donc 
```php
base64_decode(strrev(hex2bin("3d3d516343746d4d6d6c315669563362")))
```

php est plus trop utilisé ces jours-ci donc personnellement j'utilise un online interpreter.

exemple: https://onecompiler.com/php

Il suffit d'entrer oubWYf2kBq dans le champ input

## Prochain mot de passe
```
UdxmI27dTaXmnd1rxKQTfws6jihTdcQ9
```