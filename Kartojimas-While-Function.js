
/*
function kelimas(){
 var x =  document.getElementById("kvadratas").value;
 var kvad = x*x;
  console.log("Kvadratas yra: "+kvad);
  atspausdinti(kvad);
}

function atspausdinti(y){
	var element = document.querySelector("#spausdinti");
	element.innerHTML = y;
}
*/
var a = prompt("Irasykite pirmaji skaiciu: ");
var b = prompt ("Irasykite antraji skaiciu: ");

/*
function suma (x,y){
	var c = parseInt(x)+parseInt(y);
	console.log("Suma yra: " + c);

}

suma(a,b);

function skirtumas(x,y){
	if(x>y){
		var c = parseInt(x-y);
		return ("Skirtumas yra: "+c);
	}
	else{
		var c = parseInt(y-x);
		return ("Skirtumas yra: "+ c);
	}
}

console.log(skirtumas(a,b));
*/
function dalyba (x,y){
	if(x>y){
		var c =x/y;
		return ("Dalybos rezultatas yra: "+c);
	}
	else{
		var c =y/x;
		return ("Dalybos rezultatas yra: "+ c);
	}
}

console.log(dalyba(parseInt(a),parseInt(b)));