## Connexion (mot de passe hVQMk3lJNsmQ7VF3ubyrNNBom7BOgVXv)
```
ssh -p 2220 bandit24@bandit.labs.overthewire.org
```
# Indice
- deamon sur le port 30002
- 4 digit pincode

## Recherche du mot de passe
Il faut bruteforce les pincode avec un format XXXX puis mettre le mot de passe avant
```
seq -f "hVQMk3lJNsmQ7VF3ubyrNNBom7BOgVXv %04g" 0 9999 | nc localhost 30002
```
## Prochain mot de passe
```
SoHfqMOEqIX2IYKVciZxvgpR9a2Djx4P
```