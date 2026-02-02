// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function Average(){
 let grade1 = parseFloat(document.getElementById("grade1").value);
 let grade2 = parseFloat(document.getElementById("grade2").value);
 let grade3 = parseFloat(document.getElementById("grade3").value);
 let output = document.getElementById("output_average");

let average = (grade1 + grade2 + grade3) / 3;
output.innerHTML = average;
}


// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function Slope(){
 let x1 = parseFloat(document.getElementById("x1").value);
 let y1 = parseFloat(document.getElementById("y1").value);
 let x2 = parseFloat(document.getElementById("x2").value);
 let y2 = parseFloat(document.getElementById("y2").value);
 let output = document.getElementById("output_slope");

let slope = (y2 - y1) / (x2 - x1);
output.innerHTML = slope;
}


// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.

function Slope(){
 let x1 = parseFloat(document.getElementById("x1").value);
 let y1 = parseFloat(document.getElementById("y1").value);
 let x2 = parseFloat(document.getElementById("x2").value);
 let y2 = parseFloat(document.getElementById("y2").value);
 let output = document.getElementById("output_slope");

let slope = (y2 - y1) / (x2 - x1);
output.innerHTML = slope;
}



// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.

function BMI(){
 let weight = parseFloat(document.getElementById("weight").value);
 let height = parseFloat(document.getElementById("height").value);
 let output = document.getElementById("output_bmi");

let bmi = weight / (height * height);
output.innerHTML = bmi;
}