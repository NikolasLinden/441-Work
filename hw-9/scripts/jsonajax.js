$(document).ready(function () {
           $("button").click(function () {
               $("#PokemonInfo").load("data/pokedata.json", function(responseText){
                   var  = JSON.parse(responseText);
                   $("#PokemonInfo").html("Id: " + pokemon.id + "<br>num: " + pokemon.num + "<br>name: " + pokemon.name + "<br>img" + pokemon.image + "<br>type: " + pokemon.type);
               });
           });
       });
