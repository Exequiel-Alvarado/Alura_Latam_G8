/*
1.Pregunta al usuario qué día de la semana es. 
Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". 
De lo contrario, muestra "¡Buena semana!".
---------------------------------------------

let semana = prompt("qué día de la semana es");
console.log(semana);

if("sabado" == semana |"domingo" == semana ){
    alert('Buen fin de semana!');
}else{
    alert('Buena semana!');
}
*/

/*
2.Verifica si un número ingresado por el usuario es positivo o negativo. 
Muestra una alerta informativa.
------------------------------------------------

let numero = prompt('Ingrese un numero');

if(numero>=0){
    alert('Tu numero es positivo siendo :' +' ' + numero);
}else{
    alert('Tu numero es negativo siendo :' + ' '+ numero)
};
*/

/*
3.Crea un sistema de puntuación para un juego. 
Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!".
 En caso contrario, muestra "Intentalo nuevamente para ganar.".
 ------------------------------------------------------

let puntaje=prompt('ingresa tu puntuacion');
if(puntaje >= 100){
    alert('¡Felicidades, has ganado!');
}else{
    alert('Intentalo nuevamente para ganar.');
};
*/

/*
4.Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
utilizando un template string para incluir el valor del saldo.
-------------------------------------------------------

*/

let saldo=prompt('ingrese su saldo');
alert('si saldo es:'+' $'+saldo);
