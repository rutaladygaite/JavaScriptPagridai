var metaiElement = document.querySelector("#age");
var sunsMetai = document.querySelector("#sunsMetai");
var binaryElement = document.querySelector("#binary");
var spausk = document.querySelector(".mygtukas");
var desimtysElement = document.querySelector("#desimtys");
var skaic = document.querySelector(".paspaudimas");

var firstElement = document.querySelector("#first");
var secondElement = document.querySelector("#second");
var addition = document.querySelector(".addition");
var subtraction = document.querySelector(".subtraction");
var multiplication = document.querySelector(".multiplication");
var division = document.querySelector(".division");
var result = document.querySelector("#result");

var pirmasElement = document.querySelector("#pirmas");
var antrasElement = document.querySelector("#antras");
var treciasElement = document.querySelector("#trecias");
var ketvirtasElement = document.querySelector("#ketvirtas");
var penktasElement = document.querySelector("#penktas");
var sestasElement = document.querySelector("#sestas");
var septintasElement = document.querySelector("#septintas");
var astuntasElement = document.querySelector("#astuntas");
var devintasElement = document.querySelector("#devintas");
var sumavimas = document.querySelector("#sumavimas");
var press = document.querySelector(".press");

var zodisElement = document.querySelector("#word");
var raidesAbeceleje = document.querySelector("#raidesAbeceleje");
var abcMygtukas = document.querySelector(".abcMygtukas");

function formule(){
    var metai = metaiElement.value;
    metai = metai*7;
    console.log(metai);
    sunsMetai.innerHTML = "Jusu suns metai yra: "+ metai; 
    return metai;
}

function binaryCalc(){
    var binary = binaryElement.value;
    var b = binary.split("").reverse();
    var N = 0;
    var suma = 0;

    for(var i=0; i<b.length; i++){
    N = parseInt(b[i])*Math.pow(2,i);
    suma = suma + N;
    }
    desimtys.innerHTML = "Desimtaineje sistemoje: "+suma;
    console.log("Desimtaineje sistemoje: "+suma);
    return suma;
}

function suma() {
    var first = firstElement.value;
    var second = secondElement.value;
    var suma = parseInt(first) + parseInt(second);
    result.innerHTML = "Siu skaiciu suma: " +suma;
    return suma;
}

function skirtumas() {
    var first = firstElement.value;
    var second = secondElement.value;
    var skirtumas = parseInt(first) - parseInt(second);
    result.innerHTML = "Siu skaiciu skirtumas: " + skirtumas;
    return skirtumas;
}

function daugyba() {
    var first = firstElement.value;
    var second = secondElement.value;
    var daugyba = parseInt(first) * parseInt(second);
    result.innerHTML = "Siu skaiciu daugyba: " + daugyba;
    return daugyba;
}

function dalyba() {
    var first = firstElement.value;
    var second = secondElement.value;
    var dalyba = parseInt(first) / parseInt(second);
    result.innerHTML = "Siu skaiciu dalyba: " + dalyba;
    return dalyba;
}

function magiskasisSkaicius(){
    var pirmas = pirmasElement.value;
    var antras = antrasElement.value;
    var trecias = treciasElement.value;
    var ketvirtas = ketvirtasElement.value;
    var penktas = penktasElement.value;
    var sestas = sestasElement.value;
    var septintas = septintasElement.value;
    var astuntas = astuntasElement.value;
    var devintas = devintasElement.value;

    var arr = [ [parseInt(pirmas), parseInt(antras), parseInt(trecias)],
                [parseInt(ketvirtas), parseInt(penktas), parseInt(sestas)],
                [parseInt(septintas), parseInt(astuntas), parseInt(devintas)],

    ]
    console.log(arr);

    var a = arr[0][0]+arr[0][1]+arr[0][2];
    var b = arr[1][0]+arr[1][1]+arr[1][2];
    var c = arr[2][0]+arr[2][1]+arr[2][2];
    var d = arr[0][0]+arr[1][1]+arr[2][2];
    var e = arr[0][2]+arr[1][1]+arr[2][0];
    var f = arr[0][0]+arr[1][0]+arr[2][0];
    var g = arr[0][1]+arr[1][1]+arr[2][1];
    var h = arr[0][2]+arr[1][2]+arr[2][2];

    if (a == b && a==c && a==d && a==e && a==f && a==g && a==h ){
    console.log("Tai yra magiskasis kvadratas");
    sumavimas.innerHTML = "Tai yra magiskasis kvadratas.";
    }
    else{console.log("Tai nera magiskasis kvadratas");
    console.log(a,b,c,d,e,f,g,h);
    sumavimas.innerHTML = "Tai nera magiskasis kvadratas.";}
    }


function rusiuotiRaides(){
    var zodis = zodisElement.value;
    var rusiuoti = zodis.split("").sort().join('');
    console.log(rusiuoti);
    raidesAbeceleje.innerHTML = rusiuoti;

}

spausk.addEventListener("click", formule);
skaic.addEventListener("click", binaryCalc);
addition.addEventListener("click", suma);
subtraction.addEventListener("click", skirtumas);
multiplication.addEventListener("click", daugyba);
press.addEventListener("click", magiskasisSkaicius);
abcMygtukas.addEventListener("click", rusiuotiRaides);