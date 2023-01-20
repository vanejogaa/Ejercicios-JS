const baseUrl = 'https://api.nationalize.io?name=';

const boton$$ = document.querySelector('button')
boton$$.addEventListener('click', () => {
const input$$ = document.querySelector('input').value
   
    fetch(`${baseUrl}${input$$}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
} )





