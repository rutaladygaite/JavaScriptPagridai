
function kates(name, age, color, breed){
	this.name=name;
	this.age=age;
	this.color=color;
	this.breed=breed;
	//this.gautiVarda = function(){return this.name};
}

var cat1 = new kates("Daisy",3,"Ginger","Muskus");
var cat2 = new kates("Luna",4,"White","Aliana");
 /*
var a = prompt("Iveskite kates varda: ");
var b = prompt("Iveskite kates amziu: ");
var c = prompt("Iveskite kates spalva: ");
var d = prompt("Iveskite kates rusi: ");

var e = new kates(a,b,c,d);
console.log(e);

var kate = document.querySelector("#kate");
kate.innerHTML ="<h2>"+"Vardas: "+a+", amzius: "+b+", spalva: "+c+", rusis: "+d+"."+"</h2>";
*/
//console.log(cat1);
//console.log(cat2);

var vardas = document.querySelector("#name");
var amzius = document.querySelector("#age");
var spalva = document.querySelector("#color");
var rusis = document.querySelector("#breed");
var kate = document.querySelector("#kate");

var spausk = document.querySelector('.mygtukas');
spausk.addEventListener("click", spausdink);


function spausdink(){
	var a = new kates(vardas.value, amzius.value, spalva.value, rusis.value);
	kate.innerHTML = "<p>" +"Vardas: "+ a.name + ". Amzius: " +a.age+". Spalva: "+ a.color+ ". Rusis: "+ a.breed+"."+"</p>";
}

