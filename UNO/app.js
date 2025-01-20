let numeroSecreto =5;
let numeroUsuario =0;
while (numeroUsuario != numeroSecreto){
    numeroUsuario = prompt("Me indicas un numero  entre 1 y 10 por favor");

    //alert('Hola Mundo');

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto ){
        alert (`acertaste el numero de usuario es : ${numeroUsuario}`);
       
    } else{
        if(numeroUsuario > numeroSecreto){
            alert('el numero secreto es menor');
        }else{
            alert('el numero secreto es mayor');
        }
        //alert('lo siento, no acertaste')
    }
   
}




