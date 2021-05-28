/*--DOM 

        31) Get element with ID "container" from the page
        32) Get every "td" from the page
        33) Create a cycle that prints the text inside every td of the page
        34) Write a function to change the heading of the page
        35) Write a function to add an extra row to the table
        36) Write a function to add the class "test" to each row in the table
        37) Write a function to add a red background to every link in the page
        38) Console log "Page loaded" when the page is correctly loaded
        39) Write a function to add new items to a UL
        40) Write a function to empty a list-*/


let container = document.getElementById('container')


let tableData = document.getElementsByTagName('td')


function cycle() {
    for (let i = 0; i < tableData.length; i++) {
        tableData[i].innerHTML = 'text'
    }
}

function heading() {
    document.getElementsByTagName('h1')[0].innerHTML = 'new heeading'
}

function extraRow() {
    let table = document.getElementsByTagName('table')[0].insertRow(0)
}

function addClass() {

}

function redBackground() {
    let link = document.getElementsByTagName('a')
    for (let i = 0; i < link.length; i++) {
        link[i].style.backgroundColor = 'red'
    }
}

window.onload = function() {
    console.log("page loaded")
}

function newItem() {
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Four"));
    ul.appendChild(li);
}

function emptyList() {

}