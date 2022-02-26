let valueEl = document.getElementById('value-el');

let lengthEl = document.getElementById('length-el');
let volumeEl = document.getElementById('volume-el');
let massEl = document.getElementById('mass-id');


function length() {
    let metersCalc = valueEl.value * 3.2808399;
    let feetCalc = valueEl.value * 0.3048;
    lengthEl.innerHTML = valueEl.value + " meters = " + metersCalc + " feet | " + valueEl.value + " feet = " + feetCalc;
}


function volume() {
    let litersCalc = valueEl.value * 0.264172052;
    let gallonsCalc = valueEl.value * 3.78541178;
    volumeEl.innerHTML = valueEl.value + " liters = " + litersCalc + " gallons | " + valueEl.value + " gallons = " + gallonsCalc + " liters";
}

function mass() {
    let poundsCalc = valueEl.value * 2.20462262;
    let kilosCalc = valueEl.value * 0.45359237;
    massEl.innerHTML = valueEl.value + " kilos = " + poundsCalc + " pounds | " + valueEl.value + " pounds = " + kilosCalc + " kilos";
}