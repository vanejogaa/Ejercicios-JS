'use strict';

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for(let datos in alien) {
    console.log("-" + alien[datos]);
}