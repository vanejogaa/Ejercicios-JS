const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const divPadre$$ = document.createElement("div")
document.body.appendChild(divPadre$$)
for (const countrie of countries) {
    const lis$$ = document.createElement("div")
    const h4$$ =document.createElement("h4")
    const img$$ = document.createElement("img")
    const buton$$ = document.createElement("button")

    button$$.innerText="remove"
    img$$.setAttribute("src", countries.imgUrl)

    button$$.addEventListener("click", () => remove$$(lis$$))

    lis$$.appendChild(h4$$)
    lis$$.appendChild(img$$)
    lis$$.appendChild(button$$)
    divPadre$$.appendChild(lis$$)
}