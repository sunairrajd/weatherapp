var c1, c2;
var weather;
var long, latt;
var long = 0;
var latt = 0;
var winDeg;



function mytime() {

  var doo = new Date();
  var ntime = doo.getHours();

  if (ntime > 6 && ntime < 12){
     samay = 'morning';
     setGradient(c1, c2);

  }
  else if (ntime > 12 && ntime < 16) {
     samay = 'afternoon';
     setGradient(c1, c2);
  }
   else { samay = 'evening';
   setGradient(c1, c2);
  }
  return samay;
            }



function cold(temp) {
  if (temp > 10 && temp < 20){

    let feelsstatement = ['cold','freezing cold','its artic out there']
    feels = feelsstatement[Math.floor(Math.random() * feelsstatement.length)];
  }
  if (temp > 20 && temp < 30){
    let feelsstatement = ['cozy','gloomy','a bit breezy']
     feels = feelsstatement[Math.floor(Math.random() * feelsstatement.length)];
     }
  if (temp > 30 && temp < 36){
    let feelsstatement = ['bright and sunny','a bit hot']
    feels = feelsstatement[Math.floor(Math.random() * feelsstatement.length)];
  }
  if (temp > 36 && temp < 60){
    let feelsstatement = ['burning hot','baking in the oven','like an furnace']
    feels = feelsstatement[Math.floor(Math.random() * feelsstatement.length)];
  }
  return feels;
}


function setup() {

   long = 0;
   latt = 0;
       let a = navigator.geolocation.getCurrentPosition(showPosition);
       let renderer = createCanvas(800, 500);
       renderer.parent("mycan");
angleMode(DEGREES);

  // Define colors
  c1 = color(0,59,255);
  c2 = color(126,0,252);




 // background('white');
  //noStroke();
}
function setGradient(c1, c2) {
 // noprotect
 noFill();
 for (var y = 0; y < height; y++) {
   var inter = map(y, 0, height, 0, 1);
   var c = lerpColor(c1, c2, inter);
   stroke(c);
   line(0, y, width, y);
 }
}



function showPosition(position) {
  long = position.coords.longitude.toFixed(3);
  latt = position.coords.latitude.toFixed(3);
  console.log(latt);
  console.log(long);
  draw();
}


function draw() {

    //Statement for lat, lon take through geo-location
  url = loadJSON('https://api.openweathermap.org/data/2.5/weather?lat='+latt+ '&lon=' + long + '&appid=c24ced086a2cbb0eab00a4edecd652c9', gotData);

function gotData(data) {

   weather = data;
    winDeg = weather.wind.deg;
    clouds = weather.clouds.all;
    loc = weather.name;
    time = weather.dt;
    feelslike = weather.main.feels_like;
    feelslikec = (feelslike-273.15).toFixed(0)

   main = weather.weather[0].main;
    console.log(weather.wind.deg);
    //console.log(weather.main.temp_min);
   // console.log(winDeg);
    console.log(feelslikec);
    console.log(loc);
   // console.log(main);
   // console.log(clouds);
    var today = new Date();
    dat = today.getMonth();
    console.log(cold(feelslikec));

   mymonth = today.toLocaleString('default', { month: 'long' })

    var message = 'As im writing you this ' +mymonth + ' ' + mytime()  +  '. The weather outside is ' +  main + 'y, ' + ' but it feels ' + cold(feelslikec);

     var footer= '- From somewhere around ' + loc + '.' ;


for(var x=0; x<800; x=x+50) {
  stroke(126,0,252);
  line(0,x,800,x);
  line(x,0,x,800);

}
{
    for(var i=0; i<800; i=i+80) {

       for(var j=0; j<800; j=j+80) {
         fill(226,0,255);
         noStroke();
        circle(i+40,j+40, 60);

           push();
          translate(i+40,j+40)
           fill(255,226,0);
           rotate(winDeg);
         rectMode(CENTER);
           rect(0, 0, random(10,20), random(30,60));
           pop();
       }
      }
}

    angleMode(DEGREES);
    fill('white');
    rect(0,400,300,100);
    fill('black');
    text(message, 15, 410, 270, 350);
    text(footer, 15, 470, 270, 350);
    textSize(12);
    console.log(message)
    console.log(footer);


}

  noLoop();
}
