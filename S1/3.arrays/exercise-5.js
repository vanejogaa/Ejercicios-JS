'use strict';

const RickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
RickAndMortyCharacters.pop();

console.log(RickAndMortyCharacters);

const primerYUltimoElemento = RickAndMortyCharacters[0] + ' y ' + RickAndMortyCharacters[RickAndMortyCharacters.length-1];
console.log(primerYUltimoElemento);

