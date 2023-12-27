let play=document.getElementById('play');
let audioElement =new Audio('song1.mp3');

play.addEventListener('click',()=>{
if (audioElement.paused || audioElement.currentTime<=0) {
    audioElement.play();
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
} else {
    audioElement.pause()
    play.classList.add('fa-play');
    play.classList.remove('fa-pause');
}
}
)


