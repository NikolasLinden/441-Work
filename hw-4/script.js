function quest1()
      {
        var questquestion = document.getElementById('question1').value;
        var questdecision = document.getElementById('decision1')
        if (questquestion === "Yes")
        { document.getElementById('question1').style.display="none";
        document.getElementById('questbutton1').style.display="none";
        document.getElementById("question2").style.display="block";
        document.getElementById("questbutton2").style.display="block";
        quest.innerHTML = "So you want to live dangerously? Okay then, beef or fish tacos?"

      }
      else if (questquestion === "No") {
        quest.innerHTML = "Looks like there's nothing else to eat! You'll have to deal with it >:)" + "Beef or fish Tacos?"
        }
        else { quest.innerHTML = "Invalid answer";


       quest.innerHTML = "That is an invalid answer. Try again";
      }
      }
      function quest2()
      {var topping = document.getElementById('question2').value;
      var questdecision = document.getElementById('decison1')
      if (topping === "Cheese") { quest.innerHTML = "A solid choice"

      }
      else if (topping === "Salsa") { quest.innerHTML = "A spicy decision"

      }

    }
