// Import
import * as functions from 'firebase-functions/v1';
import axios from "axios";
import cors from "cors";

// Returns API data from LASTFM
export const nowPlaying = functions
  .runWith({ secrets: ["LASTFM_TOKEN"]})
  .https.onRequest((request,response) => {
    try {
      cors({ origin: true })(request, response, async () => {
        // Retriving token
        const token = process.env.LASTFM_TOKEN;

        // Calling API
        const lastfmResponse = await axios.get("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=narlyx&api_key="+token+"&format=json");
        const lastfmData = lastfmResponse.data;
      
        // Parsing data
        const songData = lastfmData["recenttracks"]["track"]["0"];
        const songName = songData["name"];
        const songAlbum = songData["album"]["#text"];
        const songArtist = songData["artist"]["#text"];
        const songUrl = songData["url"];
        const songImageUrl = songData["image"]["3"]["#text"];
        const songPlaying = songData["@attr"]!=undefined?true:false;
        const timePlayed = songData["@attr"]==undefined?songData["date"]["uts"]:undefined;

        const returnData = {"name":songName,"album":songAlbum,"artist":songArtist,"image":songImageUrl,"url":songUrl,"playing":songPlaying,"uts":timePlayed}

        // Returning
        response.send(returnData); 
      });
    } catch (error) {
      // Super horrible error catching
      console.error("Error: ", error);
      response.status(500).send("Error");
    }
  });
