
$(document).ready(function () {
  $("button").click(function () {
    $.getJSON("data/pokedex.json", function (data)
       {var i = 0;
       for (var i = 0; i < 151; i++) {
      $("#PokemonInfo").html("<img src='" + data.pokemon[i].img + "'>" +
       "<br>" + data.pokemon[i].num + "<br>" +
       data.pokemon[i].name + "<br>" +
       data.pokemon[i].type + "<br>");

    }



  });
  });
});
