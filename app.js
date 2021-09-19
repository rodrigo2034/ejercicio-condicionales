// //EJERCICIO 01
// let frase = window.prompt("Ingrese un texto al azar");
// if (frase.includes ("a")) {
//     alert ("Tu palabra contiene la letra a");
// } else {
//     alert ("Tu palabra no contiene la letra a");
// }

// //EJERCICIO 02
// let texto = prompt('Ingresa un texto');
// mayuscula = texto.toUpperCase();
// minuscula = texto.toLowerCase();
// alert ("tus palabras en mayuscula" + " " + mayuscula + " " + "y en minuscula" + " " + minuscula );

// // EJERCICIO 03
// let palabra = window.prompt("Ingrese una palabra");
// let letra = palabra.charAt(0);
// alert ("La primer letra de tu palabra es la" + " " + letra)

// // EJERCICIO 04
// let palabra1 = window.prompt("Ingrese un texto")
// let longitudpalabra = palabra1.length;
// alert ("tu palabra tiene" + " " + longitudpalabra + " " + "caracteres")

// // EJERCICIO 05
// let numero = window.prompt("Ingrese un numero")
// let longitudnumero = numero.length;
// alert ("tu numero tiene" + " " + longitudnumero + " " + "caracteres")

// // EJERCICIO 06
// let palabra2 = window.prompt("Ingrese una palabra");
// let letra2 = palabra2.charAt(palabra2.length-1);
// alert ("La ultima letra de tu palabra es la" + " " + letra2);

// // EJERCICIO 07
// let palabra3 = window.prompt("Ingrese tu texto");
// let letra3 = palabra3.replace(/./g,"*");
// alert ("tu texto es" + " " + letra3);

// function valorasteriscos(campo) {
//     campo.value = campo.value.replace(/./g,"*")
// }

// //EJERCICIO 08
// let palabra4 = window.prompt("ingrese una letra")
// let cadena = window.prompt("ingrese una cadena de texto")
// if(cadena.includes(palabra4)) {
//     alert ("la" + " " + palabra4 + " " + "esta incluida en el texto")
// }  else {
// alert ("la" + " " + palabra4 + " " + "no esta incluida en el texto") 
// }

// EJERCICIO 09
// let frase = window.prompt("ingrese una frase")
// let borrada = frase.slice(1)
// alert ("tu frase sin la primer letra es" + " " + borrada)

// // EJERCICIO 10
// let nombre = window.prompt("ingrese su nombre en mnuscula")
// let mayuscula2 = nombre.charAt(0)
// let final = mayuscula2.toUpperCase()
// let finalfinal = (final) + (nombre.slice(1))
// alert (finalfinal)