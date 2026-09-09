## Connexion ssh (mot de passe pWuj5jBQ6IgV0NXwiH6g1pXRF8S1YvbT)
```
ssh -p 2220 bandit32@bandit.labs.overthewire.org
```

## Recherche du mot de passe
On est dans un UPPERCASE SHELL, pour y échapper il faut faire 

```
$0
```
Ça permet de faire apparaître un shell normal : le système transforme la variable $0 en l'interpréteur de commandes standard sous-jacent (comme sh), ce qui redonne une invite de commande normale et sans restriction.

Une fois dans un shell normal:
```
cat /etc/bandit_pass/bandit33
```

## Prochain mot de passe
```
u4P2CyPOwPGLe94RdD9Uo2FxFwvnFswM
```