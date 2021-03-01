var hw7Array = new Array();

var imagething = scene.imagetime;
document.getElementById("bridge").src = imagecall;

class imagetime
{
  constructor(title, image, description, author, imageyear)
  {
    this.title = title;
    this.imagething = image;
    this.description = description;
    this.author = author;
    this.imageyear = imageyear;

  }

  toString()
  {
    console.log("ree");
    return [ + "Image: " + this.image + "Decription: " + this.description + "Author: " + this.author + "Image Year: " + this.imageyear];

  }

  get theTitle()
  {
    return [this.title, this.image, this.description, this.author, this.imageyear];
  }
}

function arraytime()
{

  var hwseven = new imagetime("A picture of the Fremont Bridge");
  var hwseven1 = new imagetime(imagething);
  var hwseven2 = new imagetime("The Fremont Bridge is one of many bridges connecting north seattle to the rest of it, crossing the ship canal just like the Aurora Bridge and Ballard Bridge nearby.");
  var hwseven3 = new imagetime("Taken by Nikolas A. Linden");
  var hwseven4 = new imagetime("Taken 2019");
  hw7Array.push(hwseven);
  hw7Array.push(hwseven1);
  hw7Array.push(hwseven2);
  hw7Array.push(hwseven3);
  hw7Array.push(hwseven4);


}
function accessInformation()
{
  var scene = new imagetime (title, image, description, author, imageyear);
  var random = Math.floor(Math.random() * hw7Array.length);
  document.getElementById("title").innerHTML = hw7Array[random].stringthing();
}
