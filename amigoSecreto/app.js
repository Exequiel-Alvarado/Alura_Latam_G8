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
     // agregar nombre de amigos
     amigos.push(nombreAmigo);

    // limpiar el campo
    inputAmigo.ariaValue = "";

    //actualizar la lista en pantalla
    actualizarLista ();

}

//funcion para actualixar la listas de amigos
function actualizarLista(){
    let listaAmigos = document.getElementById('listaAmigos');
    //limpiar campo
    listaAmigos.innerHTML=""; //borar contenido previo dentro del contenedor
    // recorrer el array con un ciclo for
    for (let i=0 ; i<amigos.length;i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
    
}



//funcion para sweleccionar a un amigo

funtion 