## Préalable
Écrire la clé dans un fichier
Lancer ensuite la commande suivante pour rendre le fichier rw seulement (cette étape est critique)
```
chmod 600 keyfile
```

## Connexion (via une clé ssh privée)
```
ssh -i keyfile -p 2220 bandit14@bandit.labs.overthewire.org
```

## Indice 
- Le mot de passe est obtenu en envoyant celui courant sur le port 30000

## Recherche du mot de passe
```
cat /etc/bandit_pass/bandit14 | nc 127.0.0.1 30000
```

## Prochain mot de passe
```
pbLYuZtTg4MgaqfJx8jbA9gKKGqM68A7
```