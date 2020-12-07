'use strict';

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
}

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

let timer = null;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const chooseColorChange = () => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
}

const beginColorChange = () => {
    timer = setInterval(chooseColorChange, 1000);
    refs.startBtn.removeEventListener('click', beginColorChange);
    refs.stopBtn.addEventListener('click', stopColorChange);
}

const stopColorChange = () => {
    clearInterval(timer);
    refs.stopBtn.removeEventListener('click', stopColorChange);
    refs.startBtn.addEventListener('click', beginColorChange);
}

refs.startBtn.addEventListener('click', beginColorChange);