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

// Status Fetcher Variables
const discordUserId = "522955923107348480";

// Update Status
function statusLoad() {
  // Pulling Data from Discord
  fetch("https://api.lanyard.rest/v1/users/" + discordUserId)
    .then((responce) => responce.json())
    .then((data) => {
      // Data Variables
      var status = data.data.discord_status;
      var pfp =
        "https://cdn.discordapp.com/avatars/" +
        discordUserId +
        "/" +
        data.data.discord_user.avatar;
      var activities = data.data.activities;
      var spotify = data.data.spotify;

      // Profile picture
      var profilePictureElement = document.getElementById("pfp");
      profilePictureElement.src = pfp;

      // Settings Status Text
      var statusBoolElement = document.getElementById("status-bool");

      if (status != "offline") {
        statusBoolElement.innerText = "ONLINE!";
        statusBoolElement.style.color = "lime";
      } else {
        statusBoolElement.innerText = "OFFLINE.";
        statusBoolElement.style.color = "orangered";
      }

      // Activities
      var actionTextElement = document.getElementById("action-text");
      actionTextElement.style.display = "none";

      var statusTextElement = document.getElementById("status-text");
      statusTextElement.style.display = "none";

      if (activities.length > 0) {
        for (i in activities) {
          var activity = activities[i];

          // Action Status Text
          if (activity.type == 0) {
            actionTextElement.style.display = "";
            actionTextElement.innerText = "In " + activity.name;
          }

          // Custom Status Text
          if (activity.type == 4) {
            statusTextElement.style.display = "";
            statusTextElement.innerText = '"' + activity.state + '" 💬';
          }
        }
      }
    });
}
statusLoad();
setInterval(statusLoad, 5000);

// Loading music status
function musicLoad() {
  fetch("https://us-central1-narlyxdev.cloudfunctions.net/getMusicData")
    .then((responce) => responce.json())
    .then((data) => {
      // Elements
      var containerElement = document.getElementById("music-container");
      
      var pictureElement = document.getElementById("music-picture");
      var nameElement = document.getElementById("music-title");
      var artistElement = document.getElementById("music-artist");
      var urlElement = document.getElementById("music-url");

      // Settings data
      pictureElement.src = data["image"];
      nameElement.innerText = data["name"];
      artistElement.innerText = "By: "+data["artist"];
      urlElement.href = data["url"];
    });
}
musicLoad();
setInterval(musicLoad, 60*2); // Reload every 2 minutes

// Projects Updater Function
function projectsLoad() {
  fetch("https://api.github.com/users/narlyx/repos")
    .then((responce) => responce.json())
    .then((data) => {
      var projectsElement = document.getElementById("projects-container");

      // Looping though repos
      for (i in data) {
        var repo = data[i];

        if (repo.id != 747917425) {
          // Div
          var newDiv = document.createElement("div");

          // Title
          var newTitle = document.createElement("h2");
          newTitle.innerText = repo.name;
          newDiv.appendChild(newTitle);

          // Description
          var newDescription = document.createElement("p");
          newDescription.innerText = repo.description + " ";

          // Link
          var newLink = document.createElement("a");
          newLink.innerText = "read more...";
          newLink.href = repo.html_url;
          newDescription.appendChild(newLink);

          newDiv.appendChild(newDescription);

          // Line Break
          var newBreak = document.createElement("br");
          projectsElement.appendChild(newBreak);

          // Appending Projects
          projectsElement.appendChild(newDiv);
        }
      }
    });
}
projectsLoad();

// Changelog
function changelogLoad() {
  fetch("https://api.github.com/repos/narlyx/narlyx.dev/commits")
    .then((responce) => responce.json())
    .then((data) => {
      var changelogElement = document.getElementById("changelog-container");

      // Looping though commits
      for (i in data) {
        var commitData = data[i];

        // Div
        var newDiv = document.createElement("div");

        // Message
        var newMessage = document.createElement("a");
        newMessage.href = commitData.html_url;
        newMessage.innerText = commitData.commit.message;

        // Date
        var newDate = document.createElement("span");
        newDate.className = "inverted-link";
        newDate.innerText = " — " + commitData.commit.author.date + " ";
        newMessage.appendChild(newDate);

        newDiv.appendChild(newMessage);

        // Appending Changelog
        changelogElement.appendChild(newDiv);
      }
    });
}
changelogLoad();
