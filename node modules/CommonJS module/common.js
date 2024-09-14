function generateRandomNumber(){
    return Math.floor(Math.random() *100 +1)
}

function celciusToFarhenheit(celcius){
    return (celcius*9)/5 + 32;
}
//console.log(generateRandomNumber()) ;
// console.log(celciusToFarhenheit(0));

// for single item export
// module.exports = generateRandomNumber ;

// for multiple items export
module.exports = {
    generateRandomNumber,
    celciusToFarhenheit,
}