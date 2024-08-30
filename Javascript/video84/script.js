let playPauseButton = document.querySelector(".playButton");
let isPlaying = false;
let songs=[];
let audio=new Audio("");
let songName;
playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
        playPauseButton.src = "Assets/SVG/playSong.svg";
        playPauseButton.alt = "Play";
        isPlaying = false;
        // Add your code to pause the song here
        audio.pause();
    } else {
        playPauseButton.src = "Assets/SVG/pauseSong.svg";
        playPauseButton.alt = "Pause";
        isPlaying = true;
        // Add your code to play the song here
        audio.play();
    }
});
function cleanName(filename) {
let name = filename.slice(0, filename.indexOf(' (') !== -1 ? filename.indexOf(' (') : undefined);
if (!name || name.trim() === '') {
    name = filename.split(' (')[0];
}
return name.split("-")[0].trim();
}
function cleanArtist(filename) {
    // Remove the file extension
    const nameWithoutExtension = filename.replace(/\.[^/.]+$/, "");

    // Check if the filename contains a hyphen
    if (nameWithoutExtension.includes(" - ")) {
        // Split by ' - ' and return the second part (after the hyphen) excluding any parentheses
        return nameWithoutExtension.split(" - ")[1].split("(")[0].trim();
    } else {
        // Remove any content in parentheses and trim whitespace
        const nameWithoutParentheses = nameWithoutExtension.replace(/\s*\(.*\)$/, "").trim();

        // Split by spaces and return the last two words before the parentheses
        const parts = nameWithoutParentheses.split(" ");
        const lastTwoWords = parts.slice(-2).join(" ").trim();
        
        // Handle cases where there might be only one word before parentheses
        return lastTwoWords;
    }
}
async function getSongs() {
    let a = await fetch("http://127.0.0.1:5500/Assets/songs");
    let response = await a.text();
    let div= document.createElement("div");
    div.innerHTML = response;
    let songs = div.getElementsByTagName("a");
    songs=[...songs]
    //getting song's names in name array
    let names = songs.map((song)=> song.title);
    names = names.filter(name=>name.endsWith(".mp3"));
    // Extract the href attribute of each <a> element and filter out the ones that don't end with ".mp3"
    songs = songs.filter(song => song.href.endsWith(".mp3"));
    songs = songs.map(song => song.href);
    let combined = names.map((name, index) => ({
        name: name,
        url: songs[index]
    }));
    return combined;
}
function converTime(time) {
    let minutes=Math.floor(time/60);
        let seconds=Math.floor(time%60);
        return `${minutes}:${seconds}`;
}
(async function main() {
    songs = await getSongs();
    audio.src=songs[0].url;
    let songName=document.querySelector(".songName");
    songName.innerText=songs[0].name;
    let songLength = document.querySelector(".totalTime");
    audio.addEventListener("loadeddata",()=>{
        songLength.innerText=converTime(audio.duration);   
    })

    let songList=document.querySelector(".songList");
for(let song of songs){
    let li=document.createElement("li");
    li.innerHTML=`<img src="Assets/SVG/music.svg" alt="music">
                            <div class="details">
                                <div class="name">${cleanName(song.name)}</div>
                                <div class="artist">${cleanArtist(song.name)}</div>
                            </div>
                            <img class="play" src="Assets/SVG/play.svg" alt="">`
    songList.appendChild(li);
    li.addEventListener("click",()=>{
        audio.src=song.url;
        audio.play();
        playPauseButton.src = "Assets/SVG/pauseSong.svg";
        playPauseButton.alt = "Pause";
        isPlaying = true;
        songName=document.querySelector(".songName");
        songName.innerText=song.name;
    })
}
//Attaching event listner to playNext and playPrevious buttons
let playNext=document.querySelector(".nextSong");
let playPrevious=document.querySelector(".prevSong");
playNext.addEventListener("click",()=>{
    let currentSource=audio.src;
    let currentIndex=songs.findIndex(song=>song.url===currentSource);
    if(currentIndex===songs.length-1){
        currentIndex=0;
    }else{
        currentIndex++;
    }
    console.log(currentIndex);
    audio.src=songs[currentIndex].url;
    audio.play()
    playPauseButton.src = "Assets/SVG/pauseSong.svg";
    playPauseButton.alt = "Pause";
    isPlaying=true;
    songName.innerText=songs[currentIndex].name;
})
playPrevious.addEventListener("click",()=>{
    let currentSource=audio.src;
    let currentIndex=songs.findIndex(song=>song.url===currentSource);
    if(currentIndex===0){
        currentIndex=songs.length-1;
    }else{
        currentIndex--;
    }
    audio.src=songs[currentIndex].url;
    audio.play()
    playPauseButton.src = "Assets/SVG/pauseSong.svg";
    playPauseButton.alt = "Pause";
    isPlaying=true;
    songName.innerText=songs[currentIndex].name;
})
})()




