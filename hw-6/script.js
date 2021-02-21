var imagecall = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var blankcall = "images/blank.jpg";
var first = -1;
var second = -2;
var score = 0;
var totality = 0;
var attempt = 0;
var user = {"firstname":"", "lastname":"", "age":0, "score":0}
var images = new Array();

function blankarray()
{
  gamearray();
  for(var i = 0; i < imagecall.length; i++)
  {
    document.getElementById(imagecall[i]).src= blankcall; }
}



function gamearray()
{
  var gameimages = ["images/empire.jpg", "images/everest.jpg", "images/needle.jpg", "images/ranier.jpg", "images/rushmore.jpg"];
  var start = [0,0,0,0,0,0,0,0,0,0];
while (images.length < 10) {
  var randomfunction = Math.floor(Math.random() * gameimages.length)
  if(start[randomfunction] < 2) {
    images.push(gameimages[randomfunction]);
    start[randomfunction] = start[randomfunction] + 1;
    console.log(images.length);
  }

}
}

function toggle(game){


if(first >= 0)
{
  second = game;
  document.getElementById(imagecall[game]).src= images[second];
}
else if(first < 0) {
  first = game;
    document.getElementById(imagecall[first]).src= images[first];
  }

if (images[second] != images[first] && first >= 0 && second >= 0){
  score++;
  setTimeout(vanish, 1000);
}
else if(images[second] ==images[first] && first >= 0 && second >= 0)
{
  score++;
  totality++;
  first = -1;
  second = -1;
  if(totality == images.length/2){
    user.score = score;
    localStorage.setItem("userInfo", JSON.stringify(user));
    window.location = "finalindex.html"
  }
}
}
function vanish()
{
  console.log(first)
  document.getElementById(imagecall[first]).src = blankcall;
  document.getElementById(imagecall[second]).src = blankcall;
  first = -1;
  secound = -2;
}

function userinfoadd()
{

  var firstname = document.getElementById("txtFirstName").value;
  var lastname = document.getElementById("txtLastName").value;
  var age = document.getElementById("txtAge").value;
  var attempts = document.getElementById('txtAttempt');
user.firstname = firstname;
user.lastname = lastname;
user.age = age;
user.attempts = attempt + 1;
localStorage.setItem("userInfo", JSON.stringify(user));
window.location = "index.html";
console.log(123);
}

function userInfo()
{
  var userInformation = localStorage.getItem("userInfo");
  user = JSON.parse(userInformation);
  var str = "Name: " + user.firstname + " " + user.lastname + "<br>" + "Age: " + user.age + "<br>" + "Score: " + user.score + "<br>" + "Attempts:" + user.attempts;
  if (document.getElementById("endInformation") != null)
  { document.getElementById("endInformation").innerHTML = str;}
}
