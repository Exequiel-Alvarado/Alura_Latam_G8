//array  parar guardar los nombresde amigo secreto
let amigos =[];

//funvion para agregar amigos
function agregarAmigo (){
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim();
    
    //validar campo
    if (nombreAmigo === ""){
        alert("por favor, inserte un nombre");
        return;
    }

    //validarnombre no este duplicado
     if(amigos.includes(nombreAmigo)){
        alert(`El nombre ya esta elegido ${nombreAmigo}  ya esta en la lista`); 
        return;
     }
     // agregar nombre de amigos
     amigos.push(nombreAmigo);

    // limpiar el campo
    inputAmigo.Value = "";

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

function  sortearAmigos(){
    //validar que amigo quedan disponible
    if(amigos.length === 0){
        alert("no hay amigos disponible para sotear. Agregar al menos uno.");
        return;

    }

    //generar un indice aleatorio
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);//generar aleatorio entre 0 y la longitud del array


    //obtener nombre del sorteo
    let amigoSorteado = amigos[indiceAleatorio]; //usa el indice para obtener un nombre al alzar


    // mostrar en la pagina
    let resultado = document.getElementById('resultado');
        resultado.innerHTML = `Amigo sorteado : <strong>${amigoSorteado}</strong>`;
    
}