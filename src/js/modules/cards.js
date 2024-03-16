import {getResources} from "../services/services";
import VanillaTilt from './vanilla-tilt';

function loadingSkillsCards(rate, count) {
    const ratings = document.querySelectorAll(rate);
    const counters = document.querySelectorAll(count);

    ratings.forEach((rating, index) => {
        const counter = counters[index];
        for (let i = 1; i <= 100; i++) {
            const block = document.createElement('div');
            block.classList.add('block');
            if (i <= +counter.dataset.target) {
                block.classList.add('active');
            }
            rating.appendChild(block);

            block.style.transform = `rotate(${3.6 * i}deg)`;
            block.style.animationDelay = `${i / 60}s`;
        }
    });

    function numberCounter(counter, target) {
        const value = +counter.innerText.replace(/\D/g, '');

        if (value < target) {
            counter.innerHTML = `${Math.ceil(value + 1)}<sup>%</sup>`;
            setTimeout(() => {
                numberCounter(counter, target);
            }, 15);
        }
    }

    counters.forEach((counter) => {
        counter.innerHTML = `0<sup>%</sup>`;
        const target = +counter.dataset.target;

        numberCounter(counter, target);
    });
}

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
    
                if (frontCard) {
                    frontCard.classList.remove('active');
                    backCard.classList.add('active');
                }
            });
        });
    
        backButtons.forEach(btnbk => {
            btnbk.addEventListener('click', function() {
                const backCard = this.closest(cardsBack);
                const frontCard = backCard.previousElementSibling;
    
                if (backCard) {
                    frontCard.classList.add('active');
                    backCard.classList.remove('active');
                }
            });
        });
    }

    class SkillsCards {
        constructor(src, alt, title, descr, target, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.target = target;
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
                <div class="skills__card-front active">
                    <div class="skills__card-front-icon">
                        <h3>
                            <ion-icon name="${this.src}" alt="${this.alt}"></ion-icon>
                            <div class="counter" data-target=${this.target}></div>
                        </h3>
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
        // <img src=${this.src} alt=${this.alt}></img>
    }
    getResources('http://localhost:3000/skills')
    .then(data => {
        data.forEach(({img, altimg, title, descr, target}) => {
            new SkillsCards(img, altimg, title, descr, target, '.skills .skills__wrapper').render();
        });
        flippingCard('.skills__card-front-button', '.skills__card-back-button', '.skills__card-front', '.skills__card-back');
        // loadingSkillsCards('.skills__card-front-icon', '.counter');
    })
    .catch(error => {
        console.error('Ошибка при получении данных:', error);

        new SkillsCards(
            "logo-html5",
            "html5",
            "HTML5",
            "Exactly, it creates the framework for your website or application, and the fifth version will allow me to create a more SEO-optimized structure for your product.",
            "90",
            ".skills .skills__wrapper"
        ).render();

        new SkillsCards(
            "logo-css3",
            "css3",
            "CSS3",
            "This styling language allows me to create any appearance for your website or application. It's only limited by your imagination!",
            "90",
            ".skills .skills__wrapper"
        ).render();

        new SkillsCards(
            "logo-javascript",
            "javascript",
            "Java Script",
            "This programming language allows me to animate anything: sliders, windows, tooltips, tabs, fetching data from servers, and much more.",
            "70",
            ".skills .skills__wrapper"
        ).render();

        new SkillsCards(
            "logo-react",
            "react",
            "React",
            "This library enables the creation of web applications. I can create an incredibly interactive product tailored to your goals.",
            "10",
            ".skills .skills__wrapper"
        ).render();

        new SkillsCards(
            "logo-wordpress",
            "wordpress",
            "WordPress",
            "It's a powerful platform for building interactive web applications and websites of any size. With its help, you can manage the content of your website yourself.",
            "10",
            ".skills .skills__wrapper"
        ).render();

        flippingCard('.skills__card-front-button', '.skills__card-back-button', '.skills__card-front', '.skills__card-back');
        // loadingSkillsCards('.skills__card-front-icon', '.counter');
    });
}

export {loadingSkillsCards};
export {cards};
// export default cards;