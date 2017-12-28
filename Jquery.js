$(function(){
/*
	$("#x").click(function(){
	$(this).hide();
	}); //paslepia teksta

	$("#show").click(function(){
		$("#x").show();
	}); //parodo teksta

	$("#toggle").click(function(){
		$("#x").toggle();
	}); //kai reikia parodo, kai reikia paslepia teksta

	$("#fadeIn").click(function(){
		$("#x").fadeIn(5000); //kai pasislepes, jis daro fade in
	});

	$("#fadeOut").click(function(){
		$("#x").fadeOut(5000); //kai pasislepes, jis daro fade in
	});

	$("#slideUp").click(function(){
		$("#x").slideUp(); //kai pasislepes, jis daro fade in
	});

	$("#slideUp").on("click mouseenter", function(){
		$("#x").slideUp(); //kai pasislepes, jis daro fade in, su on click, mouseenter - kai pelyte yra uzvedama
	});

	$("#slideDown").on("click mouseenter", function(){
		$("#x").slideDown(); //kai pasislepes, jis daro fade in, su on click, mouseenter - kai pelyte yra uzvedama
	});

	$("#slideToggle").on("click mouseenter", function(){
		$("#x").slideToggle(); //kai pasislepes, jis daro fade in, su on click, mouseenter - kai pelyte yra uzvedama
	});

	$("#show2s").click(function(){
		$("#x").fadeIn(500).delay(2000).fadeOut(500); //kai pasislepes, jis daro fade in
	});

	$("#backColor").click(function(){
		$("body").css("background-color", "salmon"); //kai pasislepes, jis daro fade in
	});
*/
	//sukurti paragrafa, kuris atsispauzdintu ekrane, pakeistu background spalva ir teksto spalva ir dydi
    $(".pirmas").html("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.").css(
    	{backgroundColor:"steelblue", 
    	fontSize: "30px", 
    	color: "white"});

	$(".antras").hide(); //paslepia visa teksta pries uzkraunant puslapi

	$("#show").click(function(){
		$(".antras").show();
	}); //parodo teksta

	//su mygtuko paspaudimu, reikia nustatyti, kad parodytu teksta 4s ir tekstas dingtu
	
	$("#hide").click(function(){
		$(".antras").delay(4000).fadeOut('fast');
	}); 

	$(".press").click(function(){
		var vardas = $("#name").val();
		var pavarde = $("#surname").val();
		console.log("Vardas: "+vardas + ". Pavarde: "+pavarde);
		$("div").text("Vardas: "+vardas + ". Pavarde: "+pavarde);
	});
})

