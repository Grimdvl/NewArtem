import {getResources} from "../services/services";
import VanillaTilt from './vanilla-tilt';

function cards() {
    function initializeVanillaTilt(cards) {
        VanillaTilt.init(document.querySelectorAll(cards), {
            max: 10,
            speed: 400,
            // glare: true,
            // "max-glare": 1
        });
    }

    function initializeBlureEffect(cards) {
        const card = document.querySelectorAll(cards);
    
        card.forEach(item => {
            item.onmousemove = function(e) {
                const rect = item.getBoundingClientRect();
                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;
    
                item.style.setProperty('--x', x + 'px');
                item.style.setProperty('--y', y + 'px');
            }
        });
    }

    function flippingCard(buttonsFront, buttonsBack, cardsFront, cardsBack) {
        const frontButtons = document.querySelectorAll(buttonsFront);
        const backButtons = document.querySelectorAll(buttonsBack);
    
        frontButtons.forEach(btnfr => {
            btnfr.addEventListener('click', () => {
                const frontCard = btnfr.closest(cardsFront);
                const backCard = frontCard.nextElementSibling;
    
                if (frontCard && backCard) {
                    frontCard.classList.toggle('active');
                    backCard.classList.toggle('active');
                    console.log('active');
                }
            });
        });
    
        backButtons.forEach(btnbk => {
            btnbk.addEventListener('click', () => {
                const backCard = btnbk.closest(cardsBack);
                const frontCard = backCard.previousElementSibling;
    
                if (backCard && frontCard) {
                    backCard.classList.toggle('active');
                    frontCard.classList.toggle('active');
                    console.log('active');
                }
            });
        });
    }
    

    class SkillsCards {
        constructor(src, alt, title, descr, button, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.button = button;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }
    
        render() {
            const element = document.createElement('div');
    
            if (this.classes.length === 0) {
                this.classes = "skills__card";
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
                <div class="skills__card-front">
                    <div class="skills__card-front-icon">
                        <img src=${this.src} alt=${this.alt}>
                    </div>
                    <button type="button" class="skills__card-front-button">${this.button}</button>
                </div>
                <div class="skills__card-back">
                    <h3 class="skills__card-back-title">${this.title}</h3>
                    <p class="skills__card-back-description">${this.descr}</p>
                    <button type="button" class="skills__card-back-button">Back</button>
                </div>
            `;
            this.parent.append(element);

            flippingCard('.skills__card-front-button', '.skills__card-back-button', '.skills__card-front', '.skills__card-back');
            initializeVanillaTilt(`.${this.classes}`);
            initializeBlureEffect(`.${this.classes}`);
        }
    }
    getResources('http://localhost:3000/skills')
    .then(data => {
        data.forEach(({img, altimg, title, descr, button}) => {
            new SkillsCards(img, altimg, title, descr, button, '.skills .skills__wrapper').render();
        });
    })
    .catch(error => {
        console.error('Ошибка при получении данных:', error);

        new SkillsCards(
            "img/icons/skills/html5.svg",
            "html5",
            "HTML5",
            "Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта.",
            'More',
            ".skills .skills__wrapper"
        ).render();

        new SkillsCards(
            "img/icons/skills/css3.svg",
            "css3",
            "CSS3",
            "Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!",
            'More',
            ".skills .skills__wrapper"
        ).render();

        new SkillsCards(
            "img/icons/skills/js.svg",
            "javascript",
            "Java Script",
            "Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое.",
            'More',
            ".skills .skills__wrapper"
        ).render();

        new SkillsCards(
            "img/icons/skills/react.svg",
            "react",
            "React",
            "Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт именно под ваши цели.",
            'More',
            ".skills .skills__wrapper"
        ).render();

        new SkillsCards(
            "img/icons/skills/wordpress.svg",
            "wordpress",
            "WordPress",
            "Это мощная платформа для создания интерактивных веб-приложений любого размера.",
            'More',
            ".skills .skills__wrapper"
        ).render();
    });
}

export default cards;