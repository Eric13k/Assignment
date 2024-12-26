//Arrow Functions//
//--Qno:1--//

var numbers=[2,7,12,24];
function squareAll(numbers){
    var newArray=[];
for(i=0;i<numbers.length;i++){
    numbers=newArray.push(Math.pow(numbers[i],2))
    return newArray;
}
console.log(squareAll(numbers));
}

// //--Qno:2--//
// const sumArray=(numbers)=>{
//     var total=0;
//     numbers.foreach((num)=>{
//         total+=num;
//     });
//     return total;
// };

// //--Qno:3--//
// var array=[-20,-16,-26,-4,0,7,76];
// var evens=array.filter(function(x){
//     if(x % 2 ===0||x===0){
//         return x;
//     }
// })
// console.log(evens);

//"Strings"//

//--Qno:4--//
function reverseString(str) {
    var newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
// take input from the user
const string = prompt('Enter a string: ');
const result = reverseString(string);
console.log(result);

//--Qno:5--//

var alphabets = ["c ", "x" , "y" ,"z" , "a" , "g" , "e" , "d","i" ,"o" ,"u"]
function printVowels (val){
    let vowels=[]
    for(var i=0;i< val.length ; i++){
        if(val[i] === "a"|| val[i]=== "e"|| val[i]=== "i"|| val[i]==="o"|| val[i]==="u" ){
vowels.push(val[i])
        }
    }
    return vowels
}
 console.log = printVowels(alphabets);
console.log(result);

//qno7//
 const numbers =[2,4,6,10,3,8,1]
const maxNumber=(val)=>{
    var max =0;
    for(var i =0;i<val.lenght;i++){
        if(val[i]>max){
            max =val[i]
        }
            
    }
    return max
}

varresult=maxNumber(numbers)
console.log(result)