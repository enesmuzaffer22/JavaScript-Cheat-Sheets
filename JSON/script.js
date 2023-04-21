/* 
        
        "JSON" is used to store and move data. It is used to categorize and store objects. 
        For example usage, you can examine the .json file in the same folder.
        
*/


import data from './data.json' assert { type: "json" };

const dataArray = JSON.parse(JSON.stringify(data));
console.log(dataArray);
console.log(dataArray.students.length);
console.log(dataArray.students[0].fullname);

var str = "";

for(var i = 0; i < dataArray.students.length; i++) {
        str += dataArray.students[i].fullname + "<br>";
}

document.getElementById("text").innerHTML = str;