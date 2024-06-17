// List of random phrases
const generalPhrases = [
    "HELP ME",
    "Rah",
    "*Insert Random Text*",
    "B_unno was here",
    "It\'s your birthday!",
    "UAGH",
    "Mood af",
    "Hourse",
    "hElp asnurm",
    "I\'m loosing it.",
    "I\'m gonna freak.",
    "This is what real life feels like",
    "I CAN ONLY COUNT TO FOOOOAAAARRRR!",
    "I sit... in my desolate room...",
    "No lights... no music...",
    "JUST ANGERR!",
    "GIMMI THAT SOCK, OM NOM NOM!",
    "Maw",
    "Doing everything but make a website",
    "PAST THE POINT OF DELIRIUM",
    "My everything hurts.",
    "She said she said she said!",
    "Are weee still friends",
    "His name\'s... DOOM",
    "STAY IN DONT HELP YOURSELFF",
    "I use arch btw",
    "Vim > Emacs",
    "Relax, I don\'t got this.",
    "127.0.0.1:3000/src/index.html",
    "Why can\'t we be frienndss",
    "Jeepers",
    "Yikes",
    "I hate javascript.",
    "React is for loosers",
    "Do people even read these?"
];

// Returns randomized phrases
function getPhrase() {
    var phrase;
    phrase = generalPhrases[Math.floor(Math.random()*generalPhrases.length)];
    return phrase;
}

// Setting a global random phrase
var globalPhrase;
globalPhrase = getPhrase();

// Setting all randomized text
async function titleLoad() {
    document.title;
    await new Promise(resolve => setTimeout(resolve, 350));
    document.title = (globalPhrase + " - Narlyx");
}
async function splashLoad() {
    document.getElementById("splash")
    await new Promise(resolve => setTimeout(resolve, 350));
    document.getElementById("splash").innerText = globalPhrase;
}

titleLoad();
splashLoad()