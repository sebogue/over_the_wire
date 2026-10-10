## Connexion (username=natas11 password=VUMQDmuITOEHzhviLE5V0VG9cPMQkyxd)
```
http://natas11.natas.labs.overthewire.org/
```

## Recherche du mot de passe
Dans le nouveau script php, on sait que xor est réversible mais on a pas la clé.
Donc in XOR key = out  --> in XOR out = key

le out en question est le base64_decode de notre cookie.
le in est le json_encode de array( "showpassword"=>"no", "bgcolor"=>"#ffffff")

Ainsi on peut trouver la clé en réutilisant la fonction comme suit:

```php
function xor_encryptV2($in, $out) {
    $key = '';
    $text = $in;
    $outText = $out;
    for($i=0;$i<strlen($text);$i++) {
    $key .= $text[$i] ^ $outText[$i % strlen($outText)];
    }
    return $key;
}

echo xor_encryptV2(json_encode(array( "showpassword"=>"no", "bgcolor"=>"#ffffff")), base64_decode("EGAgHwQ1IxYYMSQYGSZxTUksPFVHYDEQCC0/GBlgaVVIJDURDSQ1VRY="));
```

On obtient une clé avec un pattern qui se répète donc on garde le pattern qu'une seule fois.
soit kBSw

Ainsi pour trouver le nouveau cookie à updater il faut changer le showpassword pour yes.

```php
function xor_encryptV3($in) {
		$key = 'kBSw';
		$text = $in;
		$outText = '';
		for($i=0;$i<strlen($text);$i++) {
		$outText .= $text[$i] ^ $key[$i % strlen($key)];
		}
		return $outText;
	}
$cookie_base64_decoded = xor_encryptV3(json_encode(array( "showpassword"=>"yes", "bgcolor"=>"#ffffff")));

echo base64_encode($cookie_base64_decoded); # EGAgHwQ1IxYYMSQYGSZxTUk7NgRJbnEVDCE8GwQwcU1JYTURDSQ1EUk/
```

Il suffit d'aller mettre cette valeur dans le cookie et refresh la page
## Prochain mot de passe
```
EAGkE8uzFTxeoTT2mMst9Xy7PX6guEng
```