const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const divPadre$$ = document.createElement("ul")
document.body.appendChild(divPadre$$)
for (const countrie of countries) {
    const lis$$ = document.createElement("li")
    lis$$.innerHTML = <div>
        <h4>${countrie.title}</h4>
    <img src="${countrie.imgUrl}" alt="${countrie.title}">
    </div>
       
    divPadre$$.appendChild(lis$$)
    }