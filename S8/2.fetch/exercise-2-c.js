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
        const frasebtn = document.createElement('button')
        frasebtn.innerText = 'X Eliminar'
        frase.appendChild(frasebtn)
        frasebtn.addEventListener('click', () => {
          frase.remove();  
        })
        
     } )
    })
    .catch(error => {
      console.error('Error:', error);
    });
} )