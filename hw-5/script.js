var imagecall = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var blankcall = "images/blank.jpg";
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
  var gameimages = ["images/empire.jpg", "images/everest.jpg", "images/needle.jpg", "images/ranier.jpg", "images/rushmore.jpg"]
  var start = [0,0,0,0,0,0,0,0,0,0];
while (images.length < 10) {
  var randomfunction = Math.floor(Math.random()* gameimages.length)
  if(start[randomfunction] < 5) {
    images.push(gameimages[randomfunction]);
    start[randomfunction] = start[randomfunction] + 1;
  }
}
}

function click(game)
{
  document.getElementById(imagecall[game]).src= images[game];
}
