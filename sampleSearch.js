<!DOCTYPE html>
<html>
<body>

<h1>Search Data</h1>
<form>
    <input id="title" type="text" value="National Tactics Developer" required>
    <input id="city" type="text" value="North Ottis" required>
    <button onclick="loadDoc()">search</button>
</form>
    <div id="ptable"></div>


<script>
    
//    var searchCity="North Ottis";
//    var searchTitle="National Tactics Developer";
   
    function loadDoc() {
        var searchCity = document.getElementById("city").value;
        var searchTitle = document.getElementById("title").value;
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://5cdfca23fc90670014267b93.mockapi.io/get_jobs", false);
        xhttp.send();
        var json = JSON.parse(xhttp.responseText);

        var newArray = json.filter(function (el) {
        return el.city == searchCity &&
             el.jobTitle == searchTitle; // Changed this so a home would match
        });
        var table="<table>";
       for(var i=0;newArray.length>i;i++){
           table+="<tr><td>"+newArray[i].id+"</td></tr>";
//           console.log(newArray[i].id);
       }
        table+="</table>";
                       document.getElementById("demo").innerHTML =table;

    }
//    loadDoc();
</script>

</body>
</html>
