/*window.onload=getThetables;
 function getTheTables(){
 	alert("alert")
 }*/
//console.log(jQuery===$)
//console.log($)
//console.log($("h1")[0].outerHTML));
//jQuery('h1')
//console.log(document.getElementsByTagName$("h1")[0])
//console.log($('h1').html("Text from jQuery"))
//console.log(typeof(console.log))
//var bar console=console.log()
//console.log=("food" + bar)

/*var myFunct = (){
	return "string"
}
var another =myFunct()
/$('button').on("click", function(){
$("h1").css("color","blue");
$("h1").text("changed");
//$("p").css("visibility","visible");
$('p').fadeOut(2000);

})*/
function generateEq(){
	var eq = {
		a: Math.floor((Math.random()*100)+1),
		b: Math.floor((Math.random()*100)+1)
	}
	return eq
}
var eq = generateEq()
	$('#quiz').text(eq.a + "+" + eq.b);
	correctans=eq.a+eq.b


$('#answer').on('click',function(){

	var ans = ($('input').val())
	if (ans ==correctans){
		alert('correct')

	}
	else {
		alert('incorrect')
	}

	var eq= generateEq()
	$('#quiz').text (eq.a + "+" + eq.b);
	correctans= eq.a+(eq).b
	var ans = ($('input').val(''))
})





	