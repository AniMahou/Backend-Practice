import algorithm from './algorithm.js'

console.log(algorithm.sum(5,10))

try{
    console.log(algorithm.divide(5,0));

}catch(error){
    console.log("error", error.message);
}