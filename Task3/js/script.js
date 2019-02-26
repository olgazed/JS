
	/*Task3 DOM Operations
	Create a function that takes an id or DOM element and an array of contents
	* If an id is provided, select the element
	* Add divs to the element
  	* Each div's content must be one of the items from the contents array
	* The function must remove all previous content from the DOM element provided
	* Throws if:
  	* The provided first parameter is neither string or existing DOM element
  	* The provided id does not select anything (there is no element that has such an id)
  	* Any of the function params is missing
  	* Any of the function params is not as described
  	* Any of the contents is neither "string" nor "number"
    * In that case, the content of the element **must not be** changed*/


var element  = document.getElementById("container");
var fragment = document.createDocumentFragment();
var content = ["1", "2", "3", "4", "5", "Love", "Peace", "Harmony", "Beauty", "Kindness"];
 
function check (element, content) {
 	if (typeof element !== "string" && !(element instanceof HTMLElement)) {
        throw "No DOM Element or string";
    }
    if (document.getElementById(id) === null) {
     	throw new Error("No element with such an id");
    }
    if (arguments < 2) {
        throw "Arguments are less than 2";
    }
    if (element === undefined || content === undefined || element === null || content === null) {
       	throw "Error";
    }
    if (!(Array.isArray(content))) {
        throw "Content is not an array";
    }
    if (typeof content !== "number" && typeof content !== "string") {
        throw "Content is not a number or a string";
    }
};

content.forEach(function(item) {
    var div = document.createElement("div");
    div.textContent = item;
    fragment.appendChild(div);
});

element.innerHTML = "";
element.appendChild(fragment);

/*The task is incomplete.*/