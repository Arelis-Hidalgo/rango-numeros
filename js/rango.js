var btn = document.getElementById("btn");
var resultado = document.getElementById("resultado");
var desde = document.getElementById("input-uno");
var hasta = document.getElementById("input-dos");

btn.addEventListener("click",function(){
	resultado.innerHTML = obtenerNumero(n1,n2);
});

function obtenerNumero(){

	var n1 = desde.nodeValue;
	var n2 = hasta.value;
	if(n1>n2){
		alert("Mal ingresado el rango, intente nuevamente.");
	
	}else{
		if(isNumber(n1)){
			if(isNumber(n2)){
				return Math.round((Math.random() * (n2 - n1)) + n1);
			}else{
				alert("Limite superior no es numero.")
			}
		}else{
			alert("limite inferior no es numero.")
		}
	}
}

function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
  }