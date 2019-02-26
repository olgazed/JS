
/*Task3. Crеate a function that gets the value of <input type="color"> 
and sets the background of the body to this value*/


function setColor() {	
	x = document.getElementById("colorPicker").value
	document.body.style.backgroundColor = x;
}