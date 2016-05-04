var factors = []
var OG = 0

function factorial(n)
{
	for(var i = n; i > 0; i--)
	{
		alert("Factorial " + OG +" times " + i + " is " + (n = n * i))
	}
}

$(document).ready(function(){
	var x = prompt("Input a variable for Factorial output")
	OG = x
	factorial(x)
})