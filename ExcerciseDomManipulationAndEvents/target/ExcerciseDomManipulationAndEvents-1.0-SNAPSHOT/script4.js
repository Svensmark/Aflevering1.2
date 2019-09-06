/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

document.getElementById("x1").innerHTML = toHtml(cars);

var btn = document.getElementById("btn");
btn.onclick = filterCars;



function toHtml(cars) {
    var html;
    html = "<table class=\"table\">" +
            "<thead>" +
            "<tr>" +
            "<th scope=\"col\">id</th>" +
            "<th scope=\"col\">Year</th>" +
            "<th scope=\"col\">Make</th>" +
            "<th scope=\"col\">Model</th>" +
            "<th scope=\"col\">Price</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>";
    var htmlMap = cars.map((car) =>
        "<tr>" +
                "<td>" + car.id + "</td>" +
                "<td>" + car.year + "</td>" +
                "<td>" + car.make + "</td>" +
                "<td>" + car.model + "</td>" +
                "<td>" + car.price + "</td>"
    );
    html += htmlMap.join("");
    html += "</tbody>" + "</table>";

    return html;
}

function filterCars() {
    var result = cars.filter(car => car.price > document.getElementById("input"));
    document.getElementById("x1").innerHTML = toHtml(result);
}




