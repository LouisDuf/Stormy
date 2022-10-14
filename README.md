# SAE

## Features

## Installation

## schéma de conception
%%mocodo --mld --colors brewer+1 --shapes copperplate --relations diagram markdown_data_dict
:
Classe: Num. classe, Num. salle
::

DF, 11 Élève, 1N Classe
Personne: Nom, Prénom, Contact
Faire Cours, 1N Classe, 1N Prof: Vol. horaire
Catégorie: Code catégorie, Nom catégorie

Élève: Num. élève, Date naissance
/XT\, 1N Personne, 10 Élève, 10 Prof
Prof: Num. prof, Num. bureau
Relever, 0N Catégorie, 11 Prof

Date: Date
Noter, 1N Élève, 0N Prof, 0N Matière, 1N Date: Note
Matière: Libellé matière
Enseigner, 11 Prof, 1N Matière
En sortie, le MCD (diagramme conceptuel) et le MLD (schéma relationnel) correspondants:

## Contributors
* [Louis](https://github.com/Louwar)
* [Noa](https://github.com/NoaSlld)
* [Alexis](https://github.com/AlexisFeron)
* [David](https://github.com/TheD57)
* [Gatien](https://github.com/banane1299)
