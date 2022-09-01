window.onload = function () {
    console.log('work check')
    getCurrentTime();
    setBodyBackground();
}
let getRandomNum = Math.round(Math.random()*(20-1)+1);

const nextBtn = document.querySelector('.slide-next')
const prevBtn = document.querySelector('.slide-prev')


const getCurrentTime = () => {
    const time = document.querySelector('.time');
    const date = new Date();
    time.textContent = date.toLocaleTimeString();
    getCurrentDate(); //to change date after midnight
    makeGreeting();
    setBodyBackground();
    setTimeout(getCurrentTime, 1000)
}

const getCurrentDate = () => {
    const dateContainer = document.querySelector('.date');
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    dateContainer.textContent = date.toLocaleDateString('en-EN', options);
}

const makeGreeting = () => {
    const greeting = document.querySelector('.greeting');
    greeting.textContent =`Good ${getTimeOfDay()},`
}

const getTimeOfDay = () => {
    // const time = document.querySelector('.time');
    // return ['Night', 'Morning', 'Day', 'Evening'].at(Math.floor(time.textContent.split(':')[0]/6))
    const date = new Date();
    const hours = date.getHours();
    return ['Night', 'Morning', 'Afternoon', 'Evening'].at(Math.floor(hours/6))
}

const setLocalStorage = () => {
    let userName = document.querySelector('.name')
    localStorage.setItem('userName', userName.value);
}
window.addEventListener('beforeunload', setLocalStorage)

const getLocalStorage = () => {
    let userName = document.querySelector('.name')
    if(localStorage.getItem('userName')) {
        userName.value = localStorage.getItem('userName');
    }
}
window.addEventListener('load', getLocalStorage)

const setBodyBackground = () => {

    const timeOfDay = getTimeOfDay().toLowerCase();
    const bgNum = getRandomNum.toString().padStart(2, 0);
    const body = document.querySelector('body');
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/Vi-user/momentum_bg/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`;
    }
    // body.style.backgroundImage = `url('https://raw.githubusercontent.com/Vi-user/momentum_bg/assets/images/${timeOfDay}/${bgNum}.jpg')`;
}

// const getRandomNum = () => {
//     return Math.round(Math.random()*(20-1)+1);
// }

const getSlideNext = () => {
    (getRandomNum < 20) ? getRandomNum++ : getRandomNum = 1;
    setBodyBackground();
}

const getSlidePrev = () => {
    (getRandomNum > 1) ? getRandomNum-- : getRandomNum = 20;
    setBodyBackground();
}

nextBtn.addEventListener('click', getSlideNext)
prevBtn.addEventListener('click', getSlidePrev)



