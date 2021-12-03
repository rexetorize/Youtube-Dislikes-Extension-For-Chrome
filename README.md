# Youtube-Dislikes-Extension-For-Chrome
A simple chrome extension that shows the number of dislikes in a video.

### work in progress.....

##To use this extension :
go to https://developers.google.com/youtube/v3/getting-started and get an API key. and replace the api key in the link in the fetch req. in Content.js

##current bug:
The extension works fine but to get a dislike on a video, you have to reload the page once so the JS code gets executed and the api call has been made. Because youtube use a modern JS framework, it changes the DOM without relaoding. So I can't figure out how to listen to these changes and execute my script again when a change has been made. If anyone can fix this, it will be really appreciated. :)

##Note :
This is my first ever chrome extension, I have ever built. So there can be bugs. But I'm trying to fix the bugs.

