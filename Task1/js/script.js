
    
    /*Task1. Write a script that creates a number of "div" elements. 
    Each "div" element must have the following
    * Random "width" and "height" between "20px" and "100px"
    * Random "background-color"
    * Random "color"
    * Random "position" on the screen
    * A "strong" element with text "div" inside the "div"
    * Random "border-radius"
    * Random "border-color"
    * Random "border-width" between "1px" and "20px"*/



function createDivs() {

    var div = document.createElement("div");
    
   
    div.style.width = getRandomInclusive(20, 100) + "px";
    div.style.height = getRandomInclusive(20, 100) + "px";

    div.style.backgroundColor = getRandomColor();
    div.style.color = getRandomColor();

    div.style.position = "absolute";
    div.style.top = getRandomInclusive(25, 90) + "%";
    div.style.left = getRandomInclusive(0, 90) + "%";

    div.innerHTML = "<strong>div</strong>";

    div.style.borderStyle = ["solid", "dashed", "dotted", "double", "groove", "ridge", "inset", "outset"][getRandomInclusive(0, 7)];
    div.style.borderRadius = getRandomInclusive(0, 50) + "%";
    div.style.borderColor = getRandomColor();
    div.style.borderWidth = getRandomInclusive(1, 20) + "px";
    

    document.body.appendChild(div);
};

function getRandomInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getRandomColor() {
  var characters = "0123456789ABCDEF";
  var color = "#";
    for (var i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }
  return color;
}