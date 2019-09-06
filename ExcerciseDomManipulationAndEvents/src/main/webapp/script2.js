/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


document.getElementById("outer").addEventListener("click",listener);           

function listenerThis() {
    document.getElementById("paragraph").innerText = "Hello from " + this.id; 
}

function listener(e) {
    document.getElementById("paragraph").innerText = "Hello from " + e.target.id; 
}

