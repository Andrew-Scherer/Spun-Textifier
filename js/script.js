var theBigArray = ["this is {string|a test|its yea} {and multiple|sdasd|asdasd} 1", "this is {string|a test|its yea} {and multiple|sdasd|asdasd} 2", "this is {string|a test|its yea} {and multiple|sdasd|asdasd} 3"]

var spunText = [theBigArray[Math.floor(Math.random()*theBigArray.length)]];

var tempArray = [];
var finalArray = [];

//splitting the spunText into single characters and moving them to tempArray
tempArray = spunText[0].split("");


var theSpinner = function () {
    //assigning variable to {, finding the next } and giving it a variable
    var startBlock = tempArray.indexOf("{")
    var endBlock = tempArray.indexOf("}");

    //slicing the spun block from the old array, creating a new array called newBlock with the sliced block inside
    var newBlock = tempArray.slice(startBlock, endBlock + 1);

    //Join the strings together
    var joinBlock = newBlock.join("");

    //cleaning joinBlock of { and }'s
    var firstBlock = joinBlock.slice(1, -1);

    //Remove the | with split and put words/phrases into their own indexes
    var finalBlock = firstBlock.split("|");

    //pick a random sentence or phrase, mark it the Winner!
    var theWinner = finalBlock[Math.floor(Math.random() * finalBlock.length)];

    var replacedText = spunText[0].replace(joinBlock, theWinner);
    console.log("the winner is " + theWinner);
    spunText = [replacedText]
    $('#output').text(spunText)
    tempArray = spunText[0].split("")

}
   
//iterating through tempArray
for (i = tempArray.length; i > 0; i -= 1) {

    
   var checkingIt = tempArray[i];
   
   //Checking for {, the start of a spun block
   if (checkingIt === "{") {
       theSpinner(tempArray);
   }
}   

   
