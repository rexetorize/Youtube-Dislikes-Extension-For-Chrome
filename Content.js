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

    document.getElementsByTagName("yt-formatted-string")[10].innerText =  convertToInternationalCurrencySystem (dc); 
}

const setDislikes = () => {

    if(window.location.href.includes("youtube")){

    const params = new URLSearchParams(window.location.search);
        const videoId = params.get('v');

        fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=AIzaSyB4XcPRR5oQWj5vxvi1PDlvJMek3_AS2A0`)
        .then(response => response.json())
        .then(data => 
            {
                DISLIKE_COUNT =data.items[0].statistics.dislikeCount;
                getDislikes(DISLIKE_COUNT);
            });
    }
}

setDislikes();

window.addEventListener('yt-page-data-updated', setDislikes);
