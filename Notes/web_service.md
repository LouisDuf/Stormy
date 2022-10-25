Note de recherche sur les Web Service :
===

Un Web Service est une application qui permet d’échanger des données avec d’autres applications web. Même si ces dernières sont construites dans des langages de programmation différents.

 Web Services les plus connus : 
 - SOAP : fonctionne uniquement avec xml
 - REST : permet de garder des données en cache (contraintes de le faire nous même levée), format : html, xml, json, grande tolérence aux echecs. L'état de la session est conservé par le client et transmis à chaque nouvelle requête
 - HTTP :

Un Web Service fonctionne de la manière suivante :

1. Le client (en général un utilisateur sur un ordinateur ou un support équivalent) effectue une requête dans un des langages suivants : XML, JSON ou HTTP.
2. Cette requête est transmise à un serveur distant via les protocoles SOAP, REST ou HTTP.
3. La réponse est ensuite délivrée sous le même format que sa demande : XML, JSON ou HTTP.

(Source : oracle.com)


web service - Explication Chevaldonne :
===

trad en 2 lge : nous partage données entre clients; pont entre ts clients pour retrouver ici tous nos dessins
-> persistance en ligne


http, "rest!", sort
http request meme pr rest -> answer .json



client doit savoir faire :

get : lire

post : envoyer new data

put : modif

delete : suppr

peut passer parametres 
doit pouvoir sérialiser du json