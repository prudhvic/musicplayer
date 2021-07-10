let audio = document.getElementById("audio");
let play = document.getElementById("play");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let h1 = document.getElementById("music");
let progress = document.querySelector(".progress")
let bar=document.querySelector(".bar")
let songs = ["music1", "music2", "music3", "music4", "music5",'music6'];
let index = 0;
let isplay = true;
getmusic(songs[index]);
function getmusic(music) {
  audio.src = `/Music/${music}.mp3`;
  h1.innerText = songs[index];
}
function playmusic() {
  play.querySelector("i.fas").classList.remove('fa-play-circle')
  play.querySelector("i.fas").classList.add('fa-pause-circle')
  audio.play();
  isplay = false;
}
function pausemusic() {
  play.querySelector("i.fas").classList.add('fa-play-circle')
  play.querySelector("i.fas").classList.remove('fa-pause-circle')
  audio.pause();
  isplay = true;
}

function nextsong() {
  
  index++;
  if (index>songs.length-1) {
    index = 0
  }
  getmusic(songs[index]);
  playmusic();
}
function prevsong() {
  index--;
  if (index<0) {
    index = songs.length - 1;
  }
  getmusic(songs[index]);
  playmusic();
 
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  bar.style.width = `${progressPercent}%`;
}
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}
play.addEventListener("click", () => {
  if (isplay) {
    playmusic();
  } else {
    pausemusic();
  }
});
next.addEventListener("click", nextsong);
prev.addEventListener("click", prevsong)
audio.addEventListener("timeupdate", updateProgress)
progress.addEventListener('click', setProgress);
audio.addEventListener('ended',nextsong);