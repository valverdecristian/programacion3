// condicionales

let nombre = "Juan";
console.log(nombre);

// para numeros es mejor usar Number
let edad = Number(prompt("Decime tu edad"));

// condicion if-else
if (edad >= 18) {
    alert(`${nombre} podes pasar, tu edad es ${edad}`)
} else {
    alert(`${nombre} no podes entrar`)
}

(edad >= 18 ? `true`:`false`);

// refactorizacion de codigo, pasar todo a ternario

// para agregar otra condicion es: condicion :