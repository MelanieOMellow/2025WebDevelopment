// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element


  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/

/* Challenge 2:  Create the function for Challenge 1 scenario */

function calArea(){
  let length = document.getElementById("length").value;
  let width = document.getElementById("width").value;
  let output = document.getElementById("output");
 let area = length * width;
 output.innerHTML = `The area of your rectangle is ${area} in square units!!`;
}
/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/

function Pet(){

let Animal = document.getElementById("Animal").value;
let Emotion = document.getElementById("Emotion").value;
let output = document.getElementById("output");
let picture = "";

if (Animal == "Bear" && Emotion == "Sad"){
  picture = "sadBear.jpg";
}
if (Animal == "Bear" && Emotion == "Funny"){
  picture = "funnyBear.jpg";
}
if (Animal == "Dog" && Emotion == "Sad"){
  picture = "sadDog.jpg";
}
if (Animal == "Dog" && Emotion == "Funny"){
  picture = "funnyDog.jpg";
}
if (Animal == "Cat" && Emotion == "Sad"){
  picture = "sadCat.jpg";
}
if (Animal == "Cat" && Emotion == "Funny"){
  picture = "funnyCat.jpg";
}

output.innerHTML = <img src = ``