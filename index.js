function inserir(x){
    var numero = document.getElementById('result').innerHTML;

    document.getElementById('result').innerHTML = numero + x;
}
function clean(){
    document.getElementById('result').innerHTML = ""
}//função criada para apagar geral no visor da calculadora

function back(){

    var resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado = document.getElementById('result').innerHTML;
    if(resultado)
    {
        document.getElementById('result').innerHTML = eval(resultado)
    }
}