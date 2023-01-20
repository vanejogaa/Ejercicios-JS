const baseUrl = 'https://api.nationalize.io?name=';

const boton$$ = document.querySelector('button')
boton$$.addEventListener('click', () => {
const input$$ = document.querySelector('input').value
   
    fetch(`${baseUrl}${input$$}`)
    .then(response => response.json())
    .then(data => {
     data.country.map(interacion =>{
     const frase = document.createElement('p')
     frase.innerText = `El nombre ${input$$} tiene un ${interacion.probability} % de ser ${interacion.country_id}` 
        document.body.appendChild(frase)
     } )
    })
    .catch(error => {
      console.error('Error:', error);
    });
} )

// country
// : 
// Array(5)
// 0
// : 
// {country_id: 'US', probability: 0.078}
// 1

//data.country.map(interacion => interacion.country);




// const usersMap = users.map(user => user.name);
// console.log(usersMap);
