let celsius = document.getElementById('celsius');
let farenhiet  = document.getElementById('farenhiet');
let kelvin = document.getElementById('kelvin');
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
    if (val == '') {
        noValue.innerHTML = "*please provide a value *";
    }
    val = Number(val);
    if (celsius.checked) {
        ans.toCelsius(val).toLocalestiring(undefined, { style: 'unit', unit: 'celsius',minimumFractonDigit:2,maximumFractonDigit });
    }
    else if (farenhiet.Checked) {
        ans.Farenhiet(val).toLocalestiring(undefined, { style: 'unit', unit: 'farenhiet',minimumFractonDigit:2,maximumFractonDigit });
        
    }
    else {
        noUnit.innerHTML = "*please select a unit for conversion";
    }
}
