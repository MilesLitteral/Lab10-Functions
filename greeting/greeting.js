function greet()
{
	console.log("Hello");
}

$(document).ready(function(){
	for(var x = 0; x < 3; x++)
	{
		greet();
	}
})
