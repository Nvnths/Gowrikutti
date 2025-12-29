const screens = document.querySelectorAll('.screen');
const heart = document.getElementById('heart');
const music = document.getElementById('music');
let current = 0;

function showScreen(index) {
    screens.forEach(s => s.classList.remove('active'));
    screens[index].classList.add('active');
}

heart.addEventListener('click', () => {
    heart.classList.add('pop');
    music.volume = 0.3;
    music.play();
    setTimeout(() => {
        current = 1;
        showScreen(current);
    }, 500);
});

document.addEventListener('click', e => {
    if (e.target.classList.contains('next-btn')) {
        current++;
        if (current < screens.length) {
            showScreen(current);
        }
    }
});
