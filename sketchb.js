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
var pdf;
var rg;
var rm;
var lexicon;





function bangaloreselect()
{ apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=c24ced086a2cbb0eab00a4edecd652c9';
redraw(); }
function delhiselect()
{ apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=c24ced086a2cbb0eab00a4edecd652c9';
redraw(); }
function qenaselect()
{ apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=qena&appid=c24ced086a2cbb0eab00a4edecd652c9';
redraw(); }
function lehselect()
{ apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=leh&appid=c24ced086a2cbb0eab00a4edecd652c9';
redraw(); }
function torontoselect()
{ apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=c24ced086a2cbb0eab00a4edecd652c9';
redraw(); }
function reykjavikselect()
{ apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=reykjavik&appid=c24ced086a2cbb0eab00a4edecd652c9';
redraw(); }

function honoluluselect()
{ apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=honolulu&appid=c24ced086a2cbb0eab00a4edecd652c9';
redraw(); }

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


var btnhonolulu = document.getElementById("honolulu");
btnhonolulu.onclick = honoluluselect;


var btnprint = document.getElementById("print");
btnprint.onclick = printCanvas;





// var win=window.open();
//   write =  win.document.write("<br><img src='"+canvas.toDataURL()+"'/>");
//
//    if (write.complete) {
//      win.print();
//
//      win.focus();
//     win.print();
//     win.close()
//
//     } else {
//       draw(); };


}



function printCanvas()
{
    //var dataUrl = document.getElementById('defaultCanvas0').toDataURL(); //attempt to save base64 string to server using this var


var imgg = document.getElementById("defaultCanvas0");

          var windowContent = "<br><img src = '"+canvas.toDataURL()+"'/>";





var printWin = window.open('','','width=800,height=400');
printWin.document.write(windowContent);
printWin.focus();
printWin.print();
printWin.close();


}







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

       let renderer = createCanvas(canw, canh, P2D);
       renderer.parent("mycan");

angleMode(DEGREES);

  // Define colors
  a1 = color(252,87,0);
  a2 = color(255,179,5);

  b1 = color(120,2,252);
  b2 = color(254,174,4);


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

function gotData(data) {

   weather = data;
    winDeg = weather.wind.deg;
    clouds = weather.clouds.all;
    mylatitude = weather.coord.lat;
    mylongitude = weather.coord.lon;


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
  mydaynum = dateObj.getUTCDay();



  var daylist = { 0 : "Sunday",
           1 : "Monday",
            2 : "Tuesday",
            3 : "Wednesday",
            4 : "Thursday",
            5 : "Friday",
            6 : "Saturday",
         };



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
    console.log('my latitude ' + mylatitude);
    console.log('my latitude ' + mylongitude);

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
       setGradient(b1, b2);
    }

    else if (hourslice >= 12 && hourslice < 16) {
       samay = 'afternoon';
        setGradient(a1, a2);
    }

    else if (hourslice >= 16 && hourslice < 19) {
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



    fmonth = mymonth.toLowerCase();

    var message = 'As im writing you this '  + mymonth.toLowerCase() + ' ' + mytime()  +  '. The weather outside is ' +  main + 'y, ' + cloudsfun(clouds)+ ' but it feels ' + cold(feelslikec);

    var footer= 'From somewhere around ' + loc + '.' ;


  push();
  translate(0,-100);
  rotate(winDeg);

  for(var x= -1000; x<6500; x=x+winSpeline) {


  push();
  strokeWeight(1);
  stroke(255,255,255, 80);

  blendMode(HARD_LIGHT);
  line(x,-1600,x,3200);
  pop()


}

  pop();


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







if (hourslice>=8 && hourslice<=19) {
  push();
  noStroke();
  blendMode(SOFT_LIGHT);
  fill(0,clouds*0.09*255);
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
  fill(255,clouds*0.09*255);
  circle(random(0,800),0, random(clouds*3,clouds*8));
  circle(0,random(0,480), random(clouds*3,clouds*8));
  circle(800,random(0,480), random(clouds*3,clouds*8));
  circle(random(0,800),480, random(clouds*3,clouds*8));
  pop();
  console.log('im putting white clouds');
}


    for(var i=0+feelslikecircle/2; i <800; i=i+feelslikecircle) {

       for(var j=0+feelslikecircle/2; j<440; j=j+feelslikecircle) {


        //  push();
        //  noStroke();
        //  blendMode(SOFT_LIGHT);
        //  fill(226,255,255);
        //  circle(i*1.8,j*1.8,feelslikecircle*1.2);
        //  pop()
        //
        //  push();
        //  translate(i*(feelslikecircle/15),j*(feelslikecircle/15));
        //  fill(255,0,255);
        //   noStroke();
        //
        //  // blendMode(SCREEN);
        //  blendMode(HARD_LIGHT);
        //  stroke(0);
        //  strokeWeight(1);
        //  noFill();
        //  rotate(winDeg);
        //  rectMode(CENTER);
        // rect(feelslikecircle/9, feelslikecircle/9,  feelslikecircle/3, feelslikecircle*1.2);
        //  pop();
        //
        // push();
        //
        // translate(i*1.8,j*1.8);
        // blendMode(MULTIPLY);
        // rotate(winDeg);
        // noStroke();
        // fill(0, 50);
        // circle(0,feelslikecircle/2*0.7,feelslikecircle/6);
        // pop();
        //



            push();
            noStroke();
            fill(255,0,255);
            circle(i*1.7,j*1.7,feelslikecircle);
            pop()

            push();
            translate(i*1.7,j*1.7);
            fill(255,226,0);
            noStroke();
            rotate(winDeg);
            rectMode(CENTER);
            // rect(feelslikecircle/9, feelslikecircle/9, random(feelslikecircle/2, feelslikecircle/5), feelslikecircle, feelslikecircle/4);
            rect(feelslikecircle/9, feelslikecircle/9, random(feelslikecircle/2, feelslikecircle/5), feelslikecircle*1.2, feelslikecircle/4);
            pop();

           push();

           translate(i*1.7,j*1.7);
           blendMode(MULTIPLY);
           rotate(winDeg);
           noStroke();
           fill(0, 50);
           circle(feelslikecircle/9,feelslikecircle/2*0.7,feelslikecircle/6);

               pop();
        }
      }


    angleMode(DEGREES);
  //   fill('white');
  //
  // textSize(36);
  // stroke(100);
  // textStyle(BOLD);
  // textLeading(38);
  // text(message, 15, 15, 400, 600);
  // textSize(18);
  // textStyle(BOLD);
  // text(footer, 15, 300, 400, 600);


    console.log(message)
    console.log(footer);
    //console.log(winSpe);





    var lexicon = new RiLexicon();


      weather = ['cloudy', 'Hazy', 'Rainy', 'Cleary', 'Sonwy', 'smokey'];
      daytime = ['morning', 'afternoon', 'evening', 'night'];
      months = ['January', 'April', 'December', 'July', 'September'];
      temp = ['Hot', 'Cold', 'great', 'warm', 'freezing cold'];
      clouds = ['clear', 'cloudy', 'dark and cloudy', 'scattered clouds', 'a bit cloudy'];
      test = ['December', 'september'];
      //mymonth = ['December', 'september'];
      mylocation = ['Hyderabad', 'Bengaluru'];
      hrsfromsun = ['sunset is far', 'sunset is here', 'sunset is near'];
    //  myday = ['sunday', 'monday'];

      fweather = main + 'y';
      fdaytime = samay;

      fmyday = daylist[mydaynum];
      console.log(fmyday);
      ftemp = random(temp);
      // fclouds = random(clouds);
      fclouds = cloudcover;

      fmylocation = loc;
      fhrsfromsun = random(hrsfromsun);



              lexsenA = lexicon.randomWord('jj') +' ' + lexicon.randomWord('nn') + ' ' +lexicon.randomWord('md') + ' ' + lexicon.randomWord('vbp');
              lexsenB = lexicon.randomWord('cd') + ' ' + lexicon.randomWord('jj') + ' ' + lexicon.randomWord('nns');
              lexsenC = lexicon.randomWord('nn') + ' ' + lexicon.randomWord('md') + ' ' + lexicon.randomWord('rb') + ' ' + lexicon.randomWord('vb');
              lexsenD = lexicon.randomWord('jj') + ' ' + lexicon.randomWord('md') + ' ' + lexicon.randomWord('vbp');
              lexsenE = lexicon.randomWord('jjs') + ' ' + lexicon.randomWord('md') + ' ' + lexicon.randomWord('rbs');
              lexsenF = lexicon.randomWord('dt') + ' ' + lexicon.randomWord('jj') + ' ' + lexicon.randomWord('vbn');
              lexsenG = lexicon.randomWord('jj') + ' ' + lexicon.randomWord('vbn') + ' ' + lexicon.randomWord('jj');
              lexsenH = lexicon.randomWord('dt') + ' ' + lexicon.randomWord('vb') + ' ' + lexicon.randomWord('rb');
              lexsenI = lexicon.randomWord('nn') + ' ' + lexicon.randomWord('vbp') + ' ' + lexicon.randomWord('nns');
              lexsenJ = lexicon.randomWord('nn') + ' ' + lexicon.randomWord('md') + ' ' + lexicon.randomWord('rb') + ' ' + lexicon.randomWord('vb');
              lexsenK = lexicon.randomWord('md') + ' ' + lexicon.randomWord('vb') + ' ' + lexicon.randomWord('rb');


              console.log(lexsenA);
              console.log(lexsenB);
              console.log(lexsenC);
              console.log(lexsenD);
              console.log(lexsenE);
              console.log(lexsenF);
              console.log(lexsenG);
              console.log(lexsenH);
              console.log(lexsenJ);
              console.log(lexsenK);


              var sen1 = ["At "+ fmylocation, "Its " + fmyday, "A " +fweather+" morning",  fmylocation + " postcards", fdaytime + " is falling", fdaytime + " stillness", fmyday + ' ' + fdaytime, fdaytime + " Traffic", "A " + fweather + ' ' + fmyday + ' '+ fdaytime];
              var sen2 = ["A frog jumps", "Donkeys flank", "The worm wiggles", "A parrot asks " + lexicon.randomWord('rb'),  "The oceans loud", "A cat watches traffic", "A cat watches " + fdaytime + " traffic", "A cat watches " + fmonth + " traffic", "The parrot sings " + lexicon.randomWord('rb'), "Two butterflies warm the road", "Spider webs and plastic bags", "Someone is upset", "Empty bottle " + lexicon.randomWord('vbz') +' ' + lexicon.randomWord('rb'), "A loudspeaker barks", "A frog jumps", "Leaves tremble", "A silkworm spinning", "A worm digs silently still",  "A fly crosses the street",  "Traffic light turn green", "A sparrow bathes", "The sunflower drips", "A sparrow takes a dust bath", "A sparrow chips","Road and sky align", "A butterfly trapped", "An ant climbs",  "The birds cry", "Bullfrogs croak",  "A cow stares the road", "Buzzards wait", "Leaves fall",   "Dead batteries", "The cat watches", "Who cares how stocks did",  "Butterfly wings clap" , "my shadow grows", "my shadow grows " + lexicon.randomWord('rb'), "Obama is busy", fdaytime + " is falling" ];

              var senb2 = ["At "+ fweather, "A " +fweather + ' ' + fdaytime, fdaytime + " stillness", fmyday + " " + fdaytime, fweather + ' ' + fmyday + ' ' + fdaytime];
              var senc1 = ["At "+ fmylocation, "Its " + fmonth, "A " + fweather + ' '+ fmonth, fmonth +" postcards ", fmonth +" stillness", fmonth + " " + fdaytime, fmyday + ' ' + fmonth + " Traffic", "A " + fweather + ' ' + fmyday + ' ' +  fdaytime ];
              var senc3 = [fdaytime + " passes in " + fmylocation , "A sunflower drips at " + fmylocation , "A bus passes by in " + fmylocation , "Another " + fdaytime +" is falling", "A sparrow chips " + fmylocation  ];




                      rg = new RiGrammar();
                      rg.addRule("<start>"," % <line-a1> % <line-a2> % <line-a3> |  % <line-b1> % <line-b2> % <line-b3> |  % <line-c1> % <line-c2> % <line-c3> |  % <line-d1> % <line-d2> % <line-d3> |  % <line-e1> % <line-e2> % <line-e3>  " , 1);


                      rg.addRule("<line-a1>",RiTa.randomItem(sen1), 1);
                      rg.addRule("<line-a2>",RiTa.randomItem(sen2), 1);
                      rg.addRule("<line-a3>",lexsenG + ' | '+ lexsenF, 1);

                      rg.addRule("<line-b1>",RiTa.randomItem(sen2), 1);
                      rg.addRule("<line-b2>",RiTa.randomItem(senb2), 1);
                      rg.addRule("<line-b3>",lexsenI, 1);

                      rg.addRule("<line-c1>",RiTa.randomItem(senc1), 1);
                      rg.addRule("<line-c2>",RiTa.randomItem(sen2), 1);
                      rg.addRule("<line-c3>",RiTa.randomItem(senc3), 1);

                      rg.addRule("<line-d1>",lexsenJ, 1);
                      rg.addRule("<line-d2>",RiTa.randomItem(sen2), 1);
                      rg.addRule("<line-d3>",RiTa.randomItem(sen1), 1);

                      rg.addRule("<line-e1>", RiTa.randomItem(senc1), 1);
                      rg.addRule("<line-e2>",lexsenK, 1);
                      rg.addRule("<line-e3>",RiTa.randomItem(sen2), 1);


                      rg2 = new RiGrammar();
                      rg2.addRule("<word-5>",  " Good "  + fdaytime + " from " + "<locationdeg>"  + " | " + " Somewhere around " + "<locationdeg>" + " |  " + "<locationdeg>" + " Says hi" + " | " + " Wishes from " + "<locationdeg>"  + " | " + " with love from " + "<locationdeg>"  , 1);

rg2.addRule("<locationdeg>", mylatitude +', ' + mylongitude +" | " + fmylocation)




                      var expanded = rg.expand();
                      console.log(expanded);



                      var haiku = expanded.split("%");
                      // haikuupper2 = haiku[0].toUpperCase() +
                      //   haiku.slice(1);

                      for (let i = 0; i < haiku.length; i++) {

                      console.log(haiku[i]);




                      fill('white');

                    textSize(36);
                    stroke(100);
                    textStyle(BOLD);
                    textLeading(38);
                      stroke(0);
                      strokeWeight(1);
                  //    noStroke();
                      text(haiku[i], 10, 160+(40*i));

                      }

                      push();
                      translate(780,470);
                      rotate(90);

                      textSize(12);
                      stroke(100);
                      textStyle(BOLD);
                      textAlign(RIGHT);


                      rg2.addRule("<start>","<word-5>", 1);
                    endstatement = rg2.expand();

                     rs = new RiString(endstatement);


                     text(rs.toUpperCase(), 0, 0);
                      console.log(endstatement);
                      pop();


//
// save(cnv, 'myCanvas.jpg');
//
 }
 noLoop();


}
