# Comparatif des différentes technos pour le front
===

Pour faire du cross plateforme : 
## Cross plateforme ?
---

Avantages | Inconvénients 
 --- | --- 
96% du code réutilisable (base), plus large public | pertes de fonctionnalités spécifiques à une plateforme, moins performant (+ lent )

## Quelle technos ?
---

\ | Avantages | Inconvénients 
 --- | --- | --- 
JAVA |  Plus populaire |Couteux en mémoire, lent 
`Xamarin` | UI natives, C# et Visual Studio donc on connaît déjà | Temps de téléchargement et stockage importants, Pas interopérable: uniquement Xamarin
Kotlin | the preferred language for Android app developers, Interopérable avec Java: Les deux peuvent coexister dans le même projet sans problème, Facile à apprendre car très similaire aux autres langage de POO, compatible avec n'importe quel IDE Java ( Android Studio, Eclipse... ), Facile de générer du code|  difficile à relire, Peu de documentation,moins d'intérêt que Java 8/9 car ils permettent de faire la même chose en moins de code, Explicite donc comportements par défaut génants, comme les classes finales ( pas d'héritage )
`Flutter` | Pacckets pour connaitre la localisation : [lien](https://medium.flutterdevs.com/location-in-flutter-27ca6fa1126c); popular open-source framework, dev by ggl dont objectif faire des app jolies et faciles d'utilisation, flutter 3.0 : + accessible : bcp de doc (pleins de petites vidéo avec sous titres), web ios et android & desktop, fait avec des widgets, compile pas par une passerelle en javascript avant d'obtenir le rendu finale comme Xamarin ou react native, direct compilé sur sa propre "ARM machine code"=, gagne en popularité, maintenance simple, dépassé react native en terme d'étoile sur github, langage : "Dart" | Framework assez récent, plugin et packets limités, appli volumineuses, 
`React-Native` | Intuitif, Cross-platform pris en charge ( même code déployable pour Android et IoS ), Rechargement à chaud ( voir effets du code en temps réel ) | Applications de débogage complexes, Adoption lente des dernières fonctionnalités technologiques, Peu performant par rapport aux caractéristiques ( meilleur pour applications simples ), Javascript: peu efficace en termes de sécurité, apps lourdes

`cross plateforme`.