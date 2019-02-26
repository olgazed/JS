
/*Task2. Create a function that gets the value of <input type="text"> 
and prints its value to the console*/

function inputTextValue() {
    var x = document.getElementById("typeText").value;
    document.getElementById("printText").innerHTML = x;
    console.log(x)
}