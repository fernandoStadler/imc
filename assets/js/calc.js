function imc(){
var altura=document.getElementById('altura').value;
var peso=document.getElementById('peso').value;
var resultado;
var sqrAltura;
var novoTexto = document.getElementById('resultado');






sqrAltura = altura*altura;

resultado=peso /sqrAltura;

novoTexto.textContent = parseFloat(resultado.toFixed(2));


if(resultado<18.5){
var ReIMC =document.getElementById('tr1').style.backgroundColor = 'lightgreen'
var ReIMC =document.getElementById('tr1').style.color = 'black'
var ReIMC =document.getElementById('tr2').style.backgroundColor = 'white'
var ReIMC =document.getElementById('tr2').style.color = 'black'
var ReIMC =document.getElementById('tr3').style.backgroundColor = 'white';
var ReIMC =document.getElementById('tr4').style.backgroundColor = 'white';
var ReIMC =document.getElementById('tr4').style.color = 'black'
var ReIMC =document.getElementById('tr5').style.backgroundColor = 'white';
var ReIMC =document.getElementById('tr5').style.color = 'black'


}

if(resultado>=18.5 && resultado<=24.9){
  

    
    var ReIMC =document.getElementById('tr1').style.backgroundColor = 'white';
    var ReIMC =document.getElementById('tr1').style.color = 'black'
    var ReIMC =document.getElementById('tr2').style.backgroundColor = 'green'
    var ReIMC =document.getElementById('tr2').style.color = 'white'
    var ReIMC =document.getElementById('tr3').style.backgroundColor = 'white';
    var ReIMC =document.getElementById('tr4').style.backgroundColor = 'white';
    var ReIMC =document.getElementById('tr4').style.color = 'black'
    var ReIMC =document.getElementById('tr5').style.backgroundColor = 'white';
    var ReIMC =document.getElementById('tr5').style.color = 'black'
    
    }
    

    if(resultado>=25.0 && resultado<=29.9){
        var ReIMC =document.getElementById('tr1').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr1').style.color = 'black'
        var ReIMC =document.getElementById('tr2').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr2').style.color = 'black'
        var ReIMC =document.getElementById('tr3').style.backgroundColor = 'yellow';
        var ReIMC =document.getElementById('tr4').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr4').style.color = 'black'
        var ReIMC =document.getElementById('tr5').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr5').style.color = 'black'

    }

    /***/


    if(resultado>=30.0 && resultado<=39.9){
        var ReIMC =document.getElementById('tr1').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr1').style.color = 'black'
        var ReIMC =document.getElementById('tr2').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr2').style.color = 'black'
        var ReIMC =document.getElementById('tr3').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr4').style.backgroundColor = 'darkorange';
        var ReIMC =document.getElementById('tr4').style.color = 'black'
        var ReIMC =document.getElementById('tr5').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr5').style.color = 'black'

    }

    /*darkred**/

    if(resultado>40.00){
        var ReIMC =document.getElementById('tr1').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr1').style.color = 'black'
        var ReIMC =document.getElementById('tr2').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr2').style.color = 'black'
        var ReIMC =document.getElementById('tr3').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr4').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr4').style.color = 'black'
        var ReIMC =document.getElementById('tr5').style.backgroundColor = 'darkred';
        var ReIMC =document.getElementById('tr5').style.color = 'white'

    }

 
}

function clean(){

var altura=document.getElementById('altura').value='';
var peso=document.getElementById('peso').value='';
var resultado=document.getElementById('resultado').textContent='';
var ReIMC =document.getElementById('interIMC').textContent='';
var ReIMC =document.getElementById('tr1').style.backgroundColor = 'white';
var ReIMC =document.getElementById('tr2').style.backgroundColor = 'white'
var ReIMC =document.getElementById('tr2').style.color = 'black'
var ReIMC =document.getElementById('tr3').style.backgroundColor = 'white'
var ReIMC =document.getElementById('tr3').style.color = 'black'
var ReIMC =document.getElementById('tr4').style.backgroundColor = 'white'
var ReIMC =document.getElementById('tr4').style.color = 'black'
var ReIMC =document.getElementById('tr5').style.backgroundColor = 'white'
var ReIMC =document.getElementById('tr5').style.color = 'black'


}

