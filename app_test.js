const mensaje = require("./app");

if (!mensaje().includes("Hola")) {
    throw new Error("La prueba falló: no contiene la palabra Hola");
}

console.log("Prueba correcta");