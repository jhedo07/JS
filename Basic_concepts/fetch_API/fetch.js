// fetch = Function used for making HTTP request to fetch resources.
//          (JSON style, data, images, files)
//          Simplifies asynchronous data fetching in javascript and
//          used for interacting with API's to retrieve and send 
//          data asynchronously over the web.
//          fetch(url, {options})



async function fetchData() {
    
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok) {
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
       
    }
    catch(error){   
        console.error(error);
    }
}


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//         .then(respone => {

//             if(!respone.ok) {
//                 throw new Error("Could not fetch resource");
//             }
//             return respone.json();
//         })
//         .then(data => console.log(data))
//         .catch(error => console.error(error)
//         );