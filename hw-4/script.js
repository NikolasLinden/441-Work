function Quest1()
      {
        var qeustQuestion = document.getElementById('question1'.value)
        var questDecision = document.getElementById('decision1')
        if (answer1 === "Yes")
        { document.getElementById('question1');
        document.getElementById('questbutton1');
        document.getElementById("question2");
        document.getElementById("questbutton2");
        Quest.innerHTML = "So you want to live dangerously? Okay then, beef or fish tacos?"

      }
      else if (answer1 === "No") {
        Quest.innerHTML = "Looks like there's nothing else to eat! You'll have to deal with it >:)" + "Beef or fish Tacos?"
        }
        else { Quest.innerHTML = "Invalid answer";


       Quest.innerHTML = "That is an invalid answer. Try again";
      }
      }
      function Quest2()
      {var topping = document.getElementById('question2'.value);
      var choice = document.getElementById('questbutton2')
      if (topping === "Cheese") { Quest.innerHTML = "A solid choice"

      }
      else if (topping === "Salsa") { Quest.innerHTML = "A spicy decision"

      }

    }
