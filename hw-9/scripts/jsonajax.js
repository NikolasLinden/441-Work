$(document).ready(function () {
           $("button").click(function () {
             $.getJSON( "data/pokedex.json", function( data ) {

                console.log(data.pokemon[0].img);
                console.log(data.pokemon[1].img);
               $("#PokemonInfo").html("<img src='" + data.pokemon[0].img + "'>" + "<br>" + pokemon.id + "<br>" + pokemon.num + "<br>" + pokemon.name + "<br>" + pokemon.image + "<br>" + pokemon.type + "<br>");
           });
       });
    });
