

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;


};

function intentoDeUsuario(){
    alert('click desde el boton');
}

asignarTextoElemento('h1','juego del numero secreto');
asignarTextoElemento('p','indicar un numero del 1 al 100');