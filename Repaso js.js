const personajes = [
    {
        nombre: 'Hombero',
        apellido: 'Simpson',
        trabajos: ['planta nuclear', 'don barredora' ]
    },
    {
        nombre: 'Marge',
        apellido: 'Simpson',
        trabajos: ['ama de casa']
    },
    {
        nombre: 'Bob',
        apellido: 'Esponja',
        trabajos: ['Cocinero']
    },
    {
        nombre: 'Leo',
        apellido: 'Messi',
        trabajos: 'PSG'
    }
];

const getAll = (arrayDeObjetos) => {
    arrayDeObjetos.forEach(item => {
            let mas1trabajo = false;
            if (item.trabajos.length > 1){
                mas1trabajo = true;
            }
            console.log(`Nombre: ${item.nombre}. Apellido: ${item.apellido}. Tienemas de un trabajo? ${mas1trabajo ? 'SI' : 'NO'}`);
        })
};

getAll(personajes) 


///////////////////////////////////

/*
const axios = require('axios');

async function get(url) {
    const personajes = await axios.get(url);
    console.log(personajes);
}
*/
//get('https://www.breakingbadapi.com/api/characters')