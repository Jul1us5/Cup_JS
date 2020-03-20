"use strict";





let tower = document.querySelector('.tower');

let a = '<img src="./img/cup.png">';



let cup = 4;
let suma = '';
let kiek = '';

for (let i = 0; i < cup; i++) {
    kiek += a;
    // suma += kiek + '</br>'; 
    suma += `<div class="level">${kiek}</div>`;
}




tower.innerHTML = suma;