let product = ['Sony Xperia', 'Samsung Galaxy', 'Nokia 6', 'Xiaomi Redmi Note 4', 'Apple Iphone 6S', 'Xiaomi Mi 5s Plus', 'Apple Iphone 8 Plus', 'Fuijisu F-04E', 'Oppo A71'];

function display() {
    let str = "";
    for (let i = 0; i < product.length; i++) {
        str += "<tr>" +
            "<td>" + product[i] + "</td>" +
            "<td><button onclick='edit("+i+")'>Edit</button></td>" +
            "<td><button onclick='remove("+i+")'>Delete</button></td>"
            "</tr>";
    }
    return str;
}
document.getElementById("product").innerHTML = display();
function add() {
    let newproduct=document.getElementById("newproduct").value;
    product.push(newproduct);
    document.getElementById("product").innerHTML = display();
    document.getElementById("newproduct").value="";
}
function edit(i) {
    let newproduct=prompt("Enter new product");
    product[i]=newproduct;
    document.getElementById("product").innerHTML = display();
}
function remove(i) {
    let delproduct=product[i];
    product.splice(i,1)
    document.getElementById("product").innerHTML = display();
}