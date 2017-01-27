var x;
var web = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apikey = '&appid=49ff3214f9e25759de77a7afe42469ca&units=metric';
var url;
var weather;
var fire;
var ice;
var thumbs;

 function preload() {
   fire = loadImage('images/fire.png');
   ice = loadImage('images/ice.png');
   thumbs = loadImage('images/thumbs.png')
 }
 
function setup() {
  createCanvas(600,400);
  x = select('#city');
   var button = select('#enter');
   button.mousePressed(ask);

}

 function gotData(data) {
  weather = data;
 }

function draw() {
  background(0);
  url = web + x.value() + apikey;
  fill(random(255),random(255),random(255));
  imageMode(CENTER);
  if (weather) {
    var temp = weather.main.temp;
    var des = weather[0].main;
    textAlign(CENTER);
    textSize(25);
      text('Temperature: '+temp+'°C',120,35);
      text('Description: '+des,120,65);
  }
  if(temp > 30) {
    image(fire,width/2,200,200,200);
  }
  
  if(temp < 0 && temp > -100) {
    image(ice,width/2,200,200,200);
  }
  
  if(temp > 0 && temp < 30) {
    image(thumbs,width/2,200,200,200);
  } 
}

function ask() {
  loadJSON(url,gotData);
  
}
