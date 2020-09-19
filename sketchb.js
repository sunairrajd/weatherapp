var c1, c2;
var weather;
var long, latt;
var long = 0;
var latt = 0;
var winDeg;


function mytime() {

  var doo = new Date();
  var ntime = doo.getHours();

  if (ntime > 0 && ntime < 12){
     samay = 'morning';
     setGradient(a1, a2);
     cloudcolor = 15;
  }
  else if (ntime > 12 && ntime < 15) {
     samay = 'afternoon';
     setGradient(b1, b2);
     cloudcolor = 15;
  }
  else if (ntime > 15 && ntime < 18) {
     samay = 'evening';
      setGradient(c1, c2);
      cloudcolor = 155;
  }
  else if (ntime > 18 && ntime < 22) {
     samay = 'night';
     setGradient(d1, d2);
     cloudcolor = 255;
  }
  else if (ntime > 22 && ntime < 24) {
     samay = 'night';
     setGradient(e1, e2);
      cloudcolor = 15;

  }
   else { samay = 'nnight';
   setGradient(e1, e2);
   cloudcolor = 15;


  }
  return samay;
  return cloudcolor;
            }





function cold(temp) {
  if (temp > 0 && temp < 20){

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


function cloudsfun(percentage) {
  if (percentage > 80 && percentage < 100){
    cloudcover = 'dark and cloudy';
  }
  else if (percentage >= 0 && percentage < 20){
   cloudcover = 'sunny';
 }
  else if (percentage > 20 && percentage < 50){
    cloudcover = 'a bit cloudy';
  }
  else if (percentage > 50 && percentage < 80){
    cloudcover = 'cloudy';
  }
  return cloudcover;
}


function windspeedfun(value) {

windvalue = value*20;
return windvalue;

}



function setup() {

   long = 0;
   latt = 0;
       let a = navigator.geolocation.getCurrentPosition(showPosition);
       let renderer = createCanvas(800, 480);
       renderer.parent("mycan");
angleMode(DEGREES);

  // Define colors
  a1 = color(230,130,99);
  a2 = color(247,212,98);

  b1 = color(0,59,255);
  b2 = color(126,0,252);

  c1 = color(230,130,99);
  c2 = color(247,212,98);

  d1 = color(95,74,211);
  d2 = color(19,14,141);

  e1 = color(27,4,160);
  e2 = color(12,28,82);







}
function setGradient(ca, cb) {

 noFill();
 for (var y = 0; y < height; y++) {
   var inter = map(y, 0, height, 0, 1);
   var c = lerpColor(ca, cb, inter);
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
//url = loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=c24ced086a2cbb0eab00a4edecd652c9', gotData);
function gotData(data) {

   weather = data;
    winDeg = weather.wind.deg;
    clouds = weather.clouds.all;
    //winSpe = weather.wind.speed;
  winSpe = windspeedfun(weather.wind.speed);
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

    var message = 'As im writing you this ' +mymonth + ' ' + mytime()  +  '. The weather outside is ' +  main + 'y, ' + cloudsfun(clouds)+ ' but it feels ' + cold(feelslikec);

     var footer= 'From somewhere around ' + loc + '.' ;


for(var x=80; x<800; x=x+80) {
//  stroke(126,0,252);
  //line(0,x,800,x);
  //line(x,0,x,800);

}


push();
noStroke();
blendMode(MULTIPLY);
fill(0,clouds*0.01*255*0.3);
circle(random(0,800),0, random(clouds*3,clouds*8));
circle(0,random(0,480), random(clouds*3,clouds*8));
circle(800,random(0,480), random(clouds*3,clouds*8));
circle(random(0,800),480, random(clouds*3,clouds*8));
pop();


{
    for(var i=0; i<800; i=i+80) {

       for(var j=0; j<800; j=j+80) {


         push();
         noStroke();
         fill(226,0,255);
         circle(i+40,j+40, 60);
         pop();

         push();
         translate(i+40,j+40)
         fill(255,226,0);
         noStroke();
         rotate(winDeg);
         rectMode(CENTER);
         rect(0, 0, 15, winSpe, 20);
         pop();

        push();

        translate(i+40,j+40)
        blendMode(MULTIPLY);
        rotate(winDeg);
        noStroke();
        fill(0, 50);
        circle(0,winSpe/2 - 5,6);

            pop();
       }
      }
}

    angleMode(DEGREES);
    fill('white');
    //rect(0,400,300,100);
    //fill('black');
    //text(message, 15, 410, 270, 350);
  //  text(footer, 15, 470, 270, 350);
  textSize(36);
  noStroke();
  textStyle(BOLD);
  text(message, 10, 30, 400, 600);
  textSize(18);
  textStyle(BOLD);
  text(footer, 10, 300, 400, 600);


    console.log(message)
    console.log(footer);
    console.log(winSpe);


}

  noLoop();
}
