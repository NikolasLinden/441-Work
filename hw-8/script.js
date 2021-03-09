var fremontSelector = "#fremont";
var hw8Array = new Array();
var count = 0

class imagetime {

  constructor(selector, imagePath) {
    this.selector = selector;
    this.imagePath = imagePath;

  }

  get theSelector() {
    return this.selector;
  }

  get theImagePath() {
    return this.imagePath;
  }


  toString() {

    return this.selector + ":" + this.imagePath

  }



}

function arraytime() {

  var fremont = new imagetime("#fremont", "images/troll.jpg", "#third", "#square");
  var fremont2 = new imagetime("#fremont", "images/bridge.jpg", "#fourth", "#square2");

  hw8Array.push(fremont);
  hw8Array.push(fremont2);

}

$(document).ready(function () {
  arraytime();
  console.log(hw8Array.length);
  console.log(hw8Array[0].toString());
  console.log(hw8Array[0].theSelector);
  console.log(hw8Array[0].theImagePath);


  $(hw8Array[0].theSelector).attr("src", hw8Array[0].theImagePath);
  $("button").click(function () {
    $("stuff").fadeOut();

    setInterval(moveSquare, 5000);
    setInterval(moveSecondSquare, 1100);
    setInterval(moveFirstSquare, 1000);

  });
});

function moveSquare() {

  $(hw8Array[count].theSelector).attr("src", hw8Array[count].theImagePath);
  $(hw8Array[count].theSelector).fadeOut().fadeIn();
  count++;
  if (count >= hw8Array.length) {
    count = 0;
  }
  $("#third").toggle();
  $("#fourth").toggle();
}

function moveSecondSquare() {
  $("#square2").toggle().animate({
    left: 800
  }).animate({
    top: 500
  }).animate({
    left: 600
  }).animate({
    top: 200
  }).fadeOut("slow").fadeIn("slow");

}

function moveFirstSquare() {
  $("#square").toggle().animate({
    left: 800
  }).animate({
    top: 500
  }).animate({
    left: 600
  }).animate({
    top: 200
  }).fadeOut("slow").fadeIn("slow");

}
