const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 55321321,
    lat: 14.3232,
    lng: 34.9233321
  }
};

console.log(persona);

//console.table(persona)

const persona2 = { ...persona};

console.log('persona', persona)
console.log('persona2', persona2)

