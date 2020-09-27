var rg;
var rm;
var lexicon;



function setup() {

  createCanvas(650, 200);

var lexicon = new RiLexicon();
// console.log('Coordinating conjunction ' + lexicon.randomWord('cc'));
// console.log('Cardinal number ' + lexicon.randomWord('cd'));
// console.log('Determiner ' + lexicon.randomWord('dt'));
// console.log('in ' + lexicon.randomWord('in'));
// console.log('Adjective ' + lexicon.randomWord('jj'));
// console.log('Adjective comparitive ' + lexicon.randomWord('jjr'));
// console.log('Adj superlative ' + lexicon.randomWord('jjs'));
//
//
// console.log('modal' + lexicon.randomWord('md'));
// console.log('noun ' + lexicon.randomWord('nn'));
// console.log('noun s ' + lexicon.randomWord('nns'));
// console.log('prepos ' + lexicon.randomWord('prp'));
// console.log('prepos ' + lexicon.randomWord('prp$'));
// console.log('adverb ' + lexicon.randomWord('rb'));
// console.log('adverb comparitive  ' + lexicon.randomWord('rbr'));
// console.log('adverb superlative  ' + lexicon.randomWord('rbs'));
// console.log('	Verb, base from' + lexicon.randomWord('vb'));
// console.log('	Verb, past participle' + lexicon.randomWord('vbn'));
// console.log('Verb, non-3rd person singular present' + lexicon.randomWord('vbp'));
// console.log('	Verb, 3rd person singular present' + lexicon.randomWord('vbz'));


console.log('' + lexicon.randomWord('cc')+  '                       coord conjuc');
console.log('' + lexicon.randomWord('cd')+  '                        number');
console.log('' + lexicon.randomWord('dt')+  '                       detertminer');
console.log(''+ lexicon.randomWord('in'));
console.log('' + lexicon.randomWord('jj')+  '                        Adj');
console.log('' + lexicon.randomWord('jjr')+  '                        Adj');
console.log('' + lexicon.randomWord('jjs')+  '                        Adj');


console.log('' + lexicon.randomWord('md') +  '                         Modal');
console.log('' + lexicon.randomWord('nn')+  '                         Noun');
console.log('' + lexicon.randomWord('nns')+  '                         Noun plural');
console.log('' + lexicon.randomWord('prp')+  '                         personal pronouns');
console.log('' + lexicon.randomWord('prp$')+  '                        personal pronouns');
console.log('' + lexicon.randomWord('rb')+  '                          Adverb');
console.log('' + lexicon.randomWord('rbr') + '                          Adverb');
console.log('' + lexicon.randomWord('rbs') + '                          Adverb');
console.log('' + lexicon.randomWord('vb') + '                           verb');
console.log('' + lexicon.randomWord('vbn') +  '                          verb, past p');
console.log('' + lexicon.randomWord('vbp')+   '                          verb 3r');
console.log('' + lexicon.randomWord('vbz')+   '                          verb 3rd per sin present');
console.log('' + lexicon.randomWord('nnp'));
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
            fday = random(myday);





var ab = "Hot and Windy it is";
var b = "Its freezing outside";
var c = "Cold as ice";
var d = "Feels like baking in the oven";
var e = "Its pouring.";
var f = "September evening";
var g = "September it is";
var h = "Its a bit chilly";
var i = "The dry leaves are blowing west";
var j = "sunset is here. So am I";
var k = "Its pouring.";
var l = "cold and windy";
var m = "Its a cold september";
var n = "Good september";
var o = "Good evening";
var p = "Its a hot day";
var q = "Good september";
var r = "Good "  + random(daytime) + " from " + random(mylocation);
var s = "Somewhere around " + random(mylocation);
var t = "" + random(mylocation) + " Says hi";
var u = "Wishes from" + random(mylocation);
var v = "regards from" + random(mylocation);
var w = "Crows glide under";
var x = "Sky is blue";
var y = "in the evening star sunset";
var z = "the strangers dog";


var arrayhaiku = ['At ' + fdaytime, fclouds + ' in ' + fmonth, "An " + fdaytime + "in " + fmonth , fmonth + ' postcards ', fhrsfromsun,  fdaytime + " is falling", fmonth + ' ' + fdaytime + " will soon end" , fdaytime + " stillness", fdaytime + " of " + fday, "Tastes like " + fmonth, fdaytime + ' traffic', fweather + 'y ' + fdaytime];


var arraysymbols = ["Traffic light turn red", "An ant climbs",  "The birds cry", "Bullfrogs croak",  "A cow stares the road","The ocean's loud", "Along the highway", "Buzzards wait", "Dead batteries", "Leaves fall", "Two butterflies warm the road", "the cat watches", "Who cares how stocks did", "Obama is busy", "Butterfly wings clap" , "my shadow grows",  "A taste of "+ fmonth +"	in her kiss"];

var secondline = ["At breakfast", "february walk","an orange traffic cone", "december traffic", "a parrot asks", "a cat watches traffic", "over traffic noise", "peak hour traffic", "the parrot sings", "empty bottle","spider webs and plastic bags", "Someone is upset", "the parrots lived upon the soffskya", "cricket falls silent",  "empty bottle", "a loudspeaker barks", "under the trees", "tangerine oil", "last years leaves", "a frog jumps", "I recycle a dream", "the voices of crows", "a family of raccoons", "trembling leaves", "Donkeys aflank", "rush-hour traffic", "the worm wiggles", "a silkworm spinning", "an inchworm stretches", " a worm digs silently still",  "cats and dogs", "a sparrow bathes", "the sunflower drips", "a sparrow takes a dust bath", "a sparrow chips", "road and sky align", "Heard from a sparrow", "of a chipping sparrow ", "Rejected city", " crumbling bridges and roads",  " bus didnt come", "a butterfly trapped","an unknown bird", "a robins flight"];

var thirdline = [" "]

var


      rg = new RiGrammar();
      rg.addRule("<start>","<line-1> % <line-2> % <line-3> % <line-4> % <line-5>", 1);

      rg.addRule("<line-1>","<word-1> ", 1);
      rg.addRule("<line-2>","<word-2>", 1);
      rg.addRule("<line-3>","<word-3> ", 1);
      rg.addRule("<line-4>","<word-4>", 1);
      rg.addRule("<line-5>","<word-5>", 1);


    //  rg.addRule("<word-1>",  ab + " | " + b + " | " + c  + " | " + d  + " | " + e + " | " + f+ " | "  + g + " | " + h + " | " + i + " | " + j + " | " + k + " | " + l + " | "+ m + " | "+ n + " | "+ o + " | " + p + " | + "+ q + " |  "+ r + " | " + s + " | "+ t + " | "+ u + " | " + v, 1);

      rg.addRule("<word-1>",  random(arrayhaiku)  , 1);
      rg.addRule("<word-2>",  random(arraysymbols)  , 1);
      rg.addRule("<word-3>",  random(arraysymbols)  , 1);
      rg.addRule("<word-4>",  random(arraysymbols)  , 1);
      // rg.addRule("<word-3>",  " <animal> | "+random(clouds) +" | <nature> | " + random(months) + " "+ random(daytime) + "| <verb>"  , 1);
      // rg.addRule("<word-4>",  " <animal> | <verb> | <nature> | " + random(months) + random(daytime) + "| <verb>"  , 1);
      rg.addRule("<word-5>",  " Good "  + random(daytime) + " from " + random(mylocation)+ " | " + "- Somewhere around " + random(mylocation) + " | - " + random(mylocation) + " Says hi" + " | " + "- Wishes from " + random(mylocation)  + " | " + "- with love from " + random(mylocation)   , 1);






      // rg.addRule("<start>", "the <action> of the <choice>", 1);

      rg.addRule("<animal>",  "hen | fox | frog | crow | tiger | parrot | cheetah | mosquito | giraffe", 1);

      rg.addRule("<verb>",  "jumps | climb | run | sleep ", 1);

      rg.addRule("<nature>",  "rock | pond | stick | leaf ", 1);


      // rg.addRule("<1>",  "<pet> | <weather>", 1);
      //
      // rg.addRule("<2>",  "parrot | hawk | crow", 1);
      rg.addRule("<3>", random(weather) , 1);

      // rg.addRule("<action>", "cries | screams | falls", 1);
    // console.log(rg.expand());
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





  //   rm = new RiMarkov(3);
  //
  //   ar = "An elephant is a mammal";
  //   var a = new RiString(ar);
  //   console.log(a.analyze());
  //
  //   let words = [
  //     RiTa.tokenize("The elephant took a bite!"),
  //   a,
  //       RiTa.getPhonemes("An elephant is a mammal"),
  //   RiTa.getPosTagsInline("cloud"),
  //   RiTa.similarByLetter("rain"),
  //   RiTa.rhymes("monsoon"),
  //   RiTa.tokenize('writing you this monday morning'),
  //   RiTa.alliterations("cloud",10),
  //   RiTa.getPresentParticiple("haze"),
  //   RiTa.getPastParticiple("snow")
  // ]
  //
  // var rm = new RiMarkov(3);
  // // rm.loadText("The priya went \ to a rahul after  dinner. The rahul went \ to dance \  with a girl. The dance went to \ priya with a girl.");
  // rm.loadText("The priya went to a rahul after  dinner . The rahul went to dance with a girl . The dance went to priya with a rahul;.");
  // let sentences = rm.generateSentences(2);
  //  text(sentences, 50, 500+(50) );





 //
 // for (let i=0; i < words.length; i++) {
 //
 //
 //   text(words[i], 50, 50+(50*i) );
 //
 // }

  }

//
//   let words = [RiTa.tokenize("The elephant took a bite!")
//   var phenomes = RiTa.getPhonemes("An elephant is a mammal");
//   var posttags = RiTa.getPosTags("As i'm writing you this monday morning");
//   var similar = RiTa.similarByLetter("happy");
//     text(phenomes, 50, 50 );
//     text(posttags, 50, 100 );
//     text(similar, 50, 100 );
//   for (let i=0; i < words.length; i++) {
//
//
//
//
//   }
// }
//
