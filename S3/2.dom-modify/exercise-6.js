'use strict';

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const lista = document.createElement('ul');

for(let i=0; i<apps.length; i++){
    let miLi = document.createElement('li');
    miLi.innerText = apps[i];
    lista.appendChild(miLi);
}

document.body.append(lista);