let celsius = document.getElementById('Celsius');
let farenhiet  = document.getElementById('farenhiet');
let result = document.getElementById('result');
let noValue = document.getElementById('noValue');
let noUnit = document.getElementById('noUnit');
let button = document.getElementById('convert');

function toCelsius(temp) {
    return (temp - 32) * (5 / 9);
}
function toFarenhiet(temp) {
    return (temp * 9 / 5 + 32);
}
function toKelvin(temp) {
    return (temp + 273.15);
}
button.onclick = function () {
    let val = document.getElementById('value').value;
    let ans;
     noValue.innerHTML = "";
     noUnit.innerHTML = "";
   
    if (val == '') {
        noValue.innerHTML = "*please provide a value *";
    }
    val = Number(val);
    if (celsius.checked) {
        ans=toCelsius(val).toLocaleString(undefined, { style: 'unit', unit: 'celsius',minimumFractionDigits:2,maximumFractonDigit:2 });
    }
    else if (farenhiet.checked) {
        ans=toFarenhiet(val).toLocaleString(undefined, { style: 'unit', unit: 'fahrenheit',minimumFractionDigits:2,maximumFractonDigit:2 });
        
    }
    else {
        noUnit.innerHTML = "*please select a unit for conversion*";
    }
    result.innerHTML = ans;
}
