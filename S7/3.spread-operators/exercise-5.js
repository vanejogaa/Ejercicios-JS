const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

const copyColors = [...colors];
copyColors.splice(2, 1);
console.log(copyColors);