const discordUserId = "522955923107348480";

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
        statusBoolElement.style.color = "LimeGreen";
      } else {
        statusBoolElement.innerText = "OFFLINE.";
        statusBoolElement.style.color = "OrangeRed";
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
setInterval(statusLoad, 60*1*1000);
