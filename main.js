function randomText() {
    const text = "!@#$%^&*{}[]><?/";
    return text[Math.floor(Math.random() * text.length)];
}

function rain() {
    const cloud = document.querySelector('.cloud');
    const cloudRect = cloud.getBoundingClientRect();

    const drop = document.createElement('div');
    drop.classList.add('drop');
    document.body.appendChild(drop);

    // Центр облака
    const cloudCenter = cloudRect.left + cloudRect.width / 2;

    // Расширяем радиус падения знаков.
    const left = cloudCenter + Math.random() * 300 - 150;

    const size = Math.random() * 1.5;
    const duration = 1 + Math.random() * 0.5;

    drop.innerText = randomText();
    drop.style.left = left + 'px';
    drop.style.fontSize = 0.5 + size + 'em';
    drop.style.animationDuration = duration + 's';

    // Нижняя точка падения
    setTimeout(() => {
        drop.classList.add('laying');
        setTimeout(() => {
            drop.remove();
        }, 5000);
    }, duration * 1000);
}

// Запуск дождя
setInterval(rain, 40);

// Функция плавной смены цвета
function setRandomColor() {
    const brightColors = [
        "#FF0000",
        "#00FF00",
        "#00FFFF",
        "#FF00FF",
        "#FFFF00",
        "#00ff00",
    ];

    // Выбор случайного цвета
    const randomColor = brightColors[Math.floor(Math.random() * brightColors.length)];
    document.documentElement.style.setProperty('--clr', randomColor);

    // Применение цвета ко всем элементам
    const drops = document.querySelectorAll('.drop');
    drops.forEach(drop => {
        drop.style.color = randomColor;
    });
}

// Меняем цвет каждые 3 секунды
setInterval(setRandomColor, 3000);
