
document.getElementById("button").addEventListener("click", function() {
   
    let inputText = document.getElementsByTagName("input").value
   document.getElementById("list").innerHTML += "<li>" + inputText + "</li>"

})

/*function newItem() {
    var item = document.getElementsByTagName('input').value
    var ul = document.getElementById('list')
    var li = document.createElement('li')
    ul.appendChild(li)
    document.getElementsByTagName('input').value = 
}*/

