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
