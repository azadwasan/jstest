var val1 = document.getElementById('num1');
var val2 = document.getElementById('num2');
var result  = document.getElementById('result');

var form = document.getElementById('percForm');

form.addEventListener('submit', 
    function(event){
        if(!val1.value || !val2.value){
            log.
            alert("Please enter some number in text fields. ");
        }
        else{
            numVal1 = parseFloat(val1.value);
            numVal2 = parseFloat(val2.value);
            var percentage = numVal1 / numVal2 *100;
            result.innerText = percentage;
            event.preventDefault();
        }
    }
);