let valueEl = document.getElementById('value-el');

let lengthEl = document.getElementById('length-el');
let volumeEl = document.getElementById('volume-el');
let massEl = document.getElementById('mass-id');


function length() {
    let metersCalc = valueEl.value * 3.2808399;
    let metersCalcN = metersCalc.toFixed(3);

    let feetCalc = valueEl.value * 0.3048;
    let feetCalcN = feetCalc.toFixed(3);

    lengthEl.innerHTML = valueEl.value + " meters = " + metersCalcN + " feet | " + valueEl.value + " feet = " + feetCalcN + " meters";
}


function volume() {
    let litersCalc = valueEl.value * 0.264172052;
    let litersCalcN = litersCalc.toFixed(3);

    let gallonsCalc = valueEl.value * 3.78541178;
    let gallonsCalcN = gallonsCalc.toFixed(3);

    volumeEl.innerHTML = valueEl.value + " liters = " + litersCalcN + " gallons | " + valueEl.value + " gallons = " + gallonsCalcN + " liters";
}

function mass() {
    let poundsCalc = valueEl.value * 2.20462262;
    let poundsCalcN = poundsCalc.toFixed(3);

    let kilosCalc = valueEl.value * 0.45359237;
    let kilosCalcN = kilosCalc.toFixed(3);

    massEl.innerHTML = valueEl.value + " kilos = " + poundsCalcN + " pounds | " + valueEl.value + " pounds = " + kilosCalcN + " kilos";
}