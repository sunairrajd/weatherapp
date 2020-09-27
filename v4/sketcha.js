var rg;
var rm;
var lexicon;



function setup() {

  createCanvas(650, 800);

var lexicon = new RiLexicon();

console.log('-------------------------------- -------');


    weather = ['cloudy', 'Hazy', 'Rainy', 'Cleary', 'Sonwy', 'smokey'];
    daytime = ['morning', 'afternoon', 'evening', 'night'];
    months = ['January', 'April', 'December', 'July', 'September'];
    temp = ['Hot', 'Cold', 'great', 'warm', 'freezing cold'];
    clouds = ['clear', 'cloudy', 'dark and cloudy', 'scattered clouds', 'a bit cloudy'];
    test = ['December', 'september'];
    mymonth = ['December', 'september'];
    mylocation = ['Hyderabad', 'Bengaluru'];
    hrsfromsun = ['sunset is far', 'sunset is here', 'sunset is near'];
    myday = ['sunday', 'monday'];

        fweather = random(weather);
        fdaytime = random(daytime);
        fmonths = random(months);
        ftemp = random(temp);
        fclouds = random(clouds);
        fmonth = random(mymonth);
        fmylocation = random(mylocation);
        fhrsfromsun = random(hrsfromsun);
        fmyday = random(myday);

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




var arrayhaiku = ['At ' + fdaytime, fclouds + ' in ' + fmonth, "An " + fdaytime + "in " + fmonth , fmonth + ' postcards ', fhrsfromsun,  fdaytime + " is falling", fmonth + ' ' + fdaytime + " will soon end" , fdaytime + " stillness", fdaytime + " of " + fdaytime, "Tastes like " + fmonth, fdaytime + ' traffic', fweather + 'y ' + fdaytime];


var arraysymbols = ["Traffic light turn red", "An ant climbs", "The birds cry", "Bullfrogs croak",  "A cow stares the road", "The oceans loud", "Along the highway", "Buzzards wait", "Dead batteries", "Leaves fall", "Two butterflies warm the road", "the cat watches", "Who cares how stocks did", "Obama is busy", "Butterfly wings clap" , "my shadow grows",  "A taste of "+ fmonth +"	in her kiss"];

var secondline = ["At breakfast","Traffic light turn red", "february walk","an orange traffic cone", "december traffic", "a parrot asks", "a cat watches traffic", "over traffic noise", "peak hour traffic", "the parrot sings", "empty bottle","spider webs and plastic bags", "Someone is upset", "the parrots lived upon the soffskya", "cricket falls silent",  "empty bottle", "a loudspeaker barks", "under the trees", "tangerine oil", "last years leaves", "a frog jumps", "I recycle a dream", "the voices of crows", "a family of raccoons", "trembling leaves", "traffic light turns red",  "Donkeys aflank", "rush hour traffic", "the worm wiggles", "a silkworm spinning", "an inchworm stretches", " a worm digs silently still",  "cats and dogs", "a sparrow bathes", "the sunflower drips", "a sparrow takes a dust bath", "a sparrow chips", "road and sky align", "Heard from a sparrow", "of a chipping sparrow ", "Rejected city", " crumbling bridges and roads",  " bus didnt come", "a butterfly trapped","an unknown bird", "a robins flight"];


var sen1 = ["At "+ fmylocation,"Its friday", "Traffic light turn red", "A " +fweather+" morning",  fmylocation + " postcards", fdaytime + " is falling", fdaytime + " stillness", fmyday + ' ' + fdaytime, fdaytime + " Traffic", "A" + fweather + ' ' + fmyday + ' '+ fdaytime];
var sen2 = ["A frog jumps", "Donkeys flank", "The worm wiggles", "A parrot asks <rb>",  "The oceans loud", "A cat watches traffic", "A cat watches " + fdaytime + " traffic", "A cat watches " + fmonth + " traffic", "The parrot sings <rb>", "Two butterflies warm the road", "Spider webs and plastic bags", "Someone is upset", "Empty bottle <vbz> <rb>", "A loudspeaker barks", "A frog jumps", "Leaves tremble", "A silkworm spinning", "A worm digs silently still", "A sparrow bathes", "The sunflower drips", "A sparrow takes a dust bath", "A sparrow chips","Road and sky align", "A butterfly trapped", "An ant climbs",  "The birds cry", "Bullfrogs croak",  "A cow stares the road", "Buzzards wait", "Leaves fall",   "Dead batteries", "The cat watches", "Who cares how stocks did",  "Butterfly wings clap" , "my shadow grows <rb>", "my shadow grows <rb>", "Obama is busy", fdaytime + " is falling" ];

var senb2 = ["At "+ fmylocation, "A cloudy morning", , "Morning stillness", "Saturday evening", "Hot saturday evening"];
var senc1 = ["At "+ fmylocation,"Its " + fmonth, "A " + fweather + ' '+ fmonth, fmonth +" postcards", fmonth +" stillness", fmonth + " " + fdaytime, fmyday + fmonth + " Traffic", "A " + fweather + ' ' + fmyday + ' ' +  fdaytime ];
var senc3 = [fdaytime + " passes in " + fmylocation, "A bus passes by in " + fmylocation , fdaytime +" is falling" ];

var sen3 = [ ];



      rg = new RiGrammar();
      rg.addRule("<start>","a % <line-a1> % <line-a2> % <line-a3> % <line-5> | b % <line-b1> % <line-b2> % <line-b3> % <line-5> | c % <line-c1> % <line-c2> % <line-c3> % <line-5> | d % <line-d1> % <line-d2> % <line-d3> % <line-5> | e % <line-e1> % <line-e2> % <line-e3> % <line-5> " , 1);


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

      rg.addRule("<line-5>","<word-5>", 1);


      rg.addRule("<word-5>",  " Good "  + random(daytime) + " from " + random(mylocation)+ " | " + "- Somewhere around " + random(mylocation) + " | - " + random(mylocation) + " Says hi" + " | " + "- Wishes from " + random(mylocation)  + " | " + "- with love from " + random(mylocation)   , 1);


    var expanded = rg.expand();

    let haiku = expanded.split("%");

    for (let i = 0; i < haiku.length; i++) {
    console.log(haiku[i]);
    fill(100);
    stroke(0);
    noStroke();
    textSize(16);
    text(haiku[i], 50, 50+(20*i));

  }


  }
