let valueEl = document.getElementById('value-el');

let lengthEl = document.getElementById('length-el');
let volumeEl = document.getElementById('volume-el');
let massEl = document.getElementById('mass-id');


function length() {
    lengthEl.textContent = 
    `
    ${valueEl.value} meters = ${valueEl.value * 3.2808399} feet | ${valueEl.value} feet = ${valueEl.value * 0.3048} meters
    `;
}


function volume() {
    volumeEl.textContent = 
    `
    ${valueEl.value} liters = ${valueEl.value * 0.264172052} gallons | ${valueEl.value} gallons = ${valueEl.value * 3.78541178} liters
    `;
}

function mass() {
    massEl.textContent = 
    `
    ${valueEl.value} kilos = ${valueEl.value * 2.20462262} pounds | ${valueEl.value} pounds = ${valueEl.value * 0.45359237} kilos
    `;
}