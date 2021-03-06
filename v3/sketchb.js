var c1, c2;
var weather;
var long, latt;
var long = 0;
var latt = 0;
var canw = 800;
var canh = 480;
var winDeg;
var hours;
var url;
var cityname;



function bangaloreselect()
{
apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=c24ced086a2cbb0eab00a4edecd652c9';
redraw();
}
function delhiselect()
{
apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=c24ced086a2cbb0eab00a4edecd652c9';
redraw();
}
function qenaselect()
{
apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=qena&appid=c24ced086a2cbb0eab00a4edecd652c9';
redraw();
}
function lehselect()
{
apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=leh&appid=c24ced086a2cbb0eab00a4edecd652c9';
redraw();
}


function torontoselect()
{
apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=c24ced086a2cbb0eab00a4edecd652c9';
redraw();
}

function reykjavikselect()
{
apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=reykjavik&appid=c24ced086a2cbb0eab00a4edecd652c9';
redraw();
}




function myloca()
{

  setup();
      // let a = navigator.geolocation.getCurrentPosition(showPosition);
redraw();

}




window.onload = function() {

var btnbangalore = document.getElementById("bangalore");
btnbangalore.onclick = bangaloreselect;

var btndelhi = document.getElementById("delhi");
btndelhi.onclick = delhiselect;


var btnqena = document.getElementById("qena");
btnqena.onclick = qenaselect;


var btnleh = document.getElementById("leh");
btnleh.onclick = lehselect;

var btntoronto = document.getElementById("toronto");
btntoronto.onclick = torontoselect;

var btnreykjavik = document.getElementById("reykjavik");
btnreykjavik.onclick = reykjavikselect;


var btnmylocation = document.getElementById("mylocation");
btnmylocation.onclick = myloca;
}





  //console.log(ntime);




function cold(temp) {


  if (temp >= -10 && temp < 0){

    let feelsstatement = ['cold','freezing cold','its artic out there']
    feels = feelsstatement[Math.floor(Math.random() * feelsstatement.length)];

  }
else if (temp >= 0 && temp < 20){

    let feelsstatement = ['cold','freezing cold','its artic out there']
    feels = feelsstatement[Math.floor(Math.random() * feelsstatement.length)];

  }
  else if (temp >= 20 && temp < 30){
    let feelsstatement = ['cozy','gloomy','a bit breezy']
     feels = feelsstatement[Math.floor(Math.random() * feelsstatement.length)];
     }
  else if (temp >= 30 && temp < 36){
    let feelsstatement = ['bright and sunny','a bit hot']
    feels = feelsstatement[Math.floor(Math.random() * feelsstatement.length)];
  }
  else if (temp >= 36 && temp < 60){
    let feelsstatement = ['burning hot','baking in the oven','like an furnace']
    feels = feelsstatement[Math.floor(Math.random() * feelsstatement.length)];
  }
  else {
    let feelsstatement = ['freeeeezing cold']
    feels = feelsstatement[Math.floor(Math.random() * feelsstatement.length)];
  }
  return feels;
}


function cloudsfun(percentage) {
  if (percentage >= 80 && percentage < 100){
    cloudcover = 'dark and cloudy';
  }
  else if (percentage >= 0 && percentage < 20){
   cloudcover = 'sunny';
 }
  else if (percentage >= 20 && percentage < 50){
    cloudcover = 'a bit cloudy';
  }
  else if (percentage >= 50 && percentage < 80){
    cloudcover = 'cloudy';
  }
  else {

    cloudcover = 'idk clouds';
  }
  return cloudcover;
}


function windspeedfun(value) {

windvalue = value;
return windvalue;

}





function setup() {

   long = 0;
   latt = 0;
       let a = navigator.geolocation.getCurrentPosition(showPosition);

       let renderer = createCanvas(canw, canh);
       renderer.parent("mycan");
angleMode(DEGREES);

  // Define colors
  a1 = color(252,87,0);
  a2 = color(255,179,5);

  b1 = color(254,174,4);
  b2 = color(120,2,252);

  c1 = color(132,18,227);
  c2 = color(4,49,198);

  d1 = color(15,57,227);
  d2 = color(5,1,101);

  e1 = color(5,1,102);
  e2 = color(100,0,170);


  f1 = color(100,0,170);
  f2 = color(252,87,0);







}
function setGradient(ca, cb) {

 noFill();
 for (var y = 0; y < canh; y++) {
   var inter = map(y, 0, canh, 0, 1);
   var c = lerpColor(ca, cb, inter);
   stroke(c);
   line(0, y, canw, y);
 }
}



function showPosition(position) {
  long = position.coords.longitude.toFixed(3);
  latt = position.coords.latitude.toFixed(3);
  apiurl = 'https://api.openweathermap.org/data/2.5/weather?lat='+latt+ '&lon=' + long + '&appid=c24ced086a2cbb0eab00a4edecd652c9';
  console.log(latt);
  console.log(long);
  draw();
}




function draw()
{


  //url = loadJSON('https://api.openweathermap.org/data/2.5/weather?lat='+latt+ '&lon=' + long + '&appid=c24ced086a2cbb0eab00a4edecd652c9', gotData);
url = loadJSON(apiurl, gotData);


    //Statement for lat, lon take through geo-location
//url = loadJSON('https://api.openweathermap.org/data/2.5/weather?lat='+latt+ '&lon=' + long + '&appid=c24ced086a2cbb0eab00a4edecd652c9', gotData);
//url = loadJSON('https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=c24ced086a2cbb0eab00a4edecd652c9', gotData);
function gotData(data) {

   weather = data;
    winDeg = weather.wind.deg;
    clouds = weather.clouds.all;


    //
    winSpe = (weather.wind.speed);
    //winSpe =7;
    //console.log(winSpe);
    winSpeline = (1/winSpe)*80;
  //  console.log(winSpeline);


    loc = weather.name;
    time = weather.dt;


  var date = new Date(time * 1000);
  var timezone = weather.timezone;
  //var minutesshifttimeuser = (timezone/60);

  var utcstamp = Math.floor((new Date()).getTime() / 1000);
  var utcatlocation = utcstamp + timezone;
  dateObj = new Date(utcatlocation * 1000);
  utcString = dateObj.toUTCString();
  hourslice = (utcString.slice(-12, -10))*1;


//console.log(timezone);

//console.log(utcatlocation);
//console.log(utcString);
    console.log(hourslice);


    //var hours = date.getHours();
    //var minutes = date.getMinutes();






    feelslike = weather.main.feels_like;
    feelslikef = (feelslike-273.15)*1.8+32;
    feelslikec = (Math.round(feelslike-273.15));
    //feelslikecircle = Math.log2(feelslikec)*15;
    feelslikecircle = feelslikef*0.5;
    console.log('tempppppp in f ' + feelslikef);
    console.log('tempppppp in c ' + feelslikec);




   main = weather.weather[0].main;
  //  console.log(weather.wind.deg);
    //console.log(weather.main.temp_min);
   // console.log(winDeg);

    //console.log(feelslikec);
  //  console.log(loc);
   // console.log(main);
   //console.log(clouds);

  //  console.log(cold(feelslikec));

  function mytime() {



     if (hourslice >= 0 && hourslice < 5){
      samay = 'mid-night';
      setGradient(d1, d2);
    }

    else if (hourslice >= 5 && hourslice < 7){
      samay = 'mid-night';
      setGradient(e1, e2);
    }

    else if (hourslice >= 7 && hourslice < 8){
       samay = 'early morning';
       setGradient(f1, f2);
    }

    else if (hourslice >= 8 && hourslice < 12) {
       samay = 'morning';
       setGradient(b2, b1);
    }

    else if (hourslice >= 12 && hourslice < 15) {
       samay = 'afternoon';
        setGradient(a1, a2);
    }

    else if (hourslice >= 15 && hourslice < 19) {
       samay = 'evening';
       setGradient(b1, b2);
    }

    else if (hourslice >= 19 && hourslice < 24) {
       samay = 'night';
       setGradient(c1,c2);
    }
     else {
      samay = 'not working';
     setGradient(b1,b2);
    }
    return samay;
              }



              mymonth = date.toLocaleString('default', { month: 'long' });

    var message = 'As im writing you this '  + mymonth.toLowerCase() + ' ' + mytime()  +  '. The weather outside is ' +  main + 'y, ' + cloudsfun(clouds)+ ' but it feels ' + cold(feelslikec);

     var footer= 'From somewhere around ' + loc + '.' ;


  push();
     translate(0,-100);
 rotate(winDeg);

for(var x= -1000; x<6500; x=x+winSpeline) {


  push();
  stroke(255,255,255, 80);
  blendMode(HARD_LIGHT);
  line(x,-1600,x,3200);
  pop()


}

  pop();





  if (hourslice>=7 && hourslice<=19) {
    push();
    noStroke();
    blendMode(SOFT_LIGHT);
    fill(0,clouds*0.01*255);
    circle(random(0,800),0, random(clouds*3,clouds*8));
    circle(0,random(0,480), random(clouds*3,clouds*8));
    circle(800,random(0,480), random(clouds*3,clouds*8));
    circle(random(0,800),480, random(clouds*3,clouds*8));
    pop();
    console.log('im putting black clouds');
  }
  else {

    push();
    noStroke();
    blendMode(SOFT_LIGHT);
    fill(255,clouds*0.01*255);
    circle(random(0,800),0, random(clouds*3,clouds*8));
    circle(0,random(0,480), random(clouds*3,clouds*8));
    circle(800,random(0,480), random(clouds*3,clouds*8));
    circle(random(0,800),480, random(clouds*3,clouds*8));
    pop();
    console.log('im putting white clouds');
  }
//return cloudcolor;
function circlo() {
if (hourslice>=7 && hourslice<19) {

  cicleincolor = '';

}

else {

    cicleincolor = '255, 255, 255';
}

return cicleincolor;


}



    for(var i=0+feelslikecircle/2; i <800; i=i+feelslikecircle*1) {

       for(var j=0+feelslikecircle/2; j<440; j=j+feelslikecircle*1) {


         push();
         noStroke();
         //fill(226,0,255);
        //circle(i*1.5,j*1.5,feelslikecircle);
         pop();


         push();
         noStroke();
         translate(i*1.8,j*1.8);
         rotate(winDeg);
            fill(226,0,255);
           arc(0, 0, feelslikecircle, feelslikecircle, 0, 180);
           fill(255,226,0);
        triangle((-feelslikecircle/2), -1, +(feelslikecircle/2), -1, 0, -feelslikecircle);
            fill(226,255,255);
          // circle(0,0, 10);
           pop();


        // push();
        // translate(i*1.5,j*1.5);
        // fill(255,226,0);
      //   noStroke();
        // rotate(winDeg);
      //   rectMode(CENTER);
      //   rect(0, 0, random(feelslikecircle/2, feelslikecircle/5), feelslikecircle, feelslikecircle/4);
      //   pop();

        push();

        translate(i*1.8,j*1.8);
        blendMode(MULTIPLY);
        rotate(winDeg);
        noStroke();
        fill(0, 50);
        circle(0,feelslikecircle/2*0.7,feelslikecircle/6);

            pop();
       }
      }


    angleMode(DEGREES);
    fill('white');
    //rect(0,400,300,100);
    //fill('black');
    //text(message, 15, 410, 270, 350);
  //  text(footer, 15, 470, 270, 350);
  textSize(36);
  stroke(100);
  textStyle(BOLD);
  textLeading(38);
  text(message, 15, 15, 400, 600);
  textSize(18);
  textStyle(BOLD);
  text(footer, 15, 300, 400, 600);


    console.log(message)
    console.log(footer);
    //console.log(winSpe);


}

  noLoop();
}
