$(document).ready(function () {
           $("button").click(function () {
               $("#PokemonInfo").load("./data/pokedex.json", fadeText, function(responseText){
                   var pokemon = JSON.parse(responseText);
                   $("#PokemonInfo").html("<br>" + pokemon.id + "<br>" + pokemon.num + "<br>" + pokemon.name + "<br>" + pokemon.image + "<br>" + pokemon.type) + "<br>";
               });
           });
       });

       function fadeText()
       {
         $("#PokemonInfo").fadeOut("slow").fadeIn("slow");
       }
