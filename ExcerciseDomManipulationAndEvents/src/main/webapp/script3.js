/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var array = ["henning", "bandit", "Bro"];
var arrayMap = array.map((x) => '<li>' + x + '</li><br/>');
document.getElementById("paragraph").innerHTML = arrayMap.join("");
    
function click() {
    array.push(document.getElementById("input").value);
    var arrayMap = array.map((x) => '<li>' + x + '</li><br/>');
    document.getElementById("paragraph").innerHTML = arrayMap.join("");
}
var btn = document.getElementById("btn");
btn.onclick = click;   

function clickRF() {
    array.shift();
    var arrayMap = array.map((x) => '<li>' + x + '</li><br/>');
    document.getElementById("paragraph").innerHTML = arrayMap.join("");
}
var btn = document.getElementById("btn1");
btn.onclick = clickRF;     

function clickRL() {
    array.pop();
    var arrayMap = array.map((x) => '<li>' + x + '</li><br/>');
    document.getElementById("paragraph").innerHTML = arrayMap.join("");
}
var btn = document.getElementById("btn2");
btn.onclick = clickRL;     