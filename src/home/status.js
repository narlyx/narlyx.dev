const userId = "522955923107348480";
function loadStatus() {
  fetch("https://api.lanyard.rest/v1/users/" + userId)
    .then((response) => response.json())
    .then((data) => {
      // Fetching data
      var status = data.data.discord_status;
      var pfpUrl =
        "https://cdn.discordapp.com/avatars/" +
        userId +
        "/" +
        data.data.discord_user.avatar;
      var activities = data.data.activities;

      // Updating profile picture
      var profilePicture = document.getElementById("pfp");
      profilePicture.src = pfpUrl;

      // Setting status text
      var statusBool = document.getElementById("status-bool");
      var offlineText = document.getElementById("offline-text");
      if (status != "offline") {
        statusBool.innerText = "ONLINE!";
        statusBool.style.color = "LimeGreen";
        offlineText.style.display = "none";
      } else {
        statusBool.innerText = "OFFLINE.";
        statusBool.style.color = "OrangeRed";
        offlineText.style.display = "";
      }

      // Setting activity text
      var statusActivity = document.getElementById("status-activity");
      var statusText = document.getElementById("status-text");
      statusActivity.style.display = "none";
      if (activities.length > 0) {
        for (i in activities) {
          // Current activity
          var activity = activities[i];

          // Action
          if (activity.type == 0) {
            statusActivity.style.display = "";
            statusActivity.innerText = "In " + activity.name;
          }

          // Status
          if (activity.type == 4) {
            statusText.innerText = '"' + activity.state + '" 💬';
          } else {
            statusText.innerText = "Currently thoughtless...";
          }
        }
      }
    });
}
loadStatus();
