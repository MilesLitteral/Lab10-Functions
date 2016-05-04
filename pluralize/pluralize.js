function pluralize(noun)
{
	console.log(noun + "s");
	alert(noun + "s");
}

$(document).ready(function(){
	var uI = prompt("Input a Word");
	pluralize(uI);
})