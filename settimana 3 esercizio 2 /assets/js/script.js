//1

var nome = `Aldo`
let cliente = `cliente`
const numero = 3.14

document.getElementById(`concatena`).innerHTML = `${nome} , ${cliente} , ${numero} `;
//document.getElementById(`concatena`).innerHTML = nome + `, `+ cliente + `, `+ numero ;


//2


var concatena2 = `${nome} , ${cliente} , ${numero} `

document.getElementById(`concatena2`).innerHTML = concatena2;


//3

var persona = 'Mario'
document.getElementById('var').innerHTML = persona;
{
    let persona = 'Carla'
    document.getElementById('let').innerHTML = persona;
}
document.getElementById('final').innerHTML = persona;

//3.2

var persona = 'Mario'
document.getElementById('let2').innerHTML = persona; 

{
let persona2 = 'Carla'
document.getElementById('let3').innerHTML = persona2;

document.getElementById('final2').innerHTML = persona2;
}

//4.1

var valore = 15;

document.getElementById('iniziale').innerHTML += valore ;

document.getElementById('valore1').innerHTML += `${valore + 15}, ${(++valore) + 15}`;

document.getElementById('valore2').innerHTML += `${valore - 11}, ${(--valore) - 11}`;

document.getElementById('valore3').innerHTML += `${valore * 3}` ;

document.getElementById('valore4').innerHTML += `${valore / 3}` ;

document.getElementById('valore5').innerHTML += `${valore} è un numero`
