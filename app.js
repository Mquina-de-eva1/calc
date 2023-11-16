let opa, opb, opr;.....
    
function init() {
//Números
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let cero = document.getElementById("cero");
//Operadores
    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");
    let multiplicacion = document.getElementById("multiplicacion");
    let division = document.getElementById("division");
//Mods
    let borrar = document.getElementById("borrar");
    let igual = document.getElementById("igual");
//Pantalla
    let display = document.getElementById("display");
//Operadores Números
    uno.onclick = function() {
        display.textContent += "1";
    }
    dos.onclick = function() {
        display.textContent += "2";
    }
    tres.onclick = function() {
        display.textContent += "3";
    }
    cuatro.onclick = function() {
        display.textContent += "4";
    }
    cinco.onclick = function() {
        display.textContent += "5";
    }
    seis.onclick = function() {
        display.textContent += "6";
    }
    siete.onclick = function() {
        display.textContent += "7";
    }
    ocho.onclick = function() {
        display.textContent += "8";
    }
    nueve.onclick = function() {
        display.textContent += "9";
    }
    cero.onclick = function() {
        display.textContent += "0";
    }
//On Click Operadores
    suma.onclick = function(){
        opa = display.textContent;
        opr = "+";
        display.textContent = "";
    }
    resta.onclick = function(){
        opa = display.textContent;
        opr = "-";
        display.textContent = "";
    }
    multiplicacion.onclick = function(){
        opa = display.textContent;
        opr = "*";
        display.textContent = "";
    }
    division.onclick = function(){
        opa = display.textContent;
        opr = "/";
        display.textContent = "";
    }
//On Click Mods
    borrar.onclick = function(){
        display.textContent = "";
        opa = "0";
        opb = "0";
        opr = "";
    }
    igual.onclick = function (){
        opb = display.textContent;
        resolver();
    }
//Funciones
    function resolver(){
        let resultado = 0;
        switch (opr) {
            case "+":
                if (opa == "" || opa == 0){
                    resultado = opb;
                }
                else{
                resultado = parseFloat(opa) + parseFloat(opb);
                }
                break;
            case "-":
                if (opa == "" || opa == 0){
                    resultado = -opb;
                }
                else{
                resultado = parseFloat(opa) - parseFloat(opb);
                }
                break;
            case "*":
                if (opa == ""){
                    resultado = 0;
                }
                else{
                resultado = parseFloat(opa) * parseFloat(opb);
                }
                break;
            case "/":
                if(opb == 0){
                    resultado = "Indivisible por 0"
                }
                else if (opa == ""){
                    resultado = 0;
                }
                else{
                resultado = parseFloat(opa) / parseFloat(opb);
                }
                break;
            default:
                resultado = "Error xd"
                break;
        }
        display.textContent = resultado;
    }
}
