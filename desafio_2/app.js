/*
1.Pregunta al usuario qué día de la semana es. 
Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". 
De lo contrario, muestra "¡Buena semana!".
---------------------------------------------
*/

let semana = prompt("qué día de la semana es");
console.log(semana);

if("sabado" == semana |"domingo" == semana ){
    alert('Buen fin de semana!');
}else{
    alert('Buena semana!');
}
