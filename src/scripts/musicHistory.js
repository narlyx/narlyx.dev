function timeAgo(uts) {
    const now = Math.floor(Date.now() / 1000);
    const secondsAgo = now - uts;
    const intervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'week', seconds: 604800 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 },
        { label: 'second', seconds: 1 }
      ];
    for (const interval of intervals) {
        const count = Math.floor(secondsAgo / interval.seconds);
        if (count >= 1) {
            return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
            }
      }
    return 'just now';
}


// Loading music status
function musicLoad() {
  fetch("https://us-central1-narlyxdev.cloudfunctions.net/nowPlaying")
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
      
      if (data["playing"]) {
        urlElement.innerText = "Currently listening";
        urlElement.style.color = "chartreuse";
      } else {
        urlElement.innerText = timeAgo(data["uts"]);
        urlElement.style.color = "var(--base-color)";
      }
    });
}
musicLoad();
setInterval(musicLoad, 60*2*1000); // Reload every 2 minutes
