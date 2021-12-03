# Youtube-Dislikes-Extension-For-Chrome
A simple chrome extension that shows the number of dislikes in a video.

## work in progress.....
Haven't published to chrome web store. Will do soon.....Probably.
## To use this extension :

go to https://developers.google.com/youtube/v3/getting-started or directly go to https://console.cloud.google.com/apis/ and get an API key. and replace the api key in the link in the fetch req. in Content.js

No download or clone this repo and extract the zip file. 

After you get the API key, open chrome and go to chrome://extensions and on the top right turn developer mode on. 

Now click on Load Unpacked on the top left and selct the folder and load it.

Now go to youtube click on any video. You may have to refresh the page every time you click on a  video to get the dislike count (I'm trying to fix this)

## current bug:

The extension works fine but to get a dislike on a video, you have to reload the page once so the JS code gets executed and the api call has been made. Because youtube use a modern JS framework, it changes the DOM without relaoding. So I can't figure out how to listen to these changes and execute my script again when a change has been made. If anyone can fix this, it will be really appreciated. :)

## Note :

This is my first ever chrome extension, I have ever built. So there can be bugs. But I'm trying to fix the bugs.

