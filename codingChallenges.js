console.log('Coding Challange')
//  Que 1. Print no 1 to 100
// for(let i=0; i<=10;i++){
//     console.log(i)
// }

//  Que 2. print odd number upto 100;


// for(let i=0; i<=100; i++){
//     if(i %2 !==0){
//         console.log(i)
//     }
// }

//  Que 3. muiltiplication of 7 
// for(let i=0; i<=10 ; i++){
//     let multiple = 7 * i
//     console.log(multiple)
// }

// Que 4 table from 1 to 10


// for(var i =1 ; i<=10; i++){
// printTable(i)
// console.log("");

// }

// function printTable(n)
// {
//     for(var i=1 ; i<=10; i++){
//         var row = n + " * " + i + " = " + n * i;
//         console.log(row)
//     }
// }

// Que 5. calculate the sum of 1 to 10 

// var sum =0;
//  for(let i=1 ; i<=10; i++){
//     sum  = sum + i
//  }
//  console.log(sum)

//  Que 6. Calculate 10!

// function factorial (){
//     var multiple =1;
//     for(let i =1; i<= 10; i++){
//         multiple = i * multiple
//     }
//   console.log(multiple)

// }
// factorial()


// Que 7. calculate the sum of odd number greater than 10 less then 30


// const additonBetween = ()=>{
// let sum =0 ;
//  for(let i=11; i<=30; i++){
//     if(i % 2 == 0){
//         sum = sum+ i
//     }
//  }
//  console.log(sum)
// }
// additonBetween()

//  Que 8. Create a function that convert from Celsius to Fahrenheit

// const celsiusToFahrenheit=(n)=>{
//    let convert = n * 1.8 + 32
//    console.log(convert)

// }
// celsiusToFahrenheit(37.50)


// Que 9. create function that convert from Farhanheit to celsius

// const FarhanheitToCelcius =(n)=>{
// let convert = (n-32) / 1.8;
// console.log(convert)
// }
// FarhanheitToCelcius(100)

//  10. Calculate the sum  of number in an array of numbers


// let arr = [12,43,56,78,-2]
// const sumArray =(arr)=>{
//     var sum =0;
//     for(let i=0; i<arr.length;i++){
//         sum = sum + arr[i]

//     }
//     console.log(sum)
// }
// sumArray(arr)

//  Que.11 calculate the average of the  number in array of number.

//  let arr = [12,43,56,78,-2]
// const averageArray=(arr)=>{
//     let length = arr.length;
//     let sum = 0;
//     for(let i=0; i<length; i++){
//         sum = sum + arr[i]
//     }
//     console.log(sum / length)
// }
// averageArray(arr)

//  Que.12 Create function that recives an array of numbers and returns an array containing only positive numbers.

//    let arr = [12,43,56,78,-2,-5]
// const getPositiveVal=(arr)=>{
//     let arr2 = [];
//     for(let i=0; i<arr.length; i++){
//         var value = arr[i]
//         if(value >= 0){
//             arr2.push(value)
//         }
//     }
//     console.log(arr2)
// }
// getPositiveVal(arr)

// Filter methods
//  const getPositiveValue =(arr)=>{
//     return arr.filter(el=> el >=0);
//  }
//   console.log( getPositiveValue(arr))


// Que.13  Find Max value in Array ;
// let arr = [1,2,3,4,5,6,90,12,32,43];
// const maxValue =(arr)=>{
//     let max = arr[0];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]> max){
//             max = arr[i]
//         }
//     }
//     console.log(max)
// }

// maxValue(arr)


//  Que.14 fibonacci series 
// const fibonacciSeries=()=>{
//     let n1 = 0;
//     console.log(n1)
//     let n2 = 1;
//     console.log(n2)
//     for(let i=2; i<10; i++){
//         let sum = n1 + n2
//         console.log(sum)
//         n1 =n2;
//         n2 = sum
//     }
// }
// fibonacciSeries()

// Que.15 Create 9th fibonacci number using recursion.

// const findFibonacci=(n)=>{
//     if(n==0)
//     return 0;
//     if(n==1)
//     return 1;
//     return findFibonacci(n-1) + findFibonacci(n-2)
// }
// console.log(findFibonacci(9))

// Que.16 Create function that will return a boolean spacify if a number is prime

// const isPrime=(n)=>{
//     if(n<2)
//     return false;
//     if(n==2)
//     return false;
//     let maxDiv = Math.sqrt(n);
//     for(let i=2; i<=maxDiv; i++){
//         if(n%i == 0){
//             return false
//         }
//     }
// return true
// }
// console.log(isPrime(11))


//  Que. 17 Calculate the sum of digits of a positive integer nnumber
    // const sumDigits=(n)=>{
    //     let convert = n.toString();
    //     var sum =0;

    //     for(let char of convert){
    //         var digit = parseInt(char);
    //         sum = sum + digit;

    //     }
    //     return sum;
    // }
    // console.log(sumDigits(12341))


    // que.18 Print 100 prime number

    // const PrimeNumber =(n)=>{
    //     let i,j;

    //     for(let i =2; i<=n ; i++){
    //         var c = true;
    //         for(let j = 2; j<i; j++ ){
    //             if(i%j ==0){
    //                 c = false;
    //                 break
    //             }
    //         }
    //         if(c)
    //         {
    //             console.log(i)
    //         }
    //     }
    // }
    // PrimeNumber(100)


    // Que 19.  Create a function that will return in rray the first nPrime numbers greater than a particular number  
// const primeNumber=(start,end)=>{
// let arr =[];
// for(let i=start; i<=end ; i++){
//     var c = true;
//     for(let j = 2; j<i; j++){
//         if(i%j== 0){
//             c = false
//         }
//     }
//     if(c){
//         arr.push(i)
//     }
// }
// console.log(arr)
// }
// primeNumber(10,100)


// Que. 20  Rotate Array to left 1 position 

// var arr= [1,2,3];
// const rotateArray=(arr)=>{
//     let first = arr.shift()
//     arr.push(first)
//     console.log(arr)

// }
// rotateArray(arr)

// Que. 21. Rotate  array to right 1 position
//  Rotate an Array to the right 1 position
// let arr =[1,2,3]
// const rotateArray =(arr)=>{
// let end = arr.pop();
// arr.unshift(end)
// console.log(arr)
// }
// rotateArray(arr)

//  Que. 22 Reverse Array.

// let arr = [1,2,3,4,5]
// const reverseArray=(arr)=>{
//     let arr2 = [];
//     for(let i=arr.length; i>=0;i--){
//         arr2.push(i)
//     }
//     console.log(arr2)
// }
// reverseArray(arr)

// Que 23 . Reverse string;

// let str = 'Hello';
// const reverseString=(str)=>{
//     let str2 = "";
//     for(let i=str.length-1; i >=0; i--){
//         let char = str[i];
//         str2 = str2 + char
//     }
//     console.log(str2);
// }
// reverseString(str)

// Que 24.  Create function that will merge two arrays and return the result as a new array.

//  let arr = [1,2,12,34,56,78];
//  let arr2 = [1,2,10,20,30];

//  const mergeAraay=(arr,arr2)=>{
//     let array = [];
//     for(let el of arr){
//         array.push(el)
//     }
//     for(let el of arr2){
//         array.push(el)
//     }
//     console.log(array)
//  }

//  mergeAraay(arr,arr2)
 

// const mergeAraay =(arr,arr2)=>{
//     let array = [...arr, ...arr2]
//     console.log(array)
// }
// mergeAraay(arr,arr2)

// Que 25. create function that will recive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second araay both.

//   var arr = [1,2,12,34,56,78];
//    var arr2 = [1,2,10,20,30];

//   let  array = arr.concat(arr2);
//    console.log(array)

//  let filterArray = array.filter((el,i)=> array.indexOf(el)=== i);
// console.log(filterArray)

//   const  mergeExclusive=(arr,arr2)=>{
//     let array  =[];
//     for(let el of arr){
//         if(!arr2.includes(el)){
//             array.push(el)
//         }
//     }
//     for(let el of arr2){
//         if(!arr.includes(el)){
//             array.push(el)
//         }
//     }
//     console.log(array)
//   }
//   mergeExclusive(arr,arr2)


//  Que. 28 calculate the sum of first 100 prime numbers.

// const sumOfPrime=(start,end)=>{
// let arr =[]
//     if(  start == 0 || start<2 ){return false}

// for(let i =start; i<=end; i++){
//     var c = true;
//     for(let j=2; j<i; j++){
//         if(i%j==0){
//             c = false
//         }
//     }
//     if(c){
//         arr.push(i)
//     }
// }
// console.log(arr)
// let sum =arr[0];
// for(let i=0; i<arr.length; i++){
//     sum = sum + arr[i]
// }
// console.log(sum)
// }
// sumOfPrime(3,100)


// Que.29 Distance bet first 100 prime number

// function isPrime(n){
//     if(n<2 || n==0){
//         return `Its not prime number`
//     }
//     let len = n.length;
//     for(let i=0; i<len; i++){
//         if(n%i === 0){
//             return `Not prime`
//         }
//     }
//     return true
// }
// function DistancePrime(n){
//     var lastPrime = 2;
//     var i = lastPrime + 1;
//     var foundPrime = 1;

//     while(foundPrime < n){
// if(isPrime(i))
// {
//     console.log(i-lastPrime,'\t' ,i, '-', lastPrime)
//     foundPrime++;
//     lastPrime =i
// }
// i++
//     }
// }
// DistancePrime(50)


// Que 30 Cerate a function that will provide a string and we haveto addition and return in string.

// let str1 = '123';
// let str2 = '345'
// const stringSum =(str1,str2)=>{
//     let s1 = parseInt(str1);
//      let s2 =parseInt(str2);
//      let sum = s1+s2;
//         let val = sum.toString();
//        console.log(val)
//        let p = val+ 12;
//        console.log(p)
// }
// stringSum(str1,str2)


// Que  31.  Count the character  

// let str = 'Hello World';
// const countLength =(str)=>{
//     let count =0;
//     for(let i=0; i<str.length; i++){
//         count++
//     }
//     console.log(count++)
// }

// countLength(str)



//  Que.32 Create a function that will capitalization the first letter of each word in text;
// let str = 'hello ram sir';
// const capitalword =(str)=>{
//     let space = str.split(" ");
//     for(let i = 0; i<space.length; i++){
//         space[i] = space[i].charAt(0).toUpperCase() + space[i].slice(1)
//     }
//     const str2 = space.join(" ");
//     console.log(str2)
// }
// capitalword(str)

// Que 33.Calculate the sum of numbers recived in a comma delimited string

// let str = '1,2,3,4,5.5,12,34,67.23';

// const sumStr =(str)=>{
//      let arr = str.split(',');
//     let sum = 0
//     for(let n of arr){
//         sum = sum + parseFloat(n);
//     }
//    console.log(sum)
// }
// sumStr(str)

// Que 34 create a function an array with words inside a text.

// let str = 'ead bfr (dsf)';

// const convertArray =(str)=>{
//  return Array.from(str).join('');
// }
// console.log(convertArray(str))

// Que.35  Create a function to convert text to a bi dimensional array



//  Que. 37 create a function that will convert a string in array containning the ASCII codes of each char.
// let str = ' I like NodeJs'
// const getCharCode =(str)=>{
//  let arr = [];
//  for(let i=0; i<str.length; i++){
//     let code = str.charCodeAt(i);
//     arr.push(code)
//  }
//   console.log (arr)
// }
// getCharCode(str)

//  Que 38.  Create a function that will convert an array containing ACII codes in a string.

//  let arr = [1,2,34,56,76,89,100,1];
//  const codeToString = (arr)=>{
//  return String.fromCharCode(...arr)
//  }
//  console.log(codeToString(arr))

//  Que 40. Bubble Sorting
// let arr = [12,3,4,21,56,78,65,90,5,1,2,100];
// const bubbleSort=(arr)=>{
//     for(let i =0 ; i<arr.length; i++){
//         for(let j=0; j<arr.length-i; j++){
//             if(arr[j]>arr[j+1]){ 
//                 let a = arr[j];
//                 let b =arr[j+1];
//                 arr[j] = b;
//                 arr[j+1] = a;
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort(arr))

//  42.  Create a function that calculate the distance between two points definds by their x,y coordinates.

// 
//  const getDistance=(x1,y1,x2,y2)=>{
//     var  l1 = x2-x1;
//     var  l2 =  y2-y1;

//     console.log(Math.sqrt(l1 * l1 + l2 *l2))

//  }
//  getDistance(12,34,56,78)
