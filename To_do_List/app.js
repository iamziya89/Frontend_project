// let a=prompt("Enter the first number");
// let b=prompt("Enter the second number");
// console.log(`The vaue of a and b before the swapping is a=${a} and b=${b}`);
// let t=a
// a=b
// b=t
// console.log(`The vaue of a and b After the swapping is a=${a} and b=${b}`);

// var a=parseInt(prompt("Enter the first number"));
// var b=parseInt(prompt("Enter the second number"));
// console.log(`The value of a and b before the swapping is a=${a} and b=${b}`);
// a=a+b
// b=a-b
// a=a-b
// console.log(`The vaue of a and b after the swapping is a=${a} and b=${b}`);

// function convert(){
//     var km=document.getElementById("km_val").value;
//     var miles=0.621317*km;
//     // console.log(miles);
//     document.getElementById("res").innerText=`${miles} mile`;
// }

// let cel=prompt("Enter the value in Celcius")
// let far=(9/5*cel)+32;
// console.log(`The equivalent value of ${cel} C is : ${far} F `);

// function check(){
//     var data=prompt("Enter the number")
//     var res=Math.sign(data)
//     return res;
// }
// console.log(check());

// function check(){
//     var data=prompt("Enter the number")
// if(data>0){
//     return `The number ${data} is positive`
// }
// else if(data==0){
//     return `The number ${data} is Zero`
// }
// else{
//     return `The number ${data} is Negative`
// }
// }
// console.log(check());


// var num=Math.random()*(10-1)+1;
// console.log(num);

// var num=prompt("Enter the numbe to be checked")
// if(num%2!==0){
//     console.log(`The given number ${num} is an Odd number`);
// }
// else{
//     console.log(`The given number ${num} is an Even number`);
// }

// var num=prompt("Enter the numbe to be checked")

// var res=(num%2)==0 ? "Even" : "Odd"
// console.log(`${num} is an `,res);

// if(num==1){
//     console.log(`The ${num} neither prime nor composite number`);
// }
// else if(num<1){
//     console.log(`The ${num} neither prime`);
// }
// else{
//     for(var i=2;i<num;i++){
//         if(num%i==0){
//             var res=`The ${num} is a not prime number`
//             break;
//         }
//         else{
//             var res=`The ${num} is a prime number`
//             break;
//         }
//     }
//     console.log(res)
// }


// var a=prompt("Enter the first number to be checked")
// var b=prompt("Enter the second number to be checked")
// var c=prompt("Enter the third number to be checked")
// if(a>=b && a>=c){
//     console.log(`The largest number is ${a}`);
// }
// else if(b>=a && b>=c){
//     console.log(`The largest number is : ${b}`);
// }
// else{
//         console.log(`The largest number is ${c}`);
// }
// var res=Math.max(a,b,c)
// console.log(`The largest number in ${a}, ${b} and ${c} will be ${res}`);



// Factoral of a number

// var a=prompt("Enter the first number to be checked")
// var fact=1
// if(a==0){
//     console.log(`The factorial of ${a} : 1`);
// }
// else if(a<0){
//     console.log(`The factorial of negative number ${a} id not possible`)
// }
// else{
//     for(i=a;i>=1;i--){
//         fact=fact*i;
//     }
//     console.log(`The factorai of ${a} will be : ${fact}`);
// }


// function table(n){
//     for(var i=1; i<=10;i++){
//         console.log(`The table of ${n} is ${n}*${i}=${n*i}`);
//     }
// }
// table(10)

// var a=prompt("Enter the first operand")
// var b=prompt("Enter the second operand")
// var opr=prompt("Enter the operator to perfom the operation")
// switch(opr){
//     case '+':
//         var res=parseInt(a)+parseInt(b)
//         console.log(res);
//         // break;
//     case '-':
//         console.log(a-b);
//     case '*':
//         console.log(a*b);
//     case '/':
//         console.log(a/b);
// }

// var a=prompt("Enter the first operand")
// var b=prompt("Enter the second operand")
// var c=prompt("Enter the third operand")

// var d1=a%10;
// var d2=b%10;
// var d3=c%10;
// if((d1===d2) && (d2===d3)){
//     console.log(`The number ${a}, ${b} and ${c} have the same last digit`);
// }
// else{
//     console.log(`The number ${a}, ${b} and ${c} not have the same last digit`);
// }

// let n=prompt("Enter the number of term to be printed in the fabonacci series")

// var a=0,b=1;
// console.log(a);
// console.log(b);
// for(var i=0;i<=n;i++){
//     var sum=a+b;
//     console.log(sum)
//     a=b
//     b=sum
// }

// let n=prompt("Enter the number of term to be printed in the fabonacci series")
// var sum=0
// while(n>0){
//     var r=n%10;
//     console.log(n,r);
// }
// if(sum===n){
//     console.log(`The Given number ${n} is an Armstrong number`);
// }
// else{
//     console.log(`The Given number ${n} is not an Armstrong number`);
// }


// let n=prompt("Enter the number of term to be printed in the fabonacci series")
// let temp=n
// var sum=0
// while(temp>0){
//     r=temp%10;
//     sum+=r**3
//     temp=parseInt(temp/10)
// }
// if(sum==n){
//     console.log(`The given number ${n} is armstrong number `);
// }
// else{
//     console.log(`The given number ${n} is not armstrong number `);
// }


// var number=prompt("Please Enter the number")
// var temp=number
// var sum=0
// while(temp>0){
//     r=temp%10
//     sum=sum+r*3
//     temp=parseInt(temp/10)
// }
// if(sum==number){
//     console.log(`The given number ${number} is an armstrong number`);
// }
// else{
//     console.log(`The given number ${number} is not an armstrong number`);
// }

// let a=prompt("Enter the lower limit")
// let b=prompt("Enter the upper limit")
// for(var i=a;i<=b;i++){
//     var sum=0;
//     var t=i
//     var d=t.toString().length;
//     while(t>0){
//         var dig=t%10;
//         sum=sum+dig**d
//         t=parseInt(t/10)
//     }
//     if(sum==i){
//         console.log(`The armstrong number between ${a} and ${b} will be ${sum}`);
//     }
// }

// let n=prompt("Enter the number")
// var sum=0
// var temp=n
// while(temp>0){
//     var lastDigit=temp%10;
//     sum=sum+lastDigit**3
//     temp=parseInt(temp/10)
// }
// if(sum==n){
//     console.log(`${sum} is an armstrong number`);
// }
// else{
//     console.log(`${sum} is not an armstrong number`);
// }

// var a=prompt("Enter the lower limit")
// let fact=1
// for(var i=a;i>=1;i--){
//     fact=fact*i
// }
// console.log(`The factorial of ${a} is ${fact}`);

// let n=prompt("Please enter the number")
// console.log(`The factor of the number ${n} are,`)
// for(var i=1;i<=n;i++){
    
//     if(n%i==0){
//         console.log(i)
//     }
// }

// var n=prompt("Please enter the number waned to check")
// var c=0
// for(var i=1;i<n;i++){
//     if(n%i==0){
//         c=c+1
//     }
// }
// console.log("Mohd Ziya");
// if(c==2){
//     console.log(c);
// }

// var n=prompt("Please enter the number waned to check")
// var c=0
// for(var i=1;i<=n;i++){
//     if(n%i==0){
//         c=c+1
//     }
// }
// if(c==2){
//     console.log(`The given number ${n} is an armstrong number`);
// }
// else{
//     console.log(`The given number ${n} is an not armstrong number`);
// }


// var n=prompt("Please enter the number waned to check")
// var a=0
// var b=1
// console.log(a);
// console.log(b);
// for(var i=0; i<=n;i++){
//     var sum=a+b
//     console.log(sum)
//     a=b
//     b=sum
// }

// var num=prompt("please enter the number")
// var t=num
// while(t>0){
//     var sum=0
//     var r=t%10;
//     sum+=r**3
//     t=parseInt(t%10)
// }
// document.write("Ziya")

var num=prompt("Plese enter the number")
var fact=1
for(var i=1; i<=num;i++){
    fact=fact*i
}
console.log(`The factorial of the given number ${num} is : ${fact}`);







































































































































    
























































































































































































































































































































