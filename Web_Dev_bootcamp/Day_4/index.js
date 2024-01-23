// const favCol="blue";
// let guess=prompt("Enter the color");
// while(guess!=favCol && guess!="quit"){
//     guess=prompt("Please try again");
// }
// if(guess==favCol){
//     console.log("You Won the Match");
// }else{
//     console.log("You quit")
// }

// var arr=["Mohd","Ziya","Shameem","Ahmad","Nawaz","Arbaz"];
// console.log(arr[Math.floor(Math.random()*arr.length)]);

// let obj={
//     age:19,
//     get:function(){
//         console.log(this);
//     },
//     get1:()=>{
//         console.log(this)
//     }
// }
// obj.get();
// obj.get1();

// console.log("Mohd_1");
// console.log("Mohd_2");
// console.log("Mohd_3");
// console.log("Mohd_4");
// console.log("Mohd_5");
// try{console.log(num);}catch(e){console.log("Mohd Ziya Shameem",e);}
// console.log("Mohd_6");
// console.log("Mohd_7");
// console.log("Mohd_8");
// console.log("Mohd_9");
// console.log("Mohd_10");

// const favCol="blue";
// let guess=prompt("Enter the color");
// while(guess!=favCol && guess!="Quit"){
//     guess=prompt("Please try again");
// }
// if(guess==favCol){
//     alert("You Won")
// }else{
//     alert("You Quit the game");
// }

// var arr=["Mohd","Ziya","Shameem","Arbaz","Anas",]
// let index=Math.floor(Math.random()*arr.length);
// console.log(index);
// console.log(arr[index]);

// console.log(window);
// console.log(this);


// console.log("Mohd");
// console.log("Ziya");
// setTimeout(()=>{
//     console.log("Anas Ziya");
// },2000)
// console.log("Ali Akber");


function storingData(data,success,failure){
    let internetSpeed=Math.floor(Math.random()*20);
    // console.log(internetSpeed);
    if(internetSpeed>=10){
        success();
    }
    else{
        failure();
    }
}
storingData("Student_1",()=>{
    console.log("1-Done");
    storingData("Student_2",()=>{
        console.log("2-Done");
        storingData("Student_3",()=>{
            console.log("3-Done");
            storingData("Student_4",()=>{
                console.log("4-done");
                storingData("student-5",()=>{
                    console.log("5-done");
                    storingData("student_6",()=>{
                        console.log("6-done");
                    },()=>{
                        console.log("6-Fail");
                    })
                },()=>{
                    console.log("5-Fail");
                })
            },()=>{
                console.log("4-Fail");
            })
        },()=>{
            console.log("3-Fail");
        })
    },()=>{
        console.log("2-Fail");
    })
},()=>{
    console.log("1-Fail")
})




























































































