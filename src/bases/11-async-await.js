const getImagen = async() =>{
    try {
        const apiKey = 'jfHh3xxikBPag7vk5S6T5uCGJkewPFQ2';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        console.log(url);
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);        
    } catch (error) {
        console.error(error);
    }

}

getImagen();

// const apiKey = 'jfHh3xxikBPag7vk5S6T5uCGJkewPFQ2';

// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
//     .then( resp => resp.json())
//     .then( ({data}) =>{
//         console.log(data.images.original.url);
//         const {url} = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//     })
//     .catch( console.warn);