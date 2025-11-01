// 1. Greeting Function
// Write a function greet(name) that takes a name and prints: 
// Hello, <name>! Welcome to JavaScript.
// ans:self code

// let name=prompt("Enter your Name :")
// function greet(name){
//     console.log(`hello,${name}! welcome to javascript`)
// }
// greet(name)

// 2. Sum of Two Numbers
// Write a function add(a, b) that returns the sum of two numbers.
// ans:self code

// let a=Number(prompt("Enter Your A value : "))
// let b=Number(prompt("Enter Your B value : "))
// function sum (a,b){
//     return a+b;
// }
// console.log(sum(a,b))

// 3. Default Parameters
// Create a function multiply(a, b = 2) that multiplies two numbers.
//  If b is not passed, it should use the default value 2.
// ans:self code

// function multiply(a, b = 2){
//     return a*b;
// }
// console.log(multiply(5))
// console.log(multiply(6,5))

// 4. Find Maximum of Three Numbers
// Write a function findMax(a, b, c) that returns the largest of three numbers.
// ans:self code

// let a=parseInt(prompt("Enter first number :"))
// let b=parseInt(prompt("Enter second number :"))
// let c=parseInt(prompt("Enter third number :"))

// function findMax(a, b, c){
//     if (a>b && a>c){
//         return  (`${a} is largest number`)
//     }
//      else if (b>a && b>c){
//         return  (`${b} is largest number`)
//      }
//     else {
//         return  (`${c} is largest number`)
//     }
// }
// console.log(findMax(a, b, c))


// 5. Count Words in a Sentence
// Write a function countWords(sentence) that returns how many words are in a sentence.
// ans:self code

// let sentence =prompt("Enter your sentence :")
// function senten(sentence){
//     word=sentence.split(" ")
//     return word.length
// }
// console.log(`${senten(sentence)} words are in a sentence`)

// 6. Check Even or Odd
// Write an arrow function isEven(num) that returns true if a number is even, otherwise false.
// ans:self code

// let n =parseInt(prompt("Enter your number :"))
// let num =n=>{
// if (n%2==0){
//     return (`True ${n} is even number`)
// }
// else {
//     return (`False ${n} is odd number`)
// }
// }
// console.log(num(n));


// 7. Calculate Factorial
// Write a function factorial(n) that returns the factorial of a number.
// ans:self code 

// let n =parseInt(prompt("Enter your factorial number :"))
// function num(n){
// let fact =1;
//     for (i=n;1<=i;i--){
//         fact*=i
//     }
//     return fact;
// }
// console.log(`Factorial of ${n} : ${(num(n))}`);

// 8. Count Vowels in a String
// Write a function countVowels(str) that counts how many vowels (a, e, i, o, u) are in a string.
// ans:self code

// let str =prompt("enter your string :")
// function string(str){
//     let vowels =0;
//     for (i=0;i<str.length;i++){
//         if (str[i]=="a"||str[i]=="A"||str[i]=="e"||str[i]=="E"||str[i]=="o"||str[i]=="O"||str[i]=="i"||str[i]=="I"||str[i]=="u"||str[i]=="U"){
//             vowels+=1
//         }
//     }
//  return vowels;
// }
// console.log(`Number of Vowels : ${(string(str))}`);


// 9. Create a function to check prime number
// Write a function isPrime(num) that returns true if the number is prime, otherwise false.
// ans:Discussed

// let num=Number(prompt("Enter your number :"))
// function prime(num){
//     if ( num==1||num==0){
//         return `false ${num} is not prime number `;
//     }
//     for (i=2;i<num;i++){
//         if (num==2||num==3||num==5||num==7){
//             return `true ${num} is prime number`;
//         }
//         else if(num%i==0){
//             return`false ${num} is not prime number`;
//         }
//     }
//     return `true ${num} is prime number`
// }

// console.log(prime(num))



// 10. Closure Counter
// Write a function createCounter() that returns another function.
//  Every time the inner function is called, it should return the next count (1, 2, 3...).
// ans:self code

//   function createcounter(){
//   let count =0
//      return function anothercounter(){
//      count++;
//      return count;
//  }
// }
// let counter= createcounter()
// console.log(counter())
// console.log(counter())



// 🎯 Mini Project 1 – Simple Calculator
// Ans:self code

// let a=parseInt(prompt("Enter your first value :"))
// let b=parseInt(prompt("Enter your second value :"))
// let c=prompt("Enter any one operator (+,-,*,%,/,**):")
// function cal (a,b,c)
// {
// switch (c){
// case  "+":
//     return a+b;
//     break;
// case  "-":
//     return a-b;
//     break;
// case  "*":
//     return a*b;
//     break;
// case  "%":
//     return a%b;
//     break;
// case  "/":
//     return a/b;
//     break;
// case  "**":
//     return a**b;
//     break;
// }  
// }
// console.log (`Result=${(cal(a,b,c))}`)



// 🎯 Mini Project 2 – Student Grade Evaluator
// ans:self code

// let a=parseInt(prompt("Enter your subject 1 mark :"))
// let b=parseInt(prompt("Enter your subject 2 mark :"))
// let c=parseInt(prompt("Enter your subject 3 mark :"))
// let d=parseInt(prompt("Enter your subject 4 mark :"))
// let e=parseInt(prompt("Enter your subject 5 mark :"))
// // 
// totmark=()=>
// {
//     return (a+b+c+d+e)/5;
// }
// // 
// function grade(mark){
// switch(true){
// case mark<=100 && mark>=90  :
//     return "Grade A";
//     break;
// case mark<90 && mark>=80  :
//     return "Grade B";
//     break;
// case mark<80 && mark>=70  :
//     return "Grade B";
//     break;
// case mark<70 && mark>=60  :
//     return "Grade C";
//     break;
// case mark<60 && mark>=0 :
//     return "FAIL";
//     break;
// default :
//     return "Invalid Mark";
//     break;
// }
// }
// let mark=totmark(a,b,c,d,e);
// console.log(`Average of total mark:${mark}`)
// console.log(grade(mark));


// 🎯 Mini Project 3 – Random Quote Generator
// ans: Refer from youtube


/*
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=q">
    <title>js quotes </title>
    <style>
        * {
            margin: 0%;
            padding: 0%;
        }

        .container {
            background-color: #3c6d92;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .main {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #ffffff;
            width: 50%;
            height: 45vh;
            border-radius: 20px;
        }

        .onclickbtn {
            margin-top: 3%;
            width: max-content;
            height: max-content;

        }

        button {
            padding: 15px;
            font-weight: bold;
            background-color: #3098DA;
            border: none;
            color: white;
            border-radius: 10px;
        }

        .quotespara {
            font-weight: bold;
            font-size: large;
        }

        .title {
            font-size: xx-large;
            margin-bottom: 30px;
            font-weight: bold;
            color: #ffffff;
        }
    </style>


</head>

<body>
    <div class="container">
        <div class="title">Quotes!!</div>

        <div class="main">

            <div class="quotespara">
                <p id="quote"></p>
            </div>

        </div>
        <div class="onclickbtn">
            <button id="onclick">Next Quote</button>
        </div>


    </div>
    <script>
        const quotes = [
            "Believe in yourself.",
            "Success comes to those who work hard.",
            "Never give up.",
            "Dream big, achieve bigger.",
            "The best time to start is now.",
            "Be the change you wish to see.",
            "Small steps lead to big results.",
            "Every expert was once a beginner.",
            "Focus on progress, not perfection.",
            "Your only limit is your mindset.",
            "Don’t watch the clock; do what it does — keep going.",
            "Discipline beats motivation every single day."
        ];

        const quotespara = document.getElementById("quote");
        const onclickbtn = document.getElementById("onclick");

        function randomquotes() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            return quotes[randomIndex];
        }

        function display() {
            const quote = randomquotes();
            quotespara.textContent = quote;
        }

        onclickbtn.addEventListener("click", display);
        display();
    </script>

</body>

</html> */


// 🎯 Mini Project 4 – Temperature Converter
// ans:self code

// let value=prompt("Enter your value :")
// let scale=prompt("Enter your scale (C,F) :")

//  function convertTemperature(value, scale){
//     if (scale== "C") {
//         let c=(value * 9/5) + 32
//         return (`Temperature in Fahrenheit: ${c}°F`);
       
//     }
//     else if(scale=="F") {
        
//        let f= (value - 32) * 5/9
//           return (`Temperature in Celsius:  ${f}°C`);
//     }
//     else {
//         return "invalid syntax"
//     }
    
// }
// console.log(convertTemperature(value, scale))