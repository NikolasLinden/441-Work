var hw7Array = new Array();

var count = 0

class imagetime
{

  constructor(title, image, descript, author, imageyear)
  {
    this.title = title;
    this.image = image;
    this.descript = descript;
    this.author = author;
    this.imageyear = imageyear;

  }

  toString()
  {
    console.log("ree");

    return "Title: " + this.title + "Decript: " + this.descript + "Author: " + this.author + "Image Year: " + this.imageyear;
  }


  get theTitle()
  {
    return this.title;

  }

  get thePath()
  {
    return this.image;
  }
  get theDescription()
  {
  return this.descript;
}
get theAuthor()
{
  return this.author;
}
get theDate()
{
  return this.imageyear
}
}

function arraytime()
{

  var array1 = new imagetime("A picture of the Fremont Bridge" , "images/bridge.jpg" , "The Fremont Bridge is one of many bridges connecting north seattle to the rest of it, crossing the ship canal just like the Aurora Bridge and Ballard Bridge nearby.","Taken by Nikolas A. Linden" ,"Taken 2019");
  var array2 = new imagetime("A picture of the Fremont Troll" , "images/troll.jpg" , "The Fremon Troll is one of the most famous landmarks in the area. The car underneath it's hand is supposed to be a Volkswagen Beetle.","Taken by Nikolas A. Linden" ,"Taken 2019");

  hw7Array.push(array1);
  hw7Array.push(array2);


}


function accessInformation()
{

  var imagetime = hw7Array[count];
  document.getElementById("title").innerHTML = imagetime.theTitle;
  document.getElementById("descript").innerHTML = imagetime.theDescript;
  document.getElementById("author").innerHTML = imagetime.theAuthor;
  document.getElementById("imageyear").innerHTML = imagetime.theDate;

  document.getElementById("allpictureinfo").innerHTML = imagetime.toString();

  document.getElementById("imagething").src = imagetime.thePath;

  count++;
  if(count >= hw7Array.length)
  {
    count = 0;
  }
}
