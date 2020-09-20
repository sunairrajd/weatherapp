var c1, c2;
var weather;
var long, latt;
var long = 0;
var latt = 0;
var canw = 800;
var canh = 480;
var winDeg;
var hours;




  //console.log(ntime);




function cold(temp) {
  if (temp >= 0 && temp < 20){

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
    feels = "cant find the time";
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
  console.log(latt);
  console.log(long);
  draw();
}


function draw()
{



    //Statement for lat, lon take through geo-location
//url = loadJSON('https://api.openweathermap.org/data/2.5/weather?lat='+latt+ '&lon=' + long + '&appid=c24ced086a2cbb0eab00a4edecd652c9', gotData);
url = loadJSON('http://api.openweathermap.org/data/2.5/weather?q=paris&appid=c24ced086a2cbb0eab00a4edecd652c9', gotData);
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
    timezone = weather.timezone;
    shifttime = (timezone/60/60)
    console.log(shifttime);
  //currenttime = time+timezone;
  //console.log(currenttime);
    var date = new Date(time * 1000);
    var hours = date.getHours();
    var month = date.getMonth();
    mymonth = date.toLocaleString('default', { month: 'long' });

    console.log(hours);
  //  console.log(month);
    feelslike = weather.main.feels_like;
    feelslikec = (Math.round(feelslike-273.15));
    feelslikecircle = feelslikec*1.8;
    //console.log(feelslikec);




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

    if (hours >= 0 && hours < 5){
      samay = 'night';
      setGradient(e1, e2);
    }

    else if (hours >= 6 && hours < 12){
       samay = 'morning';
       setGradient(a1, a2);
    }

    else if (hours >= 12 && hours < 15) {
       samay = 'afternoon';
       setGradient(c1, c2);
    }

    else if (hours >= 15 && hours < 18) {
       samay = 'evening';
        setGradient(c1, c2);
    }

    else if (hours >= 18 && hours < 22) {
       samay = 'night';
       setGradient(d1, d2);
    }

    else if (hours >= 22 && hours < 24) {
       samay = 'night';
       setGradient(e1,e2);
    }
     else { samay = 'nnt';
     setGradient(b1,b2);
    }
    return samay;
              }


    var message = 'As im writing you this ' + mymonth + ' ' + mytime()  +  '. The weather outside is ' +  main + 'y, ' + cloudsfun(clouds)+ ' but it feels ' + cold(feelslikec);

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





  if (hours>6 && hours<18) {
    push();
    noStroke();
    blendMode(MULTIPLY);
    fill(0,clouds*0.01*255*0.2);
    circle(random(0,800),0, random(clouds*3,clouds*8));
    circle(0,random(0,480), random(clouds*3,clouds*8));
    circle(800,random(0,480), random(clouds*3,clouds*8));
    circle(random(0,800),480, random(clouds*3,clouds*8));
    pop();
  }
  else {

    push();
    noStroke();
    blendMode(LIGHTEST);
    fill(255,clouds*0.01*255*0.2);
    circle(random(0,800),0, random(clouds*3,clouds*8));
    circle(0,random(0,480), random(clouds*3,clouds*8));
    circle(800,random(0,480), random(clouds*3,clouds*8));
    circle(random(0,800),480, random(clouds*3,clouds*8));
    pop();
  }
//return cloudcolor;








{
    for(var i=0; i <800; i=i+feelslikecircle) {

       for(var j=0; j<440; j=j+feelslikecircle) {


         push();
         noStroke();
         fill(226,0,255);
         circle(i*1.5,j*1.5,feelslikecircle);
         pop()

         push();
         translate(i*1.5,j*1.5);
         fill(255,226,0);
         noStroke();
         rotate(winDeg);
         rectMode(CENTER);
         rect(0, 0, random(feelslikecircle/2, feelslikecircle/5), feelslikecircle-5, 20);
         pop();

        push();

        translate(i*1.5,j*1.5);
        blendMode(MULTIPLY);
        rotate(winDeg);
        noStroke();
        fill(0, 50);
        circle(0,feelslikecircle/2*0.7,feelslikecircle/6);

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
    //console.log(winSpe);


}

  noLoop();
}
