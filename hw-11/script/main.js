var canvas;
var ctx;
var x = 80;
var y = 80;
var directions;
var questions;
var objectArray = [];
var object1, object2;
var tries = 3;



$(document).ready(function () {

  setup();
    $(this).keypress(function (event) {
        movementrules(event);
    });
    });

function setup()
{
    canvas = document.getElementById("canvasthing");
    ctx = canvas.getContext("2d");

  object1 = new object(80, 80, 30, 30, "#0000FF");
  object2 = new object(120, 120, 50, 50, "#00FF00");
  $.getJSON("data/information.json", function(data)
  {for(var i = 0; i < data.objects.length; i++)
    {
      objectArray.push(new object(data.objects[i].x,data.objects[i].y, data.objects[i].height, data.objects[i].width, data.objects[i].color));
    }
    showobject();
  });
}



function movementrules(event) {
  var char = event.which || event.keyCode;
  var pressedkey = String.fromCharCode(char);

  if(pressedkey == "w"){
        up();
        direction = "up";
    }
    if(pressedkey == "s")
    {
        down();
        direction = "down";
    }
    if(pressedkey == "a")
    {
        left();
        direction = "left";
    }
    if(pressedkey == "d")
    {
        right();
        direction = "right";
    }

  var test = collide(object1,object2);
  var test2 = false
  for(var i = 0; i < objectArray.length; i++)
      {

          test2 = collide(object1,objectArray[i]);
          if(test2 == true)
          {
              break;
          }

  if(test || test2)
  {
    tries--;
    if(direction == "left")
          {
              right();
          }
          else if(direction == "right")
          {
              left();
          }
          else if(direction == "up")
          {
              down();
          }
          else if(direction == "down")
          {
              up();
          }
  }
  showobject();
}
function up()
{
    object1.y-=10;
}
function down()
{
    object1.y+=10;
}
function right()
{
    object1.x+=10;
}
function left()
{
    object1.x-=10;
}

function showobject() {
      ctx.clearRect(0, 0, 800, 600);
      ctx.fillStyle = object1.color;
      ctx.fillRect(object1.x, object1.y, object1.width, object1.height);
      ctx.fillStyle = object2.color;
      ctx.fillRect(object2.x, object2.y, object2.width, object2.height);
      for(var i = 0; i < objectArray.length; i++)
      {
        ctx.fillstyle = objectArray[i].color;
        ctx.fillRect(objectArray[i].x, objectArray[i].y, objectArray[i].width, objectArray[i].height);
      }

ctx.font = "30px Arial";
    ctx.fillText("Tries: " + tries, 10, 50);
}
function ifcollide(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}
