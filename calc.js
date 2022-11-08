const botonNumeros=document.getElementsByName('data-number');
const botonOpera=document.getElementsByName('data-opera');
const botonIgual=document.getElementsByName('data-igual')[0];
const botonBorrar=document.getElementsByName('data-borrar')[0];
const botonCancela=document.getElementsByName('cancelaTodo')[0];
const botonVistaDia=document.getElementsByName('vista')[0];
const botonVistaNoche=document.getElementsByName('vista')[1];
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
function selectOperacion(op){
    if(opActual==='') return;
    if (opAnt!==''){
        calcular();
    }
    operacion=op.toString();
    opAnt=opActual;
    opActual='';
}
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
botonVistaDia.addEventListener('click',function(){
    clear();
    actualizarDisplay();
});
botonVistaNoche.addEventListener('click',function(){
    clear();
    actualizarDisplay();
});
function backspace(){
    var texto=opActual.toString();
    var borrada=(texto.substring(0,texto.length-1));
    opActual=borrada;
    actualizarDisplay();
}
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