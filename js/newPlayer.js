document.getElementById("submitButton").onclick = function newPlayer() {

    var node = document.createElement("Li");
    var text = document.getElementById("formText").value;
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("players").appendChild(node);
 }
