function loadChangelog() {
  fetch("https://api.github.com/repos/narlyx/narlyx.dev/commits")
    .then((response) => response.json())
    .then((data) => {
      // Fetching target container
      var changelogContainer = document.getElementById("changelog-container");

      // Iterating commit history
      for (i in data) {
        // Parsing data
        var commitData = data[i];
        var splitMessage = commitData.commit.message.split(/\n(.*)/s);

        // New div
        var newDiv = document.createElement("div");

        // Message
        var newMessage = document.createElement("a");
        newMessage.href = commitData.html_url;
        newMessage.innerText = splitMessage[0];

        // Date
        var newDate = document.createElement("span");
        newDate.className = "inverted-link";
        newDate.innerText = " - " + commitData.commit.author.date + " ";
        newMessage.appendChild(newDate);

        // Description
        if (splitMessage[1] != undefined) {
          var newDescription = document.createElement("span");
          newDescription.style.color = "var(--secondary-color)";
          newDescription.innerText = "\n" + splitMessage[1];
          newMessage.appendChild(newDescription);
        }

        // Adding to new div
        newDiv.appendChild(newMessage);

        // Adding to container
        changelogContainer.appendChild(newDiv);
      }
    });
}
loadChangelog();
