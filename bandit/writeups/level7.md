## Connexion (mot de passe pXa26xhMWaC2SvDotA4r9EgZkulOeSBW)
```
ssh -p 2220 bandit6@bandit.labs.overthewire.org
```

## Indices
- owned by user bandit7
- owned by group bandit6
- 33 bytes in size

## Recherche du mot de passe
On cherche dans / un fichier de taille 33 bytes, dont l'username du owner est bandit7 et le groupe est bandit6. Pour éviter de print les messages d'erreurs disant les Permission denied, je désactive le stderr (# 2) en le redirigeant vers /dev/null
```
cat $(find / -size 33c -user bandit7 -group bandit6 2>/dev/null)
```
## Prochain mot de passe
```
Bmnnvf82KzQlfxgAI2d1zYbr1u9pr3E3
```
