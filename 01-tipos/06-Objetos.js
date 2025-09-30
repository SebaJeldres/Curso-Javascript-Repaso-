// personaje de tv

let nombre = "Oden"
let anime = "One Piece"
let edad = 39


let personaje = {
    // clave    valor
    nombre: "Oden",
    anime: "One Piece",
    edad: 39,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["edad"]);


personaje.nombre = "Kozuki Oden";

delete personaje.anime;