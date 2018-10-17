<!DOCTYPE html>
<html>
<body>


<input type="date" id="cust_date"/>
<select id="cust_time"></select>

<script>
{
  let today = new Date();
  let hr = today.getHours();
  let min = today.getMinutes();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let year = today.getFullYear();

  function get_date() {
    if(month < 10)
      month = '0' + month.toString();
    if(day < 10)
      day = '0' + day.toString();
    var minDate= year + '-' + month + '-' + day;
    document.getElementById("cust_date").setAttribute('min', minDate); 
  }

  function get_time() { 
    var html = "";
    if(min<30)
    {
        html = html + "<option value="+hr+":30>"+hr+":30</option>";
    }
    hr=hr+1;
    for(var i = 0; hr < 24; hr++,i++){
            html = html + "<option value="+hr+":00>"+hr+":00</option>";
            html = html + "<option value="+hr+":30>"+hr+":30</option>";

    }
     document.getElementById("cust_time").innerHTML = html;
  }
  
    get_date();
    get_time();
}
</script>

</body>
</html>
