var canvas = document.getElementById("canvasthing");
var ctx = canvas.getContext("2d");
var x = 80;
var y = 80;
var x2 = 120;
var y2 = 120;
var object1;
var object2;

makeobject();
showobject();

setInterval(randomobject2, 6000);

function makeobject() {
  object1 = new object (x, y, 30, 30, "one")
  object2 = new object (x2, y2, 20, 20, "two")
}
function randomobject2() {
  object2.setX(Math.floor(Math.random() * canvas.width));
  object2.setY(Math.floor(Math.random() * canvas.height));
  showobject();
}
function showobject() {
      ctx.clearRect(0, 0, 800, 600);
      ctx.fillStyle = object1.color;
      ctx.fillRect(object1.theX, object1.theY, object1.theWidth, object1.theHeight);
      ctx.fillStyle = object2.theColor;
      ctx.fillRect(object2.theX, object2.theY, object2.theWidth, object2.theHeight);
  $(document).ready(function () {
      $(this).keypress(function (event) {
          movementrules(event);
      });
      });
function movementrules(event) {
  var collide = ifcollide(object1, object2);
  if (collide) {
    canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
    object1.setWidth(object1.theWidth - 1);
    object1.setHeight(object1.theHeight - 1);
    object2.setWidth(object2.theWidth + 1);
    object2.setHeight(object2.theHeight + 1);

  }
  var char = event.which || event.keyCode;
  var pressedbutton = String.fromCharCode(char);
  if (pressedbutton == "w") {
    up();
  } else if (pressedbutton == "s") {
    down();
  } else if (pressedbutton == "d") {
    right();
  } else if (pressedbutton == "a") {
        left();  }
    showobject();
}
function up() {
    object1.setY(object1.theY - 5);
}
function down() {
    object1.setY(object1.theY + 5);
}
function left() {
    object1.setX(object1.theX - 5);
}
function right() {
    object1.setX(object1.theX + 5);
}


function ifcollide(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}


}
