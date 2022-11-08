//constantes que toman los nombres de los botones que le fue asignado al arreglo
const botonNumeros=document.getElementsByName('data-number');
const botonOpera=document.getElementsByName('data-opera');
const botonIgual=document.getElementsByName('data-igual')[0];
const botonBorrar=document.getElementsByName('data-borrar')[0];
const botonCancela=document.getElementsByName('cancelaTodo')[0];
const botonVistaDia=document.getElementsByName('vista')[0];
const botonVistaNoche=document.getElementsByName('vista')[1];
//variables que ayudan a realizar calculos
var resultado= document.getElementById('resultado');
var opActual='';
var opAnt='';
var operacion=undefined;
//para cada boton de este arreglo al oprimirse se ejecuta la función 
//...de que al presionar el boton se tome el texto interior (un numero) 
//..como parametro de la función agregar Numero
botonNumeros.forEach(function(boton){
    boton.addEventListener('click',function(){
    agregarNumero(boton.innerText);
    })
});
//para cada boton de este arreglo al oprimirse se ejecuta la función 
//...de que al presionar el boton se tome el texto interior como parametro 
//..de la función selectOperacion
botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    })
});
//esta función recibe un parámetro op con el cual se modifican unos valores 
//de variables si la variable opAnt está inicializada, de igual manera se ejecuta la funcion calcular
function selectOperacion(op){
    //operadores lógicos
    if(opActual==='') return;
    if (opAnt!==''){
        calcular();
    }
    operacion=op.toString();
    opAnt=opActual;
    opActual='';
}
//esta función realiza las operaciones básicas
function calcular(){
    var calculo;
    const anterior=parseFloat(opAnt);
    const actual =parseFloat(opActual);
    if(isNaN(anterior)||isNaN(actual)) return;
    switch(operacion){
        case'+':
            calculo=anterior+actual;
            break;
        case'-':
            calculo=anterior-actual;
            break;
        case'*':
            calculo=anterior*actual;
            break;
        case'÷':
            calculo=anterior/actual;
            break;
        default:
            return;
    }
    opActual=calculo;
    operacion=undefined;
    opAnt='';
}
//acá añadí el evento al botón borrar que le permite ejecutar mi función backspace
botonBorrar.addEventListener('click',function(){
    backspace();
    actualizarDisplay();
});
botonIgual.addEventListener('click',function(){
    calcular();
    actualizarDisplay();
});
botonCancela.addEventListener('click',function(){
    clear();
    actualizarDisplay();
});
//este código sirve para cambiar estilos css desde la plantilla JS
botonVistaNoche.addEventListener('click',() =>{
    document.querySelector("body").style.background="black";
});
botonVistaDia.addEventListener('click',() =>{
    document.querySelector("body").style.background="linear-gradient(to right,red,yellow)";

});
//para realizar esta función convertí opActual en un string, luego la nueva opActual se actualizará
//en el display con el ultimo digito eliminado cada vez que se use backspace
function backspace(){
    var texto=opActual.toString();
    var borrada=(texto.substring(0,texto.length-1));
    opActual=borrada;
    actualizarDisplay();
}
//esta es la función que permite ir armando el numero en la calculadora
function agregarNumero(num){
    opActual=opActual.toString()+num.toString();
    actualizarDisplay();
}
//función para el boton c de clear
function clear(){
    opActual='';
    opAnt='';
    operacion=undefined;
}
//función que se usó para recargar el display con nueva info cada vez que fuera necesario. 
function actualizarDisplay(){
    resultado.value=opActual;
}
//segun el tutorial, para que al actualizar la página la calculadora salga en cero
clear();