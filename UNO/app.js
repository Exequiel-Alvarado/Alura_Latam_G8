
//variables
let numeroMaximoPosible = Math.floor(Math.random()*100+1);
let numeroSecreto =Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario =0;
let intentos=1;
//let palabraVeces = 'vez';
let maximoIntentos =3;

console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un numero  entre 1 y ${numeroMaximoPosible}  por favor`));

    //alert('Hola Mundo');

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto ){
        alert (`acertaste, el numero de usuario es : ${numeroUsuario}. lo hiciste en ${intentos} ${intentos == 1 ?'vez':'veces'}`);
       
    } else{
        if(numeroUsuario > numeroSecreto){
            alert('el numero secreto es menor');
        }else{
            alert('el numero secreto es mayor');
        }
        //alert('lo siento, no acertaste')
        //
        // intentos = intentos + 1;
        //intentos += 1;
        intentos++;
        //palabraVeces = 'veces';
        if (intentos > maximoIntentos){
            alert(`llegaste al numero maximo de ${maximoIntentos} intentos`);
            break;
        }
        //la condicion no s ecumplio
        //alert('lo siento, no acertaste el número');

    }
    
}




