function quest1() {

  var questquestion = document.getElementById('decision1').value;
  var questdecision = document.getElementById('decision1')
  if (questquestion === "Yes") {
    document.getElementById('decision1').style.display = "none";
    document.getElementById('questbutton1').style.display = "none";
    document.getElementById("topping").style.display = "block";
    document.getElementById("questbutton2").style.display = "block";


    quest.innerHTML = "So you want to live dangerously? Okay then, beef or fish tacos?"

  } else if (questquestion === "No") {
    document.getElementById('decision1').style.display = "none";
    document.getElementById('questbutton1').style.display = "none";
    document.getElementById("topping").style.display = "block";
    document.getElementById("questbutton2").style.display = "block";
    quest.innerHTML = "Looks like there's nothing else to eat! You'll have to deal with it >:)" + "Beef or fish Tacos?"
  } else {
    quest.innerHTML = "Invalid answer";


    quest.innerHTML = "That is an invalid answer. Try again, enter Yes or No";
  }
  console.log(questquestion);
return questquestion

}



function quest2()

{
  var myTopping = document.getElementById('topping').value;
  var questdecision = document.getElementById('decison1');
  if (myTopping === "Beef") {
    document.getElementById("topping").style.display = "none";
    document.getElementById("questbutton2").style.display = "none";
    document.getElementById("topping2").style.display = "block";
    document.getElementById("questbutton3").style.display = "block";


    document.getElementById('quest').innerHTML = "A solid choice. Cheese or Salsa?"

  } else if (myTopping === "Fish") {
    document.getElementById("topping").style.display = "none";
    document.getElementById("questbutton2").style.display = "none";
    document.getElementById("topping2").style.display = "block";
    document.getElementById("questbutton3").style.display = "block";
    document.getElementById('quest').innerHTML = "A spicy decision. Cheese or Salsa?"
  } else {
    quest.innerHTML = "Invalid answer";


    quest.innerHTML = "That is an invalid answer. Try again, enter Beef or Fish";


  }
  console.log(myTopping);
return myTopping
}
function quest3()

{
  var myTopping = document.getElementById('topping2').value;
  var questdecision = document.getElementById('decison1');
  if (myTopping === "Cheese") {
    document.getElementById('quest').innerHTML = "Basic, but acceptable. How hot would you like your hotsauce?"
    document.getElementById("topping2").style.display = "none";
    document.getElementById("questbutton3").style.display = "none";
    document.getElementById("topping3").style.display = "block";
    document.getElementById("questbutton4").style.display = "block";

  } else if (myTopping === "Salsa") {
    document.getElementById('quest').innerHTML = "Even spicier. How hot would you like your hotsauce?"
    document.getElementById("topping2").style.display = "none";
    document.getElementById("questbutton3").style.display = "none";
    document.getElementById("topping3").style.display = "block";
    document.getElementById("questbutton4").style.display = "block";
    document.getElementById("quest").style.color = "red"
  } else {
    quest.innerHTML = "Invalid answer";


    quest.innerHTML = "That is an invalid answer. Try again, enter Cheese or Salsa";


  }
  console.log(myTopping);
return myTopping
}
function quest4()

{
  var myTopping = document.getElementById('topping3').value;
  var questdecision = document.getElementById('decison1');
  if (myTopping === "Mild") {
    document.getElementById('quest').innerHTML = "Nice and easy. For Here or To go?"
    document.getElementById("topping3").style.display = "none";
    document.getElementById("questbutton4").style.display = "none";
    document.getElementById("End").style.display = "block";
    document.getElementById("questbutton5").style.display = "block";

  } else if (myTopping === "Hot") {
    document.getElementById('quest').innerHTML = "Oof, this is going to burn. For Here or To go?"
    document.getElementById("topping3").style.display = "none";
    document.getElementById("questbutton4").style.display = "none";
    document.getElementById("End").style.display = "block";
    document.getElementById("questbutton5").style.display = "block";
    document.getElementById("quest").style.color = "red"
  } else {
    quest.innerHTML = "Invalid answer";


    quest.innerHTML = "That is an invalid answer. Try again, enter Mild or Hot";

  }
  console.log(myTopping);
return myTopping
}
function quest5()

{
  var myTopping = document.getElementById('End').value;
  var questdecision = document.getElementById('decison1');
  if (myTopping === "Here") {
    document.getElementById('quest').innerHTML = "You stay and eat your taco. Would you like get another?"
    document.getElementById("End").style.display = "none";
    document.getElementById("questbutton5").style.display = "none";
    document.getElementById("loop").style.display = "block";
    document.getElementById("questbutton6").style.display = "block";

  } else if (myTopping === "To go") {
    document.getElementById('quest').innerHTML = "You eat your taco later. Would you like to get another?"
    document.getElementById("End").style.display = "none";
    document.getElementById("questbutton5").style.display = "none";
    document.getElementById("loop").style.display = "block";
    document.getElementById("questbutton6").style.display = "block";
  } else {
    quest.innerHTML = "Invalid answer";


    quest.innerHTML = "That is an invalid answer. Try again, enter Here or To go";

  }
  console.log(myTopping);
return myTopping
}
function quest6()

{
  var myTopping = document.getElementById('loop').value;
  var questdecision = document.getElementById('decison1');


  if (myTopping === "Yes") {
    document.getElementById('quest').innerHTML = "You decide to get another taco. Beef or Fish?"
    document.getElementById("loop").style.display = "none";
    document.getElementById("questbutton6").style.display = "none";
    document.getElementById("topping").style.display = "block";
    document.getElementById("questbutton2").style.display = "block";

  } else if (myTopping === "No") {
    document.getElementById("loop").style.display = "none";
    document.getElementById("quest").style.color = "blue"
    document.getElementById("picture").src="./images/thumb.png"
    document.getElementById("number")
    document.getElementById("questbutton6").style.display = "none";
    document.getElementById("questbutton7").style.display = "block";


    finish = false;
    do {
      document.getElementById('quest').innerHTML = "Thank you for playing! Please rate your experience with a number!"

    }while(finish);


  }
}
