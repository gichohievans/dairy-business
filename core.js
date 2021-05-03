

  alert("welcome to my dairy manager");
function milkInput() {
    var txt;
    if (confirm("do you want to add this data to your array?!")) {
      txt = "You pressed OK!";
    } else {
      return;
    }
    var a = parseInt(document.getElementById("sa").value);
    var b = parseInt(document.getElementById("sb").value);
    var c = parseInt(document.getElementById("sc").value);
    var d = parseInt(document.getElementById("sd").value);
  
    var daily = ((a) + (b) + (c) + (d));
    var Dprice =(daily*45);
    document.getElementById("daily").innerHTML = "Total Daily Milk is  " + daily + " litres which is  "+ Dprice + "shillings";
    
    var price = 45;
    var week= 7;
    var month = 30;
    var annual= 12;

    var weekly= (daily * week);
    var Wprice=(Dprice * 7)
    document.getElementById("weekly").innerHTML = "Total weekly Milk is  " + weekly + " litres which is  " + Wprice +"shillings";


  

  var jan=(daily * 31);
  var janPrice=(Dprice*31);
  document.getElementById("jan").innerHTML = "Total production in January is  "   + jan +   " litres which is  "   + janPrice +   "shillings";

  var feb=(daily*29);
  var febPrice=(Dprice*29)
  document.getElementById("feb").innerHTML = "Total production in February is  "   + feb +   " litres which is  "   + febPrice +   "shillings";
  var mar=(daily * 31);
  var marPrice=(Dprice*31);
  document.getElementById("mar").innerHTML = "Total production in March is  "   + mar +   " litres which is  "   + marPrice +   "shillings";

  var apr=(daily * 30);
  var aprPrice=(Dprice*30);
  document.getElementById("apr").innerHTML = "Total production in April is  "   + apr +   " litres which is  "   + aprPrice +   "  shillings";

  var may=(daily * 31);
  var mayPrice=(Dprice*31);
  document.getElementById("may").innerHTML = "Total production in May is  "   + may +   " litres which is  "   + mayPrice +   "  shillings";

  var jun=(daily * 30);
  var junPrice=(Dprice*30);
  document.getElementById("jun").innerHTML = "Total production in June is  "   + jun +   " litres which is  "   + junPrice +   "  shillings";

  var jul=(daily * 31);
  var julPrice=(Dprice*31);
  document.getElementById("jul").innerHTML = "Total production in July is  "   + jul +   " litres which is  "   + julPrice +   "  shillings";

  var aug=(daily * 31);
  var augPrice=(Dprice*31);
  document.getElementById("aug").innerHTML = "Total production in August is  "   + aug +   " litres which is  "   + augPrice +   "  shillings";

  var sept=(daily * 30);
  var septPrice=(Dprice*30);
  document.getElementById("sept").innerHTML = "Total production in September is  "   + sept +   " litres which is  "   + septPrice +   "  shillings";

  var oct=(daily * 31);
  var octPrice=(Dprice*31); 
  document.getElementById("oct").innerHTML = "Total production in October is  "   + oct +   " litres which is  "   + octPrice +   "  shillings";

  var nov=(daily * 30);
  var novPrice=(Dprice*30);
  document.getElementById("nov").innerHTML = "Total production in November is  "   + nov +   " litres which is  "   + novPrice +   "  shillings";

  var dec=(daily * 31);
  var decPrice=(Dprice*31);
  document.getElementById("dec").innerHTML = "Total production in December is  "   + dec +   " litres which is  "   + decPrice +   "  shillings";

  var anaul=(daily * 366);
  var anualPrice=(Dprice*366);
  document.getElementById("anual").innerHTML = "Total production in the year is  "   + anaul +   " litres which is  "   + anualPrice +   "  shillings";
}
function price(){
    var a = parseInt(document.getElementById("sa").value);
    var b = parseInt(document.getElementById("sb").value);
    var c = parseInt(document.getElementById("sc").value);
    var d = parseInt(document.getElementById("sd").value);

    var daily = ((a) + (b) + (c) + (d));
    var nprice =(daily*49);
    var an=(nprice*366);
    var old=((daily*45)*366);
    var changes=(an-old);
    document.getElementById("change").innerHTML = "The total price when the buying price is increased is "  + an +   "  shillings";
    document.getElementById("changes").innerHTML = "The total change in price is "  + changes +   "  shillings";
}