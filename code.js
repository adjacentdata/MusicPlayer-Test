const music = document.querySelector( 'audio' );
const play = document.getElementById( 'play' );
const imgElement = document.querySelector("img");
let playOn = false;

const playMusic = ()=>{
    playOn = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
    imgElement.classList.add('rotate');
};
const pauseMusic = () =>{
    playOn = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
    imgElement.classList.remove('rotate');
};

play.addEventListener('click', ()=>{
    if(playOn){
        pauseMusic()
    }else{
        playMusic()
    }
});
