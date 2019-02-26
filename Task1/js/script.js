
    
    /*Task1. Write a script that selects all the div nodes 
	that are directly inside other div elements
    * Create a function using querySelectorAll()
    * Create a function using getElementsByTagName()*/



function selectInnerDivsQuerySelectorAll() {

    var innerDivNodes = document.querySelectorAll("div > div");

        for (var i = 0; i < innerDivNodes.length; i++) {
            var x = innerDivNodes[i];
            console.log(x);
            x.style.background = "blue";
        }

    console.log("The number of inner div nodes is " + innerDivNodes.length);
    document.getElementById("divsNumber").innerHTML = "The number of inner div nodes is " + innerDivNodes.length;
};


function selectInnerDivsGetElementsByTagName() {

    var divElem = document.getElementById("rectangle");
    var innerDivElements = divElem.getElementsByTagName("div");

    	for (var i = 0; i < innerDivElements.length; i++) {
            var x = innerDivElements[i];
                console.log(x);
    			x.style.background = "purple";
    	}

    console.log("The number of inner div nodes is " + innerDivElements.length);
    document.getElementById("divsNumber").innerHTML = "The number of inner div nodes is " + innerDivElements.length;
};