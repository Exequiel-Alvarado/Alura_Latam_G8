//array  parar guardar los nombresde amigo secreto
let amigos =[];

//funvion para agregar amigos
function agregarAmigo (){
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.ariaValueMax.trim();

    //validar campo
    if (nombre === ""){
        alert("por favor, inserte un nombre");
        return;
    }

    //validarnombre no este duplicado
     if(amigos.includes(nombreAmigo)){
        alert(`El nobre uaesta elegido ${nombreAmigo}  ya esta en la lista`); 
        return;
     }

}

//funcion para actualixar la listas de amigos




//funcion para sweleccionar a un amigo
