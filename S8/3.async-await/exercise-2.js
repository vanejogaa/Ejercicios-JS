// function getCharacters () {
//     fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
// }

// getCharacters();

const getCharacters = async () => {
    const response = await fetch (`https://rickandmortyapi.com/api/character`);
    const res = await response.json();
    console.log(res);
    rickApi.push(res);
}
return rickApi;



