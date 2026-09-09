## Connexion (mot de passe 4pIjcunZ0fK2vmp3IwfG8Vf7VhxD6pOA )
```
ssh -p 2220 bandit20@bandit.labs.overthewire.org
```

## Recherche du mot de passe
On a l'information du script :

This program will connect to the given port on localhost using TCP. If it receives the correct password from the other side, the next password is transmitted back.

Donc si je lance en background (&):
```
echo "4pIjcunZ0fK2vmp3IwfG8Vf7VhxD6pOA" | nc -l 12345 &
```

Puis par la suite je lance:
```
./suconnect 12345
```
## Prochain mot de passe
```
bW9kBv5WC3P4yoDyf12LSdGuNz5ka6hY
```