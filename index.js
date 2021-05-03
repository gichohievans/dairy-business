var k = "The respective values are :";
var x = 0;
var a=[];

        function milkInput() {
            var input = document.getElementsById('sa');
  
            for (var i = 0; i < input.length; i++) 
            {
                var a = input[i];
                k = k + "array[" + i + "].value= "+ a.value + " ";
            }

            document.getElementById("result").innerHTML = k;
            document.getElementById("output").innerHTML = "Output";
        }


        function data() { 
            var input = document.getElementsByName('array[]');
            for (var i = 0; i < input.length; i++) 
            { 
                var a = input[i]; 
                k = k +  a.value + " " +"<br>"; 
            } 
            
            document.getElementById("result").innerHTML = k;
            document.getElementById("output").innerHTML = "Output";
        } 

var sum= 0;
var summation="The total is ";
document.getElementById("sum").innerHTML = numbers.reduce(total);
function total(total, num){
    var input = document.getElementsByName('array[]');
    return total+num;
    for(var i = 0; i < input.length; i++)
    {
        var a = input[i];
        sum += a;
    }
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("output").innerHTML = "Output";
}


