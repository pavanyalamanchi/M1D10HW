 /*      21)Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
                                                               22) Create an object with properties such name, surname, email
                                                               23) Delete Email from the previously created object
                                                               24) Create an array with 10 strings in it
                                                               25) Print in the console every string in the previous array
                                                               26) Create an array with 100 random numbers in it
                                                               27) Wrote a function to get the MAX and the MIN from the previously created array
                                                               28) Create an array of arrays, in which every array has 10 random numbers
                                                               29) Create a function that gets 2 arrays and returns the longest one
                                                               30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values*/

 console.log('===========Ex1=========')
 let x = 'John'
 let y = 'Doe'
 console.log(`${x} <> ${y}`)

 console.log('===========Ex2=========')
 let object = {
     name: 'pavan',
     surname: 'yalamanchi',
     email: 'hhh@g.com'
 }

 console.log('===========Ex3=========')
 delete object.email
 console.log(object)

 console.log('===========Ex4=========')
 let strArray = ['string1', 'string2', 'string3', 'string4', 'string5', 'string6', 'string7', 'string8', 'string9', 'string10']

 console.log('===========Ex5=========')
 console.log(strArray)

 console.log('===========Ex6=========')
 let randArray = []
 let i = 0
 while (i <= 100) {
     randArray.push(Math.floor(Math.random() * 77))
     i++
 }
 console.log(randArray)

 console.log('===========Ex7=========')

 console.log(Math.max(...randArray))
 console.log(Math.min(...randArray))

 console.log('===========Ex8=========')

 let arr = [];
 for (let i = 0; i < 4; i++) {
     let current = [];
     for (let j = 0; j < 10; j++)
         current.push(Math.floor(Math.random() * 10));
     arr.push(current);
 }
 console.log(arr)

 console.log('===========Ex9=========')

 let arr1 = [1, 4, 5, 6, 8, 9]
 let arr2 = [5, 4, 7, 8, 2, 3]

 function longestArray(arr1, arr2) {
     if (arr1.length > arr2.length) {
         console.log('arr1 is longest')
     } else if (arr1.length === arr2.length) {
         console.log('arrays are equal')
     } else {
         console.log("arr2 is longest")
     }
 }
 longestArray(arr1, arr2)
 console.log('===========Ex10=========')

 function sum(arr) {
     let sum = 0;
     for (let i = 0; i < arr.length; i++) {
         sum += arr[i]
     }
 }

 function sumArray(arr1, arr2) {
     if (sum(arr1) > sum(arr2)) {
         console.log(`sum of arr1 is higher`)
     } else {
         console.log(`sum of arr2 is higher`)
     }
 }
 sumArray([1, 3, 5, 7], [2, 4, 6, 8])


 // DOM exercise
 /*DOM 

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

 let containerElement = document.getElementById('container')
 console.log(containerElement)
     //------------------------------------------------------------------------------------------//
 let tableData = document.getElementsByTagName('td')

 for (let i = 0; i < tableData.length; i++) {
     console.log(tableData[i].innerText)
 }
 //------------------------------------------------------------------------------------------//

 document.getElementsByTagName('h1')[0].innerText = 'new html page';

 //------------------------------------------------------------------------------------------//

 function extraRow() {
     document.getElementsByTagName('table')[0].insertRow(0)
 }
 //------------------------------------------------------------------------------------------//

 function addClass(anyText) {
     let tableRow = document.getElementsByTagName('tr')
     for (let i = 0; i < tableRow.length; i++) {
         tableRow[i].classList.add(anyText)
     }
 }
 //------------------------------------------------------------------------------------------//

 function redBackground() {
     let link = document.getElementsByTagName('a')
     for (let i = 0; i < link.length; i++) {
         link[i].style.backgroundColor = 'red'
     }
 }
 //------------------------------------------------------------------------------------------//

 window.onload = function() {
         console.log("page loaded")
     }
     //------------------------------------------------------------------------------------------//

 function newItem() {
     let ul = document.getElementById("list");
     let li = document.createElement("li");
     li.appendChild(document.createTextNode("Four"));
     ul.appendChild(li);
 }
 //------------------------------------------------------------------------------------------//

 function emptyList() {
     document.getElementsByTagName('li')[1].innerText = ''
 }
 //------------------------------------------------------------------------------------------//
