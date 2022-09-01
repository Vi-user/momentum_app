// import playList from "./playList.js";

const playList = [
    {
        title:    'Aqua Caelestis',
        src:      './assets/sounds/Aqua Caelestis.mp3',
        duration: ''
    },
    {
        title:    'River Flows In You',
        src:      './assets/sounds/River Flows In You.mp3',
        duration: ''
    },
    {
        title:    'Ennio Morricone',
        src:      './assets/sounds/Ennio Morricone.mp3',
        duration: ''
    },
    {
        title:    'Summer Wind',
        src:      './assets/sounds/Summer Wind.mp3',
        duration: ''
    }
]
console.log('player')
console.log(playList)
const audio = new Audio();

let isPlay = false;
let trackNum = 0;
const prevTrack = document.querySelector('.play-prev')
const nextTrack = document.querySelector('.play-next')
const playTrack = document.querySelector('.play')
const playListContainer = document.querySelector('.play-list')

playTrack.addEventListener('click', () => {
    // isPlay = (isPlay == false);
    playTrack.classList.toggle('pause');
    if (!isPlay) {
        playAudio();
        isPlay = true;
    } else {
        stopAudio();
        isPlay = false;
    }
})

const playAudio = () => {
    audio.src = playList[trackNum].src;
    // playList[trackNum].classList.add('item-active')
    console.log(document.querySelector('.play-list').getElementsByTagName('li')[trackNum].classList.add('item-active'))
    console.log('playAudio', audio)
    audio.play();
}

const stopAudio = () => {
    // console.log('stopAudio')
    audio.pause();
}


playList.forEach(el => {
    const trackEl = document.createElement('li');
    trackEl.classList.add('play-item');
    trackEl.textContent = el.title;
    playListContainer.append(trackEl)
})

nextTrack.addEventListener('click', () => {
    trackNum = (trackNum < playList.length-1) ? +1 : 0;
    // if (trackNum < playList.length-1) {
    //     trackNum++;
    // } else {
    //     trackNum = 0;
    // }
    playAudio()
})

prevTrack.addEventListener('click', () => {
    trackNum = (trackNum != 0) ? -1 : playList.length-1;
    // if (trackNum != 0) {
    //     trackNum--;
    // } else {
    //     trackNum = playList.length-1;
    // }
    playAudio()
})