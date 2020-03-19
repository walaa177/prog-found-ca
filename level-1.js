// question 1
var name = "lolo";

// question 2
var person = {
    name: "lolo",
    old: 23,
};

// question 3
 var outOfStock = true;
if( outOfStock === true ){
    console.log("Out of stock");
}
else{
    console.log("In stock");
}

// question 4
var numbers =[5 , 10 , 15 , 20 ,25];
for ( var i = 0 ; i < numbers.length ; i++ ){
    console.log( numbers[i]);
}

// question 5
for( var i = 15; i < 26; i++){
    console.log(i);
}

// question 6
for( var i = 15; i < 26; i++){
    if(i === 20) {
        console.log(i);
    }
}

// question 7
var products = [
    {
        name : "iphone x",
        price : 1000,
        dangerous : false
    },
    {
        name : "chanel eau due toilet 100 ml" ,
        price : 100 ,
        dangerous : true
        
    }
];

for(var  i = 0 ; i < products.length ; i++){
    console.log(products[i].price);
    console.log (products[i].dangerous);
}

// question 8
 function whatIDontLike(animal){
     console.log("I don't like " + animal);
 }

 whatIDontLike("peg");

 // question 9

 function subtract(num1, num2) {
    var result = num1 / num2; 
    console.log(result);
 }

 // question 10

 var fruits = []; 

 function addToArray(value) {
    fruits.push(value);
 }
 addToArray('apple');