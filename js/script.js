// function that reveals players list
function revealMessage(e) {
    console.log(e)
    e.preventDefault()
    document.getElementById("bottomHalf").style.display = "block";
    var node = document.createElement("Li");
    var text = document.getElementById("formText").value;
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("players").appendChild(node);
}


// function that adds a player to the list --- START
// https://stackoverflow.com/questions/19908215/adding-user-input-to-a-list-of-text-items-on-a-html-page
// Moved to another filr (newPlayer.js)
//document.getElementById("submitButton").onclick = function () {

//    var node = document.createElement("Li");
//    var text = document.getElementById("formText").value;
//   var textnode = document.createTextNode(text);
//    node.appendChild(textnode);
//    document.getElementById("players").appendChild(node);
//}
// function that adds a player to the list --- END
