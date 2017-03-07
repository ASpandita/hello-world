var kilo_cebolla = 2000;
var kilo_tomate = 1000;
var kilo_papa = 800;
var kilo_platano = 3000;
var kilo_cambur = 1300;
var kilo_recado = 500;



document.getElementById("check-in").onclick = function(){
	document.getElementById("demo").innerHTML = 'Revise la consola';

}

var adrian = (3 * kilo_cebolla) + (2 * kilo_tomate) + (6 * kilo_papa) + (0.5 * kilo_platano);

var leonardo = (3.5 * kilo_platano) + (0.5 * kilo_tomate) + (0.25 * kilo_cambur);

var david = (3 * kilo_recado) + (1.5 * kilo_papa) + (3 * kilo_cebolla) + (0.75 * kilo_cambur);

var total = adrian + leonardo + david;

var ganancia = total - 4500;

console.log('Adrian compro 3kg de cebolla, 2kg de tomate, 6kg de papas y medio kilo de platano y su total fue de:  ' + adrian + ' BsF');

console.log('Leonardo compro 3.5kg de platano, medio kilo de tomate y un cuarto de cambur, su total fue de: ' + leonardo + ' BsF');

console.log('David compro 3kg de recado, medio kilo de papas, 3kg de cebolla y 3/4 de cambur, su total fue de: ' + david + ' BsF');

console.log('El total de las 3 ventas es de: ' + total + ' BsF');

console.log('La ganacia del dueño es de: ' + ganancia + ' BsF');

