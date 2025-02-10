// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variable array para almacenar los nombres del amigo secreto
let guardarNombre = [];

//funcion para agregar amigos secreto a la lista
function agregarAmigo(){
    
    let ingresarAmigo =document.getElementById('amigo');
    let amigoSecreto= ingresarAmigo.value.trim();
 
    //verificar campo vacios
    if (amigoSecreto === ''){
        alert('por favor, ingresa un nombre valido.');
        return;
    }

    //ingresar amigos a la lista
    guardarNombre.push(amigoSecreto);
    console.log(guardarNombre);

    //limpiar campos
    ingresarAmigo.value = '';

    //actualizar lista
    mostrarAmigos();


}

// funcion para mostrar los amigos
function mostrarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    // limpiamos el campo
    listaAmigos.innerHTML = '';
}
