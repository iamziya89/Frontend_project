// function myFun(callback){
//     console.log("Mohd Ziya Shameem Task 1");
//     callback();
// }

// myFun(()=>{
//     console.log(" Shameem Task 21");
// });

// function getTwono(a,b,callback){
//     console.log(a,b);
//     callback(a,b);
// }
// function addTwono(c,d){
//     console.log(c+d)
// }

// getTwono(5,6,addTwono);

const head1=document.querySelector(".head1")
const head2=document.querySelector(".head2")
setTimeout(()=>{
    head1.textContent="Heading1"
    head1.style.color="violet"
    setTimeout(()=>{
        head2.textContent="Heading2"
        head2.style.color="red"
    },1000)
},1000)

