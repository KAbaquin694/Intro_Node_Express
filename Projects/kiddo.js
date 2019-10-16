fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
.then(res => res.json())
.then(
    data => {
    const{...img} = data.sprites;
    console.log( img.back_default );
    selector = document.querySelector('.pokemon');
    pokeIMG = `<img src="${img.front_default}">`;
    selector.innerHTML = pokeIMG;
    }
);