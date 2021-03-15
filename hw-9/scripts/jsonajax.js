$(document).ready(function () {
           $("button").click(function () {
             $.getJSON( "data/pokedata.json", function( data ) {

                console.log(data.pokemon[0].img);
                console.log(data.pokemon[1].img);

           });
       });
    });
