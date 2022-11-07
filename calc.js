const botonNumeros=document.getElementsByName('data-number');
const botonOpera=document.getElementsByName('data-opera');
const botonIgual=document.getElementsByName('data-igual')[0];
const botonBorrar=document.getElementsByName('data-borrar')[0];
const botonCancela=document.getElementsByName('cancelaTodo')[0];
const botonVista=document.getElementsByName('vista');
var resultado= document.getElementById('resultado');
var opActual='';
var opAnt='';
var operacion=undefined;
botonNumeros.forEach(function(boton){
    boton.addEventListener('click',function(){
    agregarNumero(boton.innerText);
    })
});
botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    })
});
botonIgual.addEventListener('click',function(){
    calcular();
    actualizarDisplay();
});
botonCancela.addEventListener('click',function(){
    clear();
    actualizarDisplay();
});
function agregarNumero(num){
    opActual=opActual.toString()+num.toString();
    actualizarDisplay();
}
function clear(){
    opActual='';
    opAnt='';
    operacion=undefined;
}
function actualizarDisplay(){
    resultado.value=opActual;
}
clear();