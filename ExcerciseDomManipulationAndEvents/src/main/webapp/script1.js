/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var divs = document.getElementsByTagName("div");

var i;
for (i = 0; i < divs.length; ++i) {
    divs[i].style.backgroundColor = "yellow";
}



function click() {
    document.getElementById("div1").style.backgroundColor = "blue";
    document.getElementById("div2").style.backgroundColor = "green";
    document.getElementById("div3").style.backgroundColor = "red";
}
var btn = document.getElementById("btn");
btn.onclick = click;
            
           
           
           
