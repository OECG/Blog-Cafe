/** INFO :
 *  
 *  > window => Hace referencia a todas las funcionesy el HTML
 *  > document => Hace referencia solo al HTML
 */


// querySelector :  Retorna 0[null] o 1 elemento
// =============================================
// const heading = document.querySelector('.header__texto h2');   
// heading.textContent = "Nuevo heading con JavaScript";  // Cambia el texto al selector
// heading.classList.add('nueva-clase')   // Agrega clase al selecttor
// console.log(heading);



// querySelectorAll :  Retorna 0 o n elementos en un arreglo 
// =========================================================
// const enlaces = document.querySelectorAll('.navegacion a');  
// enlaces[0].textContent = "Nuevo enlace JS";  // Cambia el texto al selector
// enlaces[0].classList.add('nueva-clase')   // Agrega clase al selector
// enlaces[0].classList.remove('navegacion__enlace')   // Remover clase al selector
// console.log(enlaces);



// Crear HTML : 
// ============ 
// // ...Generar un nuevo enlace
// const nuevoEnlace = document.createElement('A');

// // ...Agregar el href
// nuevoEnlace.href = 'nuevo-enlace.html';

// // ...Agregar Texto
// nuevoEnlace.textContent = '--Nuevo Enlace con JS--';

// // ...Agregar clases
// nuevoEnlace.classList.add('navegacion__enlace');

// // ...Agregar al documento
// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(nuevoEnlace);
// // console.log(nuevoEnlace);



// Eventos :
// =========
// console.log(1);

// // ...(window)load : Espera a que la ventna cargue para realizar la funcion
// window.addEventListener('load',() => console.log(2));
// window.onload = () => console.log(3); // Ocurre segun el evento si es Callback
// const imprimir = () => console.log(3.2);
// window.onload = imprimir;   // El () fuerza a la funcion actuar en el orden que tiene y no segun el evento

// // ...DOMContentLoaded : Espera a que el documento HTML cargue para realizar la funcion
// document.addEventListener('DOMContentLoaded', () => console.log(5))
// console.log(6);

// // ...scroll : Realiza la funcion por cada scroll
// window.onscroll = () => console.log('scrolling...');



// Seleccionar elementos y asociarles un evento
// ============================================
/** Info:
 *  El evento 'click' es preferible cuando se trate de un evento asociado a un click a 
 *  un elemento especifico
 */
// const btnEnviar = document.querySelector('.boton--primario');
// // El parametro(e) contiene información sobre el evento en forma de objeto y estará disponible cada que se lleve acabo el evento
// btnEnviar.addEventListener('click',(e) => {  
//     console.log(e);
//     e.preventDefault();  // Util para validar formularios
    
//     console.log('Enviando Formulario');
// });




// Evento de los Imputs y Textarea
// ===============================

/**const nombre = document.querySelector('#nombre');
nombre.addEventListener('input',(e) => {
    console.log(e.target.value);
})*/

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
};

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.value = '';
email.value = '';
mensaje.value = '';

nombre.addEventListener('input',leerTexto); // Sin () para que la función actúe segun suceda el evento
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);

// Evento de Submit :  El evento 'submit' es preferible cuando se trate de un formulario
formulario.addEventListener('submit',e => {
    e.preventDefault();
    // Validar el formulario...
    const {nombre,email,mensaje} = datos;
    if(nombre === '' || email === '' || mensaje ==='') {
        mostrarAlerta('Todos los campos deben ser llenados','error');
        return; // Corta la ejecucion del codigo
    }
    // Alerta de enviado correctamente...
    mostrarAlerta('Formulario enviado correctamente','correcto');
    console.log('Enviando Formulario');
});
function leerTexto(e) {
    datos[e.target.id] = e.target.value;  // Recordar... Objeto.Propiedad == Objeto[`Propiedad`]
    // console.log(datos);
}

// Refactoring de 1 y 2 
function mostrarAlerta (mensaje, clase = null ) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add(clase);
    formulario.appendChild(alerta);
    document.addEventListener('click',() => alerta.remove());
}

// // 1.Muestra el error en pantalla...
// function mostrarError(mensaje) {
//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error');
//     formulario.appendChild(error);
//     document.addEventListener('click',() => error.remove());
// }
// // 2.Muestra una alerta de que se envio correctamente...
// function mostrarCorrecto(mensaje) {
//     const alerta = document.createElement('P');
//     alerta.textContent = mensaje;
//     alerta.classList.add('correcto');
//     formulario.appendChild(alerta);
//     document.addEventListener('click',() => alerta.remove());
// }


