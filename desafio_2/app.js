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

*/

let numero = prompt('Ingrese un numero');

if(numero>=0){
    alert('Tu numero es positivo siendo :' +' ' + numero);
}else{
    alert('Tu numero es negativo siendo :' + ' '+ numero)
};
