var products = [
  {
    id: 1,
    name: "School Bag",
    price: 1200,
    quantity: 4
  },
  {
    id: 2,
    name: "Eye Drops",
    price: 150,
    quantity: 20
  },
  {
    id: 3,
    name: "Water Bottle",
    price: 300,
    quantity: 15
  },
  {
    id: 4,
    name: "Notebook",
    price: 80,
    quantity: 50
  },
  {
    id: 5,
    name: "Laptop Bag",
    price: 1500,
    quantity: 3
  }
];

var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");

thead.innerHTML = `
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total Price</th>
        <th>Stock Availability</th>
    </tr>`;

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
        return "Low Stock";
    } else {
        return "Stock Availabile";
    }
}

table.appendChild(tbody);

document.body.appendChild(table);