'use strict';

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for(let i = 0; i < alumns.length; i++) {
    if (alumns.T1 + alumns.T2 + alumns.T3 >=2) {
        alumns.isapproved = true
        console.log(alumns.name)
    } else {
        alumns.isapproved = false
        console.log(alumns.name)
    }

}
console.log(alumns);