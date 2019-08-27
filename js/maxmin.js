var desde = document.getElementById("input-uno");
var hasta = document.getElementById("input-dos");

var btn = document.getElementById("btn");
var resultado = document.getElementById("resultado");

btn.addEventListener("click",function(){
    var n1 = desde.value;
    var n2 = hasta.value;
    resultado.innerHTML = "Resultado: " + minmax(n1,n2);
});

function minmax(min, max){
    if(parseInt(min)>parseInt(max)){
        alert("Rango incorrecto, intente nuevamente");
        desde.innerHTML = "";
        hasta.innerHTML = "";
    }else{
        if(isNumber(min)){
            if(isNumber(max)){
                var random = parseInt(Math.floor(Math.random()*(max-min)))+parseInt(min);
                return random;
            }else{
                alert("El segundo valor no es un numero, intente nuevamente.")
            }
        }else{
            alert("El primer valor no es un numero, intente nuevamente.");
        }
    }
}

function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
  }