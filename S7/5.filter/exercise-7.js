const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

function filtrarLista (event) {
    const valor = event.target.value;
    console.log('filtrar lista', valor);
    const result = streamers.filter(property => { return property.name.includes(valor);});
    console.log(result);
}
document.querySelector('[data-function="toFilterStreamers"]').addEventListener('keyup', filtrarLista);