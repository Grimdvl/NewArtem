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
            btnfr.addEventListener('click', function() {
                const frontCard = this.closest(cardsFront);
                const backCard = frontCard.nextElementSibling;
    
                if (frontCard && backCard) {
                    frontCard.classList.toggle('active');
                    backCard.classList.toggle('active');
                }
            });
        });
    
        backButtons.forEach(btnbk => {
            btnbk.addEventListener('click', function() {
                const backCard = this.closest(cardsBack);
                const frontCard = backCard.previousElementSibling;
    
                if (backCard && frontCard) {
                    backCard.classList.toggle('active');
                    frontCard.classList.toggle('active');
                }
            });
        });
    }

    class SkillsCards {
        constructor(src, alt, title, descr, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
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
                    <button type="button" class="skills__card-front-button">Read more</button>
                </div>
                <div class="skills__card-back">
                    <h3 class="skills__card-back-title">${this.title}</h3>
                    <p class="skills__card-back-description">${this.descr}</p>
                    <button type="button" class="skills__card-back-button">Back</button>
                </div>
            `;
            this.parent.append(element);

            initializeVanillaTilt(`.${this.classes}`);
            initializeBlureEffect(`.${this.classes}`);
        }
    }
    getResources('http://localhost:3000/skills')
    .then(data => {
        data.forEach(({img, altimg, title, descr}) => {
            new SkillsCards(img, altimg, title, descr, '.skills .skills__wrapper').render();
        });
        flippingCard('.skills__card-front-button', '.skills__card-back-button', '.skills__card-front', '.skills__card-back');
    })
    .catch(error => {
        console.error('Ошибка при получении данных:', error);

        new SkillsCards(
            "img/icons/skills/html5.svg",
            "html5",
            "HTML5",
            "Exactly, it creates the framework for your website or application, and the fifth version will allow me to create a more SEO-optimized structure for your product.",
            ".skills .skills__wrapper"
        ).render();

        new SkillsCards(
            "img/icons/skills/css3.svg",
            "css3",
            "CSS3",
            "This styling language allows me to create any appearance for your website or application. It's only limited by your imagination!",
            ".skills .skills__wrapper"
        ).render();

        new SkillsCards(
            "img/icons/skills/js.svg",
            "javascript",
            "Java Script",
            "This programming language allows me to animate anything: sliders, windows, tooltips, tabs, fetching data from servers, and much more.",
            ".skills .skills__wrapper"
        ).render();

        new SkillsCards(
            "img/icons/skills/react.svg",
            "react",
            "React",
            "This library enables the creation of web applications. I can create an incredibly interactive product tailored to your goals.",
            ".skills .skills__wrapper"
        ).render();

        new SkillsCards(
            "img/icons/skills/wordpress.svg",
            "wordpress",
            "WordPress",
            "It's a powerful platform for building interactive web applications and websites of any size. With its help, you can manage the content of your website yourself.",
            ".skills .skills__wrapper"
        ).render();

        flippingCard('.skills__card-front-button', '.skills__card-back-button', '.skills__card-front', '.skills__card-back');
    });
}

export default cards;