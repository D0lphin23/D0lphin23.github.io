function randomText() {
    const text = "!@#$%^&*{}[]><?/";
    return text[Math.floor(Math.random() * text.length)];
}

function rain() {
    const cloud = document.querySelector('.cloud');
    const cloudRect = cloud.getBoundingClientRect(); // Получаем размеры и положение облака

    const drop = document.createElement('div');
    drop.classList.add('drop');
    document.body.appendChild(drop);

    // Центр облака
    const cloudCenter = cloudRect.left + cloudRect.width / 2;

    // Расширяем радиус падения знаков. Мы будем расширять радиус на 180px, а не 160px, как у облака.
    const left = cloudCenter + Math.random() * 300 - 150; // Расширяем на 180px влево и вправо от центра

    const size = Math.random() * 1.5;
    const duration = 1 + Math.random() * 0.5;

    drop.innerText = randomText();
    drop.style.left = left + 'px';
    drop.style.fontSize = 0.5 + size + 'em';
    drop.style.animationDuration = duration + 's';

    // Капля "лежит" на полу (на 80% экрана), затем удаляется
    setTimeout(() => {
        drop.classList.add('laying');
        setTimeout(() => {
            drop.remove();
        }, 5000); // Лежит 5 секунд
    }, duration * 1000);
}

// Запуск дождя
setInterval(rain, 40);

// Функция плавной смены цвета
function setRandomColor() {
    // Массив ярких "кислотных" цветов
    const brightColors = [
        "#FF0000", // Ярко-красный
        "#00FF00", // Кислотно-зеленый
        "#00FFFF", // Бирюзовый
        "#FF00FF", // Кислотно-фиолетовый
        "#FFFF00", // Кислотно-жёлтый
        "#00ff00",
    ];

    // Выбираем случайный цвет
    const randomColor = brightColors[Math.floor(Math.random() * brightColors.length)];
    document.documentElement.style.setProperty('--clr', randomColor);

    // Применяем цвет ко всем каплям, облаку и тексту
    const drops = document.querySelectorAll('.drop');
    drops.forEach(drop => {
        drop.style.color = randomColor; // Меняем цвет падающих капель
    });
}

// Меняем цвет каждые 3 секунды
setInterval(setRandomColor, 3000);
