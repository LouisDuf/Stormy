# SAE

## Features

## Installation

## Schéma de conception

:
:
    A MÈRE, 01 ANIMAL, 0N> [mère] ANIMAL
:

:
  DF, 0N ESPÈCE, _11 ANIMAL
  ANIMAL: nom, sexe, date naissance, date décès
    A PÈRE, 0N ANIMAL, 0N> [père présumé] ANIMAL

    PEUT COHABITER AVEC, 0N ESPÈCE, 0N [commensale] ESPÈCE: nb. max. commensaux
ESPÈCE: code espèce, libellé
      OCCUPE, 1N ANIMAL, /1N PÉRIODE, 1N ENCLOS
      PÉRIODE: date début, _date fin

:
PEUT VIVRE DANS, 1N ESPÈCE, 1N ENCLOS: nb. max. congénères
ENCLOS: num. enclos
:

## Contributors
* [Louis](https://github.com/Louwar)
* [Noa](https://github.com/NoaSlld)
* [Alexis](https://github.com/AlexisFeron)
* [David](https://github.com/TheD57)
* [Gatien](https://github.com/banane1299)
