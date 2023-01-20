const button$$ = document.createElement("button")
button$$.innerText="elimina el último";
document.body.appendChild(button$$);

button$$.addEventListener("click", function() {
const todosLis$$ = document.querySelectorAll("li");

    todosLis$$[todosLis$$.length-1].remove()
} )