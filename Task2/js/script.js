  
    /*Task2. Write a script that creates 5 "div" elements 
    and moves them in circular path with interval of 100 milliseconds*/

function createDivs() {
    var div = 360 / 5;
    var radius = 200;
    var parentdiv = document.getElementById("parent");
    var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2);
    var offsetToChildCenter = 50;
    var totalOffset = offsetToParentCenter - offsetToChildCenter;
        for (var i = 1; i <= 5; ++i) {
        var childdiv = document.createElement("div");
        childdiv.className = "circle";
        childdiv.style.position = "absolute";
        var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
        var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
        childdiv.style.top = (y + totalOffset).toString() + "px";
        childdiv.style.left = (x + totalOffset).toString() + "px";
        parentdiv.appendChild(childdiv);
    } 
};


/* The task is not finished. Animation added in CSS.

    window.addEventListener("load", function (event) {
                
                var radius = 200;
                var x = ,
                var y = ;  
                var timerId;  

                function startAnimation() {
                    
                    timerId = setInterval(updateAnimation, 100);
                }

                function stopAnimation() {
                    clearTimeout(timerId);
                }

                function updateAnimation() {
                
                }
                startAnimation();
            });
        </script>*/