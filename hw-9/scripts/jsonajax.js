
$(document).ready(function () {
  var myPoks = "";
  $("button").click(function () {
    $(fadeText);
    $.getJSON("data/pokedex.json", function (data)
       {var i = 0;
       for (var i = 0; i < 151; i++) {
       myPoks = myPoks + "<img src='" + data.pokemon[i].img + "'>" +
       "<br>" + data.pokemon[i].num + "<br>" +
       data.pokemon[i].name + "<br>" +
       data.pokemon[i].type + "<br>";

    }
    $("#PokemonInfo").html(myPoks), fadeText;


  });

  });
});

function fadeText()
        {
            $("#PokemonInfo").fadeOut("slow").fadeIn("slow");
        }
