var fremontSelector = "#fremont";
var hw8Array = new Array();
var count = 0

class imagetime
{

  constructor(selector, imagePath)
  {
    this.selector = selector;
    this.imagePath = imagePath;

  }

  get theSelector()
  {
    return this.selector;
  }

get theImagePath()
{
  return this.imagePath;
}


  toString()
  {

return this.selector + ":" + this.imagePath

  }



}

function arraytime()
{

  var fremont = new imagetime("#fremont", "images/troll.jpg");
  var fremont2 = new imagetime("#fremont", "images/bridge.jpg");

  hw8Array.push(fremont);
  hw8Array.push(fremont2);


}

$(document).ready(function(){
  arraytime();
  console.log(hw8Array.length);
  console.log(hw8Array[0].toString());
  console.log(hw8Array[0].theSelector);
  console.log(hw8Array[0].theImagePath);


  $(hw8Array[0].theSelector).attr("src", hw8Array[0].theImagePath);
  $("button").click(function(){
    $("stuff").fadeOut();

    setInterval(moveSquare, 1000);




  });
});

function moveSquare()
{
  var imagetime = hw8Array[count];
  count++;
  if(count >= hw8Array.length)
  {
    count = 0;
  }

  $(hw8Array[count].theSelector).fadeOut().fadeIn();
  {

  }
  $("#third").toggle();
  $("#square").animate({left:290}).animate({top:500}).animate({left:0}).animate({top:500});{

  }

}
