'use strict';

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
for(let i=0; i<products.length; i++){
    let article = products[i];

    if (article.includes ("Camiseta")){
        console.log(article);
    }
}