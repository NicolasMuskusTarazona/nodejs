let nombre = "Nicolas";
let edad = 17;
let Hobbies = false;
let puntaje = [100, 75, 90];
let usuario = {
    name: "Nicolas",
    apellido: "Muskus",
};

const PI = 3.1415;

// console.log(nombre)
// console.log(edad)
// console.log(Hobbies)
// console.log(puntaje)
// console.log(usuario)
// console.log(PI)

// if(edad > 18){
//     console.log("Mayor edad:", edad)
// }else if(edad >=17){
//     console.log("casi:", edad)
// }
// else{
//     console.log("Menor edad:", edad)
// }

const grupito = ["Nicolas", "Yo", "Nadie +"];

for (let i = 0; i < grupito.length; i++) {
    console.log(grupito[i]);
}

function MostarUsuarioInformacion(UsarioNombre, UsuarioEdad) {
    return `Nombre: ${UsarioNombre}, Edad: ${UsuarioEdad}`;
}

const ShowUserInfo = (NameUser, AgeUser) =>
    `Name: ${NameUser} and Age: ${AgeUser}`;
console.log(ShowUserInfo("Frog", 999));

console.log(MostarUsuarioInformacion("Nicolas", 17));
