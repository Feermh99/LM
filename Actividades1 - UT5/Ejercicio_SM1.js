'use strict'

let num;
num = Number(prompt("Introduce un numero a multiplicar: "));
multi(num)
function multi(numero){
    for(i=1;i<=10;i++){
        console.log(numero + "x" + i + "=" + numero * i);
    }
}

/*
function MostrarTablaMultiplicar(num){
    document.write("<h2>Tabla de multiplicar del "+ num +"</h2>")
    document.write("<ul><");
    for(i=1;i<=10;i++){
        prompt("<li>");
        prompt(num + "x" + i + "=" + num * i);
        prompt("</li>");
    }
    prompt("</ul>");
}

MostrarTablaMultiplicar(5);
*/