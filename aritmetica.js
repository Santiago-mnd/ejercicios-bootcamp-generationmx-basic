// Actividad 1 (Aritmética)
// var numero1 = prompt('¿Qué número quieres sumar?');
// var numero2 = prompt('¿Qué otro número?');

// var resultado = ' ' + (parseInt(numero1)+ parseInt(numero2))
// alert('El resultado es' + resultado)

// var numero3 = prompt('¿Qué número quieres restar?');
// var numero4 = prompt('¿Qué otro número?');

// var resultado1 = ' ' + (parseInt(numero3) - parseInt(numero4))
// alert('El resultado es' + resultado1)

// var numero5 = prompt('¿Qué número quieres dividir?');
// var numero6 = prompt('¿Sobre?');

// var resultado2 = ' ' + (parseInt(numero5) / parseInt(numero6))
// alert('El resultado es' + resultado2)

// var numero7 = prompt('¿Qué número quieres multiplicar?');
// var numero8 = prompt('¿Por?');

// var resultado3 = ' ' + (parseInt(numero7) * parseInt(numero8))
// alert('El resultado es' + resultado3)


// document.write('El resultado es: '+( parseInt(numero1)+ parseInt(numero2) ) )

// -------------------------------------------------------------------------------


// var resultado = (numero1 + numero2)

/*
var base = parseInt(prompt('Escribe la base del triangulo'));
var altura = parseInt(prompt('Escribe la altura del triangulo'));
var resultado = (base * altura) / 2;

alert('El área del triangulo es: ' + resultado) ;

*/

/* var nombre = prompt('¿Cual es tu nombre?');

console.log(nombre); */

// ------------------------------------------------------------------------------

// Actividad 3 (Nómina)

var salarioDia = parseInt(prompt('¿Cuál es tu salario diario?'));
var salarioExtra = parseInt(prompt('¿Cuántas horas extra trabajaste este mes?'));
var salarioExtra = (salarioDia/8) * (salarioExtra) * 2
var salarioQuin = (salarioDia * 10);
var salarioMens = (salarioDia * 22);
var salarioBrutoMens = (salarioMens) + (salarioExtra);
var salarioBrutoQuin = ((salarioMens) + (salarioExtra)) / 2;
var salarioNetoMens = (salarioBrutoMens) - (salarioBrutoMens * .30) - (salarioBrutoMens * .10);
var salarioNetoQuin = ((salarioBrutoMens) - (salarioBrutoMens * .30) - (salarioBrutoMens * .10)) / 2;

console.log('Salario bruto mensual ' + salarioBrutoMens) 
console.log('Salario bruto mensual ' + salarioBrutoQuin)
console.log('Salario neto Quincenal ' + salarioNetoQuin)
console.log('Slario neto mensual ' + salarioNetoMens)

// ----------------------------------------------------------------------------