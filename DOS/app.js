let numeroSecreto = generalNumeroSecreto();
console.log (numeroSecreto);



function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;


};

function intentoDeUsuario(){
    alert('click desde el boton');
    return;
}

function generalNumeroSecreto(){
   return  Math.floor(Math.random()*10)+1;
   
};

asignarTextoElemento('h1','juego del numero secreto');
asignarTextoElemento('p','indicar un numero del 1 al 100');