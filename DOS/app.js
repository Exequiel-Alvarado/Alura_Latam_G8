let numeroSecreto = generalNumeroSecreto();




function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;


};

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroDeUsuario));
    //console.log(typeof(numeroSecreto));
    //console.log (numeroSecreto);
    //console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p','Acertaste el número Secreto');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','el Numero Secreto es MENOR');
        }else{
            asignarTextoElemento('p','el Numero Secreto es MAYOR');
        }
    }
    return;
}

function generalNumeroSecreto(){
   return  Math.floor(Math.random()*10)+1;
   
};

asignarTextoElemento('h1','juego del numero secreto');
asignarTextoElemento('p','indicar un numero del 1 al 10');