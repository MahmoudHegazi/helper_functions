
function equalObjects(myObj1, myObj2){

let firstScore = 0;
let secondScore = 0;
let index=0;

let proprtiesArray = [];
let valuesArray = [];


let firstLength = 0;
let secondLength = 0;


for (const key in myObj1) {
    if (myObj1.hasOwnProperty(key)) {
        firstLength += 1;
        proprtiesArray.push(key);
        valuesArray.push(myObj1[key]);        
        firstScore +=1;
    }
}

for (const key in myObj2) {
    if (myObj2.hasOwnProperty(key)) {
        secondLength += 1;
        if (valuesArray[index] === myObj2[key] && proprtiesArray[index] === key) {
          secondScore +=1;
        }
        //console.log(myObj[key]);
        
        index += 1;
    }
    
}

if (secondScore == firstScore && firstLength === secondLength) {
   console.log("true", "equal objects");
   return true;
} else {
   console.log("false", "not equal objects");
   return false;
}

}

equalObjects({'firstName':'Ada','lastName':'Lovelace'},{'firstName':'Ada','lastName':'Lovelace'});
