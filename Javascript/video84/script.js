let playPauseButton = document.querySelector(".playButton");
let isPlaying = false;
let songs=[];
let audio=new Audio("");
let songName;
audio.volume=0.5
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
    let a = await fetch("http://127.0.0.1:5500/Assets/songs/");
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
function convertTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;

    return `${minutes}:${seconds}`;   
}
(async function main() {
    songs = await getSongs();
    audio.src=songs[0].url;
    let songName=document.querySelector(".songName");
    songName.innerText=songs[0].name;
    let songLength = document.querySelector(".duration");
    audio.addEventListener("loadeddata",()=>{
        songLength.innerText=`${convertTime(audio.currentTime)}/${convertTime(audio.duration)}`;   
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
audio.addEventListener("timeupdate",()=>{
    let songLength = document.querySelector(".duration");
    songLength.innerText=`${convertTime(audio.currentTime)}/${convertTime(audio.duration)}`;
    let progressBar=document.querySelector(".circle");
    let percent=(audio.currentTime/audio.duration)*100;
    progressBar.style.left=`${percent}%`;
    let barHolder=document.querySelector(".seekBar");
    barHolder.style.background = `linear-gradient(to right, #1fdf64 ${percent+1}%, white ${percent}%)`;
    if(audio.currentTime===audio.duration){
        playNext.click();
    }
})
let barHolder=document.querySelector(".seekBar");
barHolder.addEventListener("click",(e)=>{
    let percent=(e.offsetX/e.target.offsetWidth)*100;
    let progressBar=document.querySelector(".circle");
    progressBar.style.left=`${percent}%`;
    barHolder.style.background = `linear-gradient(to right, #1fdf64 ${percent+1}%, white ${percent}%)`;
    audio.currentTime=(audio.duration*percent)/100;
})
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        console.log("Right arrow key was pressed!");
        audio.currentTime = Math.min(audio.currentTime + 5, audio.duration);
        updateProgressBar();
    }
    if (event.key === "ArrowLeft") {
        console.log("Left arrow key was pressed!");
        audio.currentTime = Math.max(audio.currentTime - 5, 0);
        updateProgressBar();
    }
    if (event.key==='d') {
        playNext.click();
    }
    if (event.key==='a') {
        playPrevious.click();
    }
    if (event.key===' ') {
        playPauseButton.click();
    } 
});
function updateProgressBar() {
    let percent = (audio.currentTime / audio.duration) * 100;
    let progressBar = document.querySelector(".circle");
    let barHolder = document.querySelector(".seekBar");
    progressBar.style.left = `${percent}%`;
    barHolder.style.background = `linear-gradient(to right, #1fdf64 ${percent+1}%, white ${percent}%)`;
}
let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", (event) => {
    let left = document.querySelector(".left");
        left.classList.toggle('open');
        hamburger.classList.toggle('active');
        hamburger.classList.toggle('rotated');
        event.stopImmediatePropagation()
});
let right=document.querySelector(".right");
right.addEventListener("click",()=>{
    let left = document.querySelector(".left");
    if (left.classList.contains("open")) {
        left.classList.toggle('open');
        hamburger.classList.toggle('active');
        hamburger.classList.toggle('rotated');
    }
})

// Ensure these elements are correctly selected
const volumeSlider = document.querySelector(".volume");
const volumeLogo = document.querySelector(".volumeLogo");

// Function to update the slider background
function updateSliderBackground(slider) {
    const value = (slider.value - slider.min) / (slider.max - slider.min);
    slider.style.background = `linear-gradient(to right, #1fdf64 ${value * 100}%, #ddd ${value * 100}%)`;
}

// Event listener to handle slider input
volumeSlider.addEventListener('input', (event) => {
    const slider = event.target;
    const value = parseFloat((slider.value - slider.min) / (slider.max - slider.min));

    if (isNaN(value) || value < 0 || value > 1) {
        console.error("Invalid volume value:", value);
        return;
    }

    audio.volume = value; // Set audio volume
    updateSliderBackground(slider); // Update slider gradient

    // Update volumeLogo based on volume
    if (value === 0) {
        volumeLogo.src = "Assets/SVG/novolume.svg";
        volumeLogo.alt = "novolumeLogo";
    } else {
        volumeLogo.src = "Assets/SVG/volume.svg";
        volumeLogo.alt = "volumeLogo";
    }
});

// Event listener to toggle volume using volumeLogo
volumeLogo.addEventListener("click", () => {
    if (volumeLogo.alt === "volumeLogo") {
        volumeLogo.src = "Assets/SVG/novolume.svg";
        volumeLogo.alt = "novolumeLogo";
        audio.volume = 0;
        volumeSlider.value = 0; // Update slider value
    } else {
        volumeLogo.src = "Assets/SVG/volume.svg";
        volumeLogo.alt = "volumeLogo";
        audio.volume = 0.5;
        volumeSlider.value = 50; // Update slider value
    }
    updateSliderBackground(volumeSlider); // Update slider gradient after click
});

})();




