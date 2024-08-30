// Code with Explain 
// Prompt the user to enter a month and store the input in getData.
var getData = prompt("Enter Month");

// Define an array with mixed elements: strings and nested arrays.
var arrData = ["Element-1", "Element-2", "Element-3", ["jan", "feb", "march"], ["Monday", "Tuesday", "Wen"]];

// Initialize a variable flage with a default message indicating that the data is not matched.
var flage = "Data is not Matched";

// Loop through each element in the arrData array.
for(var i = 0; i < arrData.length; i++){
    // Get the current element, which could be a string or an array.
    var nestArr = arrData[i];
    
    // Check if the current element is an object (in this case, an array).
    if(typeof nestArr === "object"){
        // If it is an array, loop through the nested array.
        for(var j = 0; j < nestArr.length; j++){
            var nestedarr = nestArr[j];
            
            // Check if the user input (getData) matches any element in the nested array.
            if (getData === nestedarr) {
                // If a match is found, set flage to the matching nested array.
                flage = nestArr;
            }
        }
    }   
}

// After the loop, check if flage is different from the default "Data is not Matched".
if(flage !== "Data is not Matched"){
    // If flage was changed, alert that the data is matched.
    alert("Data is Matched");
} else {
    // If flage was not changed, alert that the data is not matched.
    alert("Data is not Matched");
}

// Log the value of flage to the console.
console.log(flage);

// var getData = prompt("Enter Month");
// var arrData = ["Element-1", "Element-2", "Element-3", ["jan", "feb", "march"], ["Monday", "Tuesday", "Wen"]];
// var flage = "Data is not Matched";
// for(var i = 0; i < arrData.length; i++){
//     var nestArr = arrData[i];
//     if(typeof (nestArr) === "object" || "object"){
//         for(var j = 0; j < nestArr.length; j++){
//             var nestedarr = nestArr[j];
//             if (getData === nestedarr) {
//                 flage = nestArr;
//             }
//         }
//     }   
// }
// if(flage !== "Data is not Matched"){
//     alert("Data is Matched");
// }
//  else {
//     alert("Data is not Matched");
// }
// console.log(flage);