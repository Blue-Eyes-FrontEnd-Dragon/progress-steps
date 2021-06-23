'use strict';

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive > circles.length-1 ? currentActive = circles.length : currentActive++;
    
    update();
});

prev.addEventListener('click', () => {
    currentActive < 1 ? currentActive = 1 : currentActive--;

    update();
});

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    console.log(calculatePercentage(actives.length, circles.length));

    progress.style.width = calculatePercentage(actives.length-1, circles.length-1) + '%';

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false; 
        next.disabled = false;
    }

}

function calculatePercentage(a, b) {
    return (a / b) * 100;
}