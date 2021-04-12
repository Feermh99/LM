'use strict'

let num1 =+ (prompt("numero 1: "));
let num2 =+ (prompt("numero 2: "));
let num3 =+ (prompt("numero 3: "));

if(num1 > num2 && num1 > num3){
    console.log("El numero 1 es mas grande");
}
else if(num2 > num1 && num2 > num3){
    console.log("El numero 2 es mas grande");
}
else if(num3 > num1 && num3 > num2){
    console.log("El numero 3 es mas grande");
}