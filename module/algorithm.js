function sum (a, b){
    return a+b;
}

function substract (a,b){
    return a-b;
}

function divide (a,b){
    if (b==0){
        throw new Error ("Divide by zero not allowed");
    }
    else{
        return a/b;
    }
    

}
export default {
    sum,
    substract,
    divide,
}