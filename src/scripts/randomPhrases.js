// List of random phrases
const generalPhrases = [
  "ARE WE STILL FRIENDS?...",
  "THEY'RE GETTING TIRED OF ME BEING SAD",
  "You make me feel like a foooooollll...",
  "Damn.",
  "Relax, I don't got this!",
  "DON'T GET GREEN SKIN, KEEP CONTACT!",
  "Time heals but I have no time.",
  "I was in hell... looking at heaven.",
  "You were the right oneeee...",
  "Maybe we meet again in another lifetime.",
  "When I was here, I wanted to be there.",
  "Why would you want to be with me?",
  "YOU AND MEEE ALWAYYYSS FOREVERRRR",
  "MISTAKES ON SOMEONEEEE",
  "FE!N FE!N FE!N",
  "Past the point of delerium.",
  "Carry meeee further than regret",
  "Tootles.",
  "Die young and leave a pretty corpse.",
  "The loneliness came back... worse that I remebered...",
  "I'm the dream catcher but nothing but nightmares I've caught.",
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
];

// Getting current date and storing it
var day;
var month;

day = new Date().getDay();
month = new Date().getMonth() + 1;

// Returns randomized phrases
function getPhrase() {
  if (month == 10) {
    return octoberPhrases[Math.floor(Math.random() * octoberPhrases.length)];
  }

  return generalPhrases[Math.floor(Math.random() * generalPhrases.length)];
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
  document.getElementById("splash").innerText = '"' + globalPhrase + '"';
}
async function quoteLoad() {
  document.getElementById("quote");
  await new Promise((resolve) => setTimeout(resolve, 350));
  document.getElementById("quote").innerText = '"' + globalPhrase + '"';
}

titleLoad();
splashLoad();
quoteLoad();
