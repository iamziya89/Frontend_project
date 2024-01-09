const employee={
    salary:5000,
    calcTax(){
        console.log("Tax rate is 10%");
    }
}

const abcd={
    
    calcTax(){
        console.log("Tax rate is 20%");
    }
}

abcd.__proto__=employee;
console.log(abcd.calcTax())


