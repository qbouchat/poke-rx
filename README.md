# POKE RX
Cette application utilise l'api suivante : [https://pokeapi.co/docs/v2.html/](https://pokeapi.co/docs/v2.html/)
Une attention particulière doit être apportée sur le faite qu'un minimum de calls doivent être effectués. En effet, cette api une limite de 100 calls par minute par adresse IP.

## 1. Récupération de la liste des pokémons
L'appel du call pour récupérer la liste entière des pokémons à afficher dans la dropdown doit être mis en place dans AppComponent. La méthode getAllPokemons du service PokeapiService doit être utilisé et est déjà implémenté.

## 2. Mise en place de la cache
La méthode retriveApiResource doit être implémentée dans le service PokeapiService afin d'apporter une cache qui se base sur l'url d'une APIResourceDto. Cette cache doit rester basique mais éviter qu'un même call soit effectué deux fois par l'application.

## 3. Récupération du détail d'un Pokémon
Le détail d'un Pokémon doit être récupéré pour l'afficher sur sa page de détail. Ce détail se décompose en une série de call.

 - Le call pour récupérer le détail d'un Pokémon
 - Les calls pour récupérer le détail des types du Pokémon
 - Les calls pour récupérer le détail des natures du Pokémon

La récupération est à appeler dans PokemonDetailPageComponent et la méthode a implémenter est getPokemonDetails dans le service PokeapiService.

## 4. Récupération des attaques d'un Pokémon (paginé)
Les attaques du Pokémon doivent également être récupérés dans le composant PokemonDetailPageComponent. Pour se faire, il faut utiliser la méthode getPokemonMovesCalls du service PokeapiService qui permet de récupérer la totalité des calls à faire pour récupérer toutes les attaques. Attention cependant que la liste des attaques est paginée pour des raisons de performances. Il faut donc ne faire que les calls en rapport avec notre pagination.

## 5. Affichage aléatoire d'un Pokémon toutes les 30 secondes
Il faut afficher en home page un nouveau Pokémon toutes les 30 secondes. Pour se faire, il faut tout simplement utiliser la méthode getPokemonDetails pour afficher une nouveau pokémon toutes les 30 secondes dans l'AppComponent.

## 6. Ajout d'un bouton refresh sur le Pokémon aléatoire
En plus de l'affichage aléatoire, il faut également ajouter un bouton refresh, déjà implémenté dans l'AppComponent via le méthode newRandomPokemon. Celui-ci doit donc afficher un nouveau Pokémon aléatoire ainsi que reset le timer afin de n'afficher le prochain que 30 secondes plus tard.
