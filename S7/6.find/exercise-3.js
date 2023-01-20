const aliens = [
    {name: 'Zalamero', planet: 'Eden', age: 4029},
    {name: 'Paktu', planet: 'Andromeda', age: 32},
    {name: 'Cucushumushu', planet: 'Marte', age: 503021}
] ;

const mutations = [
    {nameMut: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
    {nameMut: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
    {nameMut: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];


const alienName = aliens.find (name => name.name === 'Cucushumushu');
console.log(alienName);

const mutationsName = mutations.find (nameMuta => nameMuta.nameMut === 'Porompompero');
console.log(mutationsName);

mutations.mutation = {...alienName, ...mutationsName}
console.log(mutations.mutation);
