
    
    /*Task3. Create a "textarea" and two "input"s with "type="color""
    * Make the font "color" of the text area as the value of the first color "input"
    * Make the "background-color" of the "textarea" as the value of the second "input"*/



function createTextarea() {
    textarea = document.createElement("textarea");
     
    textarea.style.width = 450 + "px";
    textarea.style.height = 150 + "px";
    textarea.style.borderStyle = "solid";
    textarea.style.borderRadius = 5 + "px";
    textarea.style.borderColor = "#184144";
    textarea.style.borderWidth = 2 + "px";
    textarea.value = "You are never given a wish without also being given the power to make it come true. You may have to work for it, however. Richard Bach"
    
    document.body.appendChild(textarea);
};

function createColorInput() {
    var color = document.createElement("INPUT");
    color.setAttribute("type", "color");
    color.setAttribute( "id", "colorPicker");
    color.setAttribute( "value", "#134728");
    document.body.appendChild(color);
};

function createBackgroundColorInput() {
    var bgColor = document.createElement("INPUT");
    bgColor.setAttribute("type", "color");
    bgColor.setAttribute("id", "bgColorPicker");
    bgColor.setAttribute( "value", "#dae4e5");
    document.body.appendChild(bgColor);
};

function setColor() {   
    var x = document.getElementById("colorPicker").value;
    textarea.style.color = x;
};

function setBackgroundColor() {   
    var x = document.getElementById("bgColorPicker").value;
    textarea.style.backgroundColor = x;
}

