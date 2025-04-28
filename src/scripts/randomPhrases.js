// List of random phrases
const generalPhrases = [
  "ARE WE STILL FRIENDS?...",
  "THEY'RE GETTING TIRED OF ME BEING SAD",
  "You make me feel like a foooooollll...",
  "Damn.",
  "Relax, I don't got this!",
  "DON'T GET GREEN SKIN, KEEP CONTACT!",
  "Time heals but I have no time.",
  "You were the right oneeee...",
  "Why would you want to be with me?",
  "YOU AND MEEE ALWAYYYSS FOREVERRRR",
  "MISTAKES ON SOMEONEEEE",
  "FE!N FE!N FE!N",
  "Past the point of delerium.",
  "Carry meeee further than regret",
  "Tootles.",
  "Howdy!",
  "I love you...",
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

// List of quotes
const quotes = [
  "The loneliness came back... worse that I remebered...",
  "I'm the dream catcher but nothing but nightmares I've caught.",
  "Die young and leave a pretty corpse.",
  "When I was here, I wanted to be there.",
  "Maybe we meet again in another lifetime.",
  "Today is the sort of day where the sun only comes up to humiliate you.",
  "It's only after you have lost everything that you are free to do anything.",
  "I alone, had no body, no senses, no feelings. I was in hell, looking at heaven.",
  "Fuck that, do what makes you fucking happy, cause' at the end of the day, whose there? You.",
  "Can you please help me find my friend? I'll give you anything you need multiplied by ten. I heard he moved to a place where the time don't end, so you don't need money, all you got is time to spend.",
  "If I grew wings, I think I would fly too close to the sun.",
  "Create your past and forget your future.",
  "The lower you fall the higher you'll fly.",
  "You are truly, the most... wonderful person, I have ever met.",
  "Ten minutes can't go past without you brushing my thoughts, thats 1440 a day so I'll say a 144 times I think about you or something like that... lost match...",
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

// Returns randomized quotes
function getQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Setting all randomized text
async function titleLoad() {
  document.title;
  await new Promise((resolve) => setTimeout(resolve, 350));
  document.title = getPhrase() + " - Narlyx";
}
async function splashLoad() {
  document.getElementById("splash");
  await new Promise((resolve) => setTimeout(resolve, 350));
  document.getElementById("splash").innerText = '"' + getPhrase() + '"';
}
async function quoteLoad() {
  document.getElementById("quote");
  await new Promise((resolve) => setTimeout(resolve, 350));
  document.getElementById("quote").innerText = '"' + getQuote() + '"';
}

titleLoad();
splashLoad();
quoteLoad();
