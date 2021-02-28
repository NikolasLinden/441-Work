var hw7Array = new Array();

class imagetime
{
  constructor(title, image, description, author, imageyear)
  {
    this.title = title;
    this.image = image;
    this.description = description;
    this.author = author;
    this.imageyear = imageyear;

  }

  toString()
  {
    return "Title: " + this.title;
    return "Image: " + this.image;
    return "Decription: " + this.description;
    return "Author: " + this.author;
    return "Image Year: " + this.imageyear;
  }

  get theTitle()
  {
    return this.title;
    return this.image;
    return this.description;
    return this.author;
    return this.imageyear;
  }

}

function arraytime()
{
  var hwseven = new imagetime("A picture of the Fremont Bridge");
  var hwseven1 = new imagetime("insert image here");
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
  document.getElementById("title").innerHTML = hw7Array[0].toString();
  document.getElementById("image").innerHTML = hw7Array[1].toString();
  document.getElementById("description").innerHTML = hw7Array[2].toString();
  document.getElementById("author").innerHTML = hw7Array[3].toString();
  document.getElementById("imageyear").innerHTML = hw7Array[4].toString();
}
