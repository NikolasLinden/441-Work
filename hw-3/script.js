function Quest(choice) {
  var answer1 = document.getElementById("1").innerHTML;
  var answer2 = document.getElementById("2").innerHTML;
  if (choice == 1 && answer1 == "Yes") {
        document.getElementById("question").innerHTML = "You enter, not fearing the aftermath of the tacos. Your two options are fish and beef, what will you get?";
        document.getElementById("1").innerHTML = "Fish";
        document.getElementById("2").innerHTML = "Beef";}
else if (choice == 2 && answer2 == "No") {
        document.getElementById("question").innerHTML = "Turns out there's nothing else to eat. Better luck next time!";
        document.getElementById("1").innerHTML = "Yes, try again";
        document.getElementById("2").innerHTML = "Finish";}
else if (choice == 1 && answer1 == "Fish") {
        document.getElementById("question").innerHTML = "Turns out they are out of fish. better luck next time" + "<br>Restart?";
        document.getElementById("1").innerHTML = "Yes, try again";
        document.getElementById("2").innerHTML = "Finish";}
else if (choice == 2 && answer2 == "Beef") {
        document.getElementById("question").innerHTML = "Beef is a solid choice. Cheese or Salsa?" ;
        document.getElementById("1").innerHTML = "Cheese";
        document.getElementById("2").innerHTML = "Salsa";}
else if (choice == 1 && answer1 == "Cheese") {
        document.getElementById("question").innerHTML = "You sit down to eat your taco, would you like another one?";
        document.getElementById("1").innerHTML = "Yes, try again";
        document.getElementById("2").innerHTML = "Finish";}
else if (choice == 2 && answer2 == "Salsa") {
        document.getElementById("question").innerHTML = "Turns out they are out of salsa. Better luck next time!" + "<br>Restart?";
        document.getElementById("1").innerHTML = "Yes, try again";
        document.getElementById("2").innerHTML = "Finish";}
else if (choice == 1 && answer1 == "Yes, try again") {
        document.getElementById("question").innerHTML = "It's Taco Tuesday at the cafeteria, but do you dare enter the horrid halls?";
        document.getElementById("1").innerHTML = "Yes";
        document.getElementById("2").innerHTML = "No";}
else if (choice == 2 && answer2 == "Finish") {
        document.getElementById("question").innerHTML = "Go get food, and remember to hydrate!";
}
}
