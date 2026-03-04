var products = [
    {
        id: 1,
        name: "bags",
        price: 1000,
        quantity: 3
    },
    {
        id: 2,
        name: "eye drops",
        price: 500,
        quantity: 10
    },
    {
        id: 3,
        name: "carry bags",
        price: 1000,
        quantity: 3
    },
    {
        id: 4,
        name: "college bags",
        price: 1000,
        quantity: 5
    },
    {
        id: 5,
        name: "supermarket bags",
        price: 1000,
        quantity: 7
    }
]

var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");

thead.innerHTML = "<tr><th>id</th><th>name</th><th>price</th><th>quantity</th><th>total price</th><th>stock availability</th></tr>";

table.appendChild(thead);

for (let i = 0; i < products.length; i++) {
    var tr = document.createElement("tr");
    tr.innerHTML = "<td>" + 
        products[i].id + "</td><td>" + 
        products[i].name + "</td><td>" + 
        products[i].price + "</td><td>" + 
        products[i].quantity + "</td><td>" + 
        (products[i].price*products[i].quantity) + "</td><td>" +
        checkAvailability(products[i].quantity) + "</td>";

    tbody.appendChild(tr);
}

function checkAvailability(quantity) {
    if (quantity < 5) {
        return "low stock";
    } else {
        return "stock Availabile";
    }
}

table.appendChild(tbody);

document.body.appendChild(table);