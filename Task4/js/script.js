
    
    /*Task4. Create a tag cloud:
    * Visualize a string of tags (strings) in a given container
    * By given "minFontSize" and "maxFontSize", 
    generate the tags with different "font-size", 
    depending on the number of occurrences

        see example in "http://i.imgur.com/1Xtv2LC.png"
       var tags = [
           "cms", "javascript", "js", "ASP.NET MVC", ".net", ".net", "css", 
           "wordpress", "xaml", "js", "http",
           "web", "asp.net", "asp.net MVC", "ASP.NET MVC", "wp", 
           "javascript", "js", "cms", "html", "javascript",
           "http", "http", "CMS"
        ];
       var tagCloud = generateTagCloud(tags, 17, 42);*/

  var div = document.getElementById("tagCloud");
  var myArray = ["cms, javascript, js, ASP.NET MVC, .net, .net, css, wordpress, xaml, js, http, web, asp.net, asp.net MVC, ASP.NET MVC, wp, javascript, js, cms, html, javascript, http, http, CMS"];

    function arrToTags(div, arr) {

      var p = document.createElement("p");
      var a;
      div.appendChild(p);
     
      arr.forEach(function(item) { 
        if (Array.isArray(item)) {
          arrToTags(a, item);
            return; 
        } 

      a = document.createElement("a");
      a.appendChild(document.createTextNode(item));
      p.appendChild(a);
      var span = document.createElement("span");
      a.insertBefore(span, a.firstChild);
      span.appendChild(span.nextSibling);
      a.style.fontSize = 30 + "px";
      /*a.style.minFontSize = 17 + "px";
      a.style.maxFontSize = 42 + "px";*/
      }); 

    }; 

    arrToTags(div, myArray);


  /*I didn't complete this task, sorry*/