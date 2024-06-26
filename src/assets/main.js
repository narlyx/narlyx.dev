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
    "Do people even read these?",
    "Space is pretty cool",
    "What\'s Unus Annus?",
    "A glorified linktree",
    "How to javascript?",
    "Turtles :("
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

// Status Fetcher Variables
const discordUserId = "522955923107348480"

// Update Status
function statusLoad() {
    // Pulling Data from Discord
    fetch("https://api.lanyard.rest/v1/users/"+discordUserId)
    .then(responce => responce.json())
    .then(data=> {
        // Data Variables
        var status = data.data.discord_status;
        var pfp = "https://cdn.discordapp.com/avatars/"+
        discordUserId+"/"+data.data.discord_user.avatar;
        var activities = data.data.activities;
        var spotify = data.data.spotify;

        // Settings Status Text
        var statusTextElement = document.getElementById("status-text");

        if (status != "offline") {
            statusTextElement.innerText = "ONLINE!";
            statusTextElement.style.color = "lime";
        } else {
            statusTextElement.innerText = "OFFLINE.";
            statusTextElement.style.color = "orangered";
        }

        // Activities
        var activityTextElement = document.getElementById("activity-text");
        activityTextElement.style.display = "none";

        var spotifyContainerElement = document.getElementById("spotify-container");
        spotifyContainerElement.style.display = "none";
        var spotifyArtElement = document.getElementById("spotify-art");
        var spotifyTitleElement = document.getElementById("spotify-title");
        var spotifyArtistElement = document.getElementById("spotify-artist");
        var spotifyListenElement = document.getElementById("spotify-listen");

        if (activities.length>0) {
            for (i in activities) {
                var activity = activities[i];

                // Custom Status Text
                if (activity.type == 4) {
                    activityTextElement.style.display = "";
                    activityTextElement.innerText = activity.state+" 💬";
                }

                // Spotify
                if (activity.type == 2) {
                    spotifyContainerElement.style.display = "";

                    spotifyArtElement.src = spotify.album_art_url;
                    spotifyTitleElement.innerText = spotify.song;
                    spotifyArtistElement.innerText = "By "+spotify.artist;
                    spotifyListenElement.href = "https://open.spotify.com/track/"+spotify.track_id;
                }
            }
        }
    });
}
statusLoad();
setInterval(statusLoad,100);

// Projects Updater Function
function projectsLoad() {
    fetch("https://api.github.com/users/narlyx/repos")
    .then(responce => responce.json())
    .then(data=> {

        var projectsElement = document.getElementById("projects-container");
        
        // Looping though repos
        for (i in data) {
            var repo = data[i];

            if(repo.id != 747917425) {
                // Div
                var newDiv = document.createElement("div");

                // Title
                var newTitle = document.createElement("h2");
                newTitle.innerText = repo.name;
                newDiv.appendChild(newTitle);

                // Description
                var newDescription = document.createElement("p");
                newDescription.innerText = repo.description+" ";

                // Link
                var newLink = document.createElement("a");
                newLink.innerText = "read more...";
                newLink.href = repo.html_url;
                newDescription.appendChild(newLink);

                newDiv.appendChild(newDescription);

                // Line Break
                var newBreak = document.createElement("br")
                projectsElement.appendChild(newBreak);

                // Appending Projects
                projectsElement.appendChild(newDiv)
            }
        }
    });
}
projectsLoad();

// Changelog
function changelogLoad() {
fetch("https://api.github.com/repos/narlyx/narlyx.dev/commits")
    .then(responce => responce.json())
    .then(data=> {

        var changelogElement = document.getElementById("changelog-container");
        
        // Looping though commits
        for (i in data) {
            var commitData = data[i];

            // Div
            var newDiv = document.createElement("div");

            // Message
            var newMessage = document.createElement("a");
            newMessage.style.color = "var(--primary-color)"
            newMessage.href = commitData.html_url;
            newMessage.innerText = commitData.commit.message;

            // Date
            var newDate = document.createElement("span");
            newDate.style.color = "white"
            newDate.innerText = " — "+commitData.commit.author.date+" ";
            newMessage.appendChild(newDate);

            newDiv.appendChild(newMessage);

            // Appending Changelog
            changelogElement.appendChild(newDiv);
        }
    });
}
changelogLoad();