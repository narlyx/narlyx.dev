// List of random phrases
const generalPhrases = [
  "HELP ME",
  "Rah",
  "*Insert Random Text*",
  "B_unno was here",
  "It's your birthday!",
  "UAGH",
  "Mood af",
  "Hourse",
  "hElp asnurm",
  "I'm loosing it.",
  "I'm gonna freak.",
  "This is what real life feels like",
  "I CAN ONLY COUNT TO FOOOOAAAARRRR!",
  "I sit... in my desolate room...",
  "No lights... no music...",
  "JUST ANGERR!",
  "GIMMI THAT SOCK, OM NOM NOM!",
  "Maw",
  "PAST THE POINT OF DELIRIUM",
  "My everything hurts.",
  "Are weee still friends",
  "STAY IN DONT HELP YOURSELFF",
  "I use arch btw",
  "Vim > Emacs",
  "Relax, I don't got this.",
  "Why can't we be frienndss",
  "I hate javascript.",
  "React is for loosers",
  "Do people even read these?",
  "Space is pretty cool",
  "What's Unus Annus?",
  "A glorified linktree",
  "How to javascript?",
  "Turtles :(",
  "Wusyaname girllfriendd",
  "Damn.",
  "I think im falllinngg in looveeee...",
  "This time I think its for reaallllll...",
  "Scotty doesn't know",
  "I was all over her",
  "Harness your hopes on just one person",
  "You could have anyone you want...",
  "Why would you want to be with me?",
  "I LOVE YOU SO",
  "Meee anndd the biirddssss",
  "You were the right one",
  "YOU AND ME, ALWAYS, FOREVER",
  "IGOR",
  "I hope you answer...",
  "I HATE YOU THOUUUGHHH",
  "MISTAKES ON SOMEONEEE",
  "GETTIN' TIRED OF BEING HAD",
  "THEY'RE GETTIGN TIRED OF ME BEING SAD",
  "Push your t3mpr",
  "I GOT CELLOPHANE WRAPPED AROUND THE LINING OF MY THROAT",
  "Roll the Katamari",
  "DOGMATICA",
  "SNAP OUT OF IT",
  "Teddy Picker",
  "You make me feel like a fooool",
  "I don't practice Santeria!",
  "FE!N FE!N FE!N",
  "To me you mean the most babbbyyyy...",
  "YOU ALLLREADYYY KNOOWWWW!",
];

const octoberPhrases = [
  "IS THE SPOOKY MONTH!",
  "BOO!",
  "BEST HOLLIDAY!",
  "Halloween noises.",
  "Jeepers",
  "Yikes",
  "OoooOOoOOoOo",
  "🎃🎃🎃🎃",
  "Halloween",
  "Rahhhhh",
  "Roarrr",
  "I'M NOT A FURRY, IS HALLOWEEN!"
];

// Getting current date and storing it
var day;
var month;

day = new Date().getDay();
month = new Date().getMonth() +1;

// Returns randomized phrases
function getPhrase() {
  var phrase;
   
  if (month == 10) {
    phrase = octoberPhrases[Math.floor(Math.random() * octoberPhrases.length)];
  }
  else {
    phrase = generalPhrases[Math.floor(Math.random() * generalPhrases.length)];
  }
  
  return phrase;
}

// Setting a global random phrase
var globalPhrase;
globalPhrase = getPhrase();

// Setting all randomized text
async function titleLoad() {
  document.title;
  await new Promise((resolve) => setTimeout(resolve, 350));
  document.title = globalPhrase + " - Narlyx";
}
async function splashLoad() {
  document.getElementById("splash");
  await new Promise((resolve) => setTimeout(resolve, 350));
  document.getElementById("splash").innerText = globalPhrase;
}

titleLoad();
splashLoad();
