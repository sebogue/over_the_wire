## Connexion (mot de passe pbLYuZtTg4MgaqfJx8jbA9gKKGqM68A7 )
```
ssh -p 2220 bandit15@bandit.labs.overthewire.org
```

## Indice 
- Il faut envoyer le mot de passe du challenge courant au port 30001 avec SSL/TLS

## Recherche du mot de passe
```
echo "pbLYuZtTg4MgaqfJx8jbA9gKKGqM68A7" | openssl s_client -connect localhost:30001 -quiet
```
*attention le fichier .bandit14.password est un piège*

## Prochain mot de passe
```
kS0Hf0u5HiXFwKMKFqXvPdOTNGGa0X8V
```