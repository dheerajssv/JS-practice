function constru(ele) {
    var obj = ele;
    var itemdiv = document.getElementById("middle");
    var x = document.createElement("div");
    x.setAttribute("id", "category");
    var text = document.createTextNode(obj.category);
    x.appendChild(text);

    var items = document.createElement("div");
    items.setAttribute("id", "items");
    var p = document.createElement("p");
    var itemtext = document.createTextNode(obj.itemname + "  Price: $" + obj.price );
    var br=document.createElement("br")
    var itemdes = document.createTextNode(
        " Description: " + obj.description);

    p.appendChild(itemtext);
    p.appendChild(br);
    p.appendChild(itemdes);
    items.appendChild(p);

    x.appendChild(p);
    itemdiv.appendChild(x);
}