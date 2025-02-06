let numeroSecreto=0 ;
let intentos=0 ;
let listaNumerosSorteados = [];



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
    //console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número ${intentos} ${(intentos === 1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','el Numero Secreto es MENOR');
        }else{
            asignarTextoElemento('p','el Numero Secreto es MAYOR');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';

};


function generalNumeroSecreto(){
   let numeroGenerado = Math.floor(Math.random()*10)+1;
   // si el numero generado esta incluido en la lista hacemos la operacion sino hacemos la otra
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generalNumeroSecreto();

    }else{
        listaNumerosSorteados.push(numeroGenerado);
        // usamos el push para empujar el ultimo numero generado
        return numeroGenerado;
    };

};

function condicionesIniciales(){
    asignarTextoElemento('h1','juego del numero secreto');
    asignarTextoElemento('p','indicar un numero del 1 al 10');
    numeroSecreto = generalNumeroSecreto();
    intentos = 1;
};

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio de intervalos de nuemero
    //generar el numero aleatorio
    //iniciar numero de intentos
    condicionesIniciales();
    //desabilitar el boto de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

};

condicionesIniciales();