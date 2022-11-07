const botonNumeros=document.getElementsByName('data-number');
const botonOpera=document.getElementsByName('data-opera');
const botonIgual=document.getElementsByName('data-igual');
const botonBorrar=document.getElementsByName('data-borrar')[0];
const botonCancela=document.getElementsByName('cancelaTodo')[0];
const botonVista=document.getElementsByName('vista')[0];
var resultado= document.getElementById('resultado');

botonNumeros.forEach(function(boton){
    boton.addEventListener('click',function(){
    agregarNumero(boton.innerText);
    })
})
botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    })
})
botonIgual.addEventListener('click',function(){
    calcular();
    actualizarDisplay();
})