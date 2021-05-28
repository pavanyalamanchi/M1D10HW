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

 console.log('===========Ex4=========')
 let strArray = ['string1', 'string2', 'string3', 'string4', 'string5', 'string6', 'string7', 'string8', 'string9', 'string10']

 console.log('===========Ex5=========')
 console.log(strArray)

 console.log('===========Ex6=========')
 let randArray = []
 while (i <= 100) {
     randArray.push(Math.floor(Math.random()))
     i++
 }

 console.log('===========Ex7=========')

 console.log(Math.max(randArray))
 console.log(Math.min(randArray))

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

 function longestArray(arr1, arr2) {
     if (arr1.length > arr2.length) {
         console.log('arr1 is lomgest')
     } else {
         console.log('arr2 is lomgest')
     }
 }

 console.log('===========Ex10=========')

 function sum(arr) {
     let sum = 0;
     for (let i = 0; i < arr.length; i++) {
         sum += arr[i]
     }
 }

 function sumArray(arr1, arr2) {
     if (sum(arr1) > sum(arr2)) {
         console.log(arr1)
     } else {
         console.log(arr2)
     }
 }