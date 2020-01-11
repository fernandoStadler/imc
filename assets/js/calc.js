


function imc(){
var altura=document.getElementById('altura').value;
var peso=document.getElementById('peso').value;
var resultado;
var sqrAltura;
var novoTexto = document.getElementById('resultado');
var rImc = document.getElementById('Rimc');
var rClassific = document.getElementById('RClassific');
var rOb = document.getElementById('Rob');







sqrAltura = altura*altura;

resultado=peso /sqrAltura;

novoTexto.textContent = parseFloat(resultado.toFixed(2));


if(resultado<18.5){
var ReIMC =document.getElementById('tr1').style.backgroundColor = 'lightgreen'
var ReIMC =document.getElementById('tr1').style.color = 'black';
var ReIMC =document.getElementById('tr2').style.backgroundColor = 'white'
var ReIMC =document.getElementById('tr2').style.color = 'black';
var ReIMC =document.getElementById('tr3').style.backgroundColor = 'white';
var ReIMC =document.getElementById('tr4').style.backgroundColor = 'white';
var ReIMC =document.getElementById('tr4').style.color = 'black';
var ReIMC =document.getElementById('tr5').style.backgroundColor = 'white';
var ReIMC =document.getElementById('tr5').style.color = 'black';

rImc.textContent = 'IMC: Menor que 18,5';
rImc.style.backgroundColor = 'lightgreen';
rImc.style.color = 'black';
rClassific.textContent = 'Classificação: Magreza';
rClassific.style.backgroundColor = 'lightgreen';
rClassific.style.color = 'black';
rOb.textContent = 'Obesidade(Grau): 0';
rOb.style.backgroundColor = 'lightgreen';
rOb.style.color = 'black';

}

if(resultado>=18.5 && resultado<=24.9){
  

    
    var ReIMC =document.getElementById('tr1').style.backgroundColor = 'white';
    var ReIMC =document.getElementById('tr1').style.color = 'black';
    var ReIMC =document.getElementById('tr2').style.backgroundColor = 'green'
    var ReIMC =document.getElementById('tr2').style.color = 'white';
    var ReIMC =document.getElementById('tr3').style.backgroundColor = 'white';
    var ReIMC =document.getElementById('tr4').style.backgroundColor = 'white';
    var ReIMC =document.getElementById('tr4').style.color = 'black';
    var ReIMC =document.getElementById('tr5').style.backgroundColor = 'white';
    var ReIMC =document.getElementById('tr5').style.color = 'black';
    

    
rImc.textContent = 'IMC: ENTRE 18,5 E 24,9';
rImc.style.backgroundColor = 'green';
rImc.style.color = 'white';
rClassific.textContent = 'Classificação: NORMAL';
rClassific.style.backgroundColor = 'green';
rClassific.style.color = 'white';
rOb.textContent = 'Obesidade(Grau): 0';
rOb.style.backgroundColor = 'green';
rOb.style.color = 'white'; 
}
    

    if(resultado>=25.0 && resultado<=29.9){
        var ReIMC =document.getElementById('tr1').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr1').style.color = 'black';
        var ReIMC =document.getElementById('tr2').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr2').style.color = 'black';
        var ReIMC =document.getElementById('tr3').style.backgroundColor = 'yellow';
        var ReIMC =document.getElementById('tr4').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr4').style.color = 'black';
        var ReIMC =document.getElementById('tr5').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr5').style.color = 'black';

    
        rImc.textContent = 'IMC: ENTRE 25,0 E 29,9';
        rImc.style.backgroundColor = 'yellow';
        rImc.style.color = 'black';
        rClassific.textContent = 'Classificação: SOBREPESO';
        rClassific.style.backgroundColor = 'yellow';
        rClassific.style.color = 'black';
        rOb.textContent = 'Obesidade(Grau): I';
        rOb.style.backgroundColor = 'yellow';
        rOb.style.color = 'black'; 
        
    }

    /***/


    if(resultado>=30.0 && resultado<=39.9){
        var ReIMC =document.getElementById('tr1').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr1').style.color = 'black';
        var ReIMC =document.getElementById('tr2').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr2').style.color = 'black';
        var ReIMC =document.getElementById('tr3').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr4').style.backgroundColor = 'darkorange';
        var ReIMC =document.getElementById('tr4').style.color = 'black';
        var ReIMC =document.getElementById('tr5').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr5').style.color = 'black';


        rImc.textContent = 'IMC: ENTRE 30,0 E 39,9';
        rImc.style.backgroundColor = 'darkorange';
        rImc.style.color = 'black';
        rClassific.textContent = 'Classificação: OBESIDADE';
        rClassific.style.backgroundColor = 'darkorange';
        rClassific.style.color = 'black';
        rOb.textContent = 'Obesidade(Grau): II';
        rOb.style.backgroundColor = 'darkorange';
        rOb.style.color = 'black';

    }

    /*darkred**/

    if(resultado>40.00){
        var ReIMC =document.getElementById('tr1').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr1').style.color = 'black';
        var ReIMC =document.getElementById('tr2').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr2').style.color = 'black';
        var ReIMC =document.getElementById('tr3').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr4').style.backgroundColor = 'white';
        var ReIMC =document.getElementById('tr4').style.color = 'black';
        var ReIMC =document.getElementById('tr5').style.backgroundColor = 'darkred';
        var ReIMC =document.getElementById('tr5').style.color = 'white';


        rImc.textContent = 'IMC: MAIOR QUE 40,0	';
        rImc.style.backgroundColor = 'darkred';
        rImc.style.color = 'white';
        rClassific.textContent = 'Classificação: OBESIDADE GRAVE';
        rClassific.style.backgroundColor = 'darkred';
        rClassific.style.color = 'white';
        rOb.textContent = 'Obesidade(Grau): III';
        rOb.style.backgroundColor = 'darkred';
        rOb.style.color = 'white';

    }

 
}

function clean(){

var rOb = document.getElementById('Rob');
var altura=document.getElementById('altura').value='';
var peso=document.getElementById('peso').value='';
var resultado=document.getElementById('resultado').textContent='';
var ReIMC =document.getElementById('interIMC').textContent='';
var ReIMC =document.getElementById('tr1').style.backgroundColor = 'white';
var ReIMC =document.getElementById('tr2').style.backgroundColor = 'white';
var ReIMC =document.getElementById('tr2').style.color = 'black';
var ReIMC =document.getElementById('tr3').style.backgroundColor = 'white';
var ReIMC =document.getElementById('tr3').style.color = 'black';
var ReIMC =document.getElementById('tr4').style.backgroundColor = 'white';
var ReIMC =document.getElementById('tr4').style.color = 'black';
var ReIMC =document.getElementById('tr5').style.backgroundColor = 'white';
var ReIMC =document.getElementById('tr5').style.color = 'black';
var rImc = document.getElementById('Rimc');
var rClassific = document.getElementById('RClassific');

rImc.textContent = 'IMC: ';
rImc.style.backgroundColor = 'white';
rImc.style.color = 'black';
rClassific.textContent = 'Classificação: ';
rClassific.style.backgroundColor = 'white';
rClassific.style.color ='black';
rOb.textContent = 'Obesidade(Grau): ';
rOb.style.backgroundColor = 'white';
rOb.style.color = 'black';



}

