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
