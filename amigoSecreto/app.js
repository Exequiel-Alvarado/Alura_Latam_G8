// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variable array para almacenar los nombres del amigo secreto
let guardarNombre = [];

//funcion para agregar amigos secreto a la lista
function agregarAmigo(){
    
    let ingresarAmigo =document.getElementById('inputUser');
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

    guardarNombre.forEach((amigo, index) => {
        let lista = document.createElement('lista');
        lista.textContent = amigo+'\n';
        listaAmigos.appendChild(lista);
    });
}

// funcion para soltear amigo secreto
function sortearAmigo(){
    if (guardarNombre.length < 2 ){
        alert('debes agregar al menos 2 amigos para realizar el sorteo.');
        return;
    };

    // crear un array para los amigos y sortar los nombres
    let resultado =[];
    let amigosPendientes = [...guardarNombre]; //copiar el array

    guardarNombre.forEach((amigo) =>{
        //elegir a amigo secreto
        let amigoAlzar = Math.floor(Math.random() * amigosPendientes.length);
        let amigoSorteado = amigosPendientes.splice(amigoAlzar,1)[0];// eliminar amigo elegido

        // mostrar resultado
        resultado.push(`${amigo} ---> ganador es : ${amigoSorteado}`);
    });

    //mostrar resultado en pantalla
    mostrarResultadosAmigo(resultado);

}

//funcion para mostrar resultado  del amigo secreto
function mostrarResultadosAmigo(resultado){
    let resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = ''; // limpiar campo

    resultado.forEach((item)=>{
        let lista = document.createElement('lista');
        lista.textContent = item;
        resultadoLista.appendChild(lista);
        return;
    });
}
