//DEVELOPED BY REXETORIZE
let DISLIKE_COUNT = 0;

function convertToInternationalCurrencySystem (labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(labelValue));

}




const getDislikes = (dc) => {
    let val;

    for(let i = 1; i <= 99; i++){
        if(document.getElementsByTagName("yt-formatted-string")[i]?.innerText === "DISLIKE" || 
        document.getElementsByTagName("yt-formatted-string")[i]?.innerText === "Dislike"){
            console.log("true : " + i)
            val = i;
            break;
        }
        else{
            console.log("false");
        }
    }



    document.getElementsByTagName("yt-formatted-string")[val].innerText =  convertToInternationalCurrencySystem (dc); 
}





window.addEventListener("load", function() {
    const params = new URLSearchParams(window.location.search);
    const videoId = params.get('v');

    fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=<your API key>`)
    .then(response => response.json())
    .then(data => 
        {
            DISLIKE_COUNT =data.items[0].statistics.dislikeCount;
            getDislikes(DISLIKE_COUNT);
        });

    

 });

