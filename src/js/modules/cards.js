import {getResources} from "../services/services";
import VanillaTilt from './vanilla-tilt';

let isDesktop = window.innerWidth > 991;

function loadingSkillsCard(block) {
    const circle = block.querySelector(".progress-ring__circle");
    const text = block.querySelector(".progress-text");
    const target = +text.dataset.target;
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    let currentValue = 0;

    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
    text.innerHTML = `0<sup>%</sup>`;

    const interval = setInterval(() => {
        currentValue++;
        const offset = circumference - (currentValue / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        text.innerHTML = `${currentValue}<sup>%</sup>`;

        if (currentValue >= target) {
            clearInterval(interval);
        }
    }, 20);
}

function resetSkillsCard(block) {
    const circle = block.querySelector(".progress-ring__circle");
    const text = block.querySelector(".progress-text");
    const radius = 60;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDashoffset = `${circumference}`;
    text.innerHTML = `0<sup>%</sup>`;
}

function watchAOSAnimation() {
    const cards = document.querySelectorAll(".skills__wrapper-card");

    const hasAnimated = new WeakSet();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const card = entry.target;

            if (!entry.isIntersecting || hasAnimated.has(card)) return;

            const waitForClass = (el, className, timeout = 500) => {
                return new Promise(resolve => {
                    if (el.classList.contains(className)) return resolve(true);

                    const observer = new MutationObserver(() => {
                        if (el.classList.contains(className)) {
                            observer.disconnect();
                            resolve(true);
                        }
                    });

                    observer.observe(el, { attributes: true, attributeFilter: ['class'] });

                    setTimeout(() => {
                        observer.disconnect();
                        resolve(false);
                    }, timeout);
                });
            };

            waitForClass(card, 'aos-animate', 500).then(found => {
                if (found) {
                    setTimeout(() => {
                        loadingSkillsCard(card);
                        hasAnimated.add(card);
                    }, 500);
                }
            });
        });
    }, {
        threshold: 0.5
    });

    cards.forEach(card => observer.observe(card));

    const mutationObserver = new MutationObserver(() => {
        document.querySelectorAll(".skills__wrapper-card").forEach(card => {
            if (!card.classList.contains('aos-animate')) {
                resetSkillsCard(card);
                hasAnimated.delete(card);
            }
        });
    });

    mutationObserver.observe(document.body, {
        attributes: true,
        subtree: true,
        attributeFilter: ['class']
    });
}


function cards() {
    const initializeVanillaTilt = (selector) => {
        const elements = document.querySelectorAll(selector);
    
        elements.forEach(el => {
            const isTilted = el.hasAttribute("data-tilt-initialized");
    
            if (isDesktop) {
                if (!isTilted) {
                    VanillaTilt.init(el, {
                        max: 10,
                        speed: 400,
                        // glare: true,
                        // "max-glare": 1
                    });
                    el.setAttribute("data-tilt-initialized", "true");
                }
            } else {
                if (isTilted && el.vanillaTilt) {
                    el.vanillaTilt.destroy();
                    el.removeAttribute("data-tilt-initialized");
                }
            }
        });
    };
    

    const initializeBlureEffect = (selector) => {
        const elements = document.querySelectorAll(selector);
    
        elements.forEach(item => {
            item.onmousemove = (e) => {
                if (!isDesktop) return;
                const rect = item.getBoundingClientRect();
                item.style.setProperty('--x', `${e.clientX - rect.left}px`);
                item.style.setProperty('--y', `${e.clientY - rect.top}px`);
            };
        });
    };

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

    function createSkillsCard({ src, alt, title, descr, target, parentSelector, classes = [] }) {
        const parent = document.querySelector(parentSelector);
        const element = document.createElement('div');
    
        if (classes.length === 0) {
            classes = ["skills__wrapper-card"];
        }
    
        element.classList.add(...classes);
    
        element.setAttribute("data-aos", "fade-up");
        element.setAttribute("data-aos-duration", "1000");
    
        element.innerHTML = `
            <div class="skills__card">
                <div class="skills__card-front active">
                    <div class="skills__card-front-icon">
                        <ion-icon name="${src}" alt="${alt}"></ion-icon>
                        <svg class="progress-ring">
                            <circle class="progress-ring__background" cx="75" cy="75" r="60" />
                            <circle class="progress-ring__circle" cx="75" cy="75" r="60" />
                        </svg>
                        <div class="progress-text" data-target="${target}">0<sup>%</sup></div>
                    </div>
                    <button type="button" class="skills__card-front-button">Read more</button>
                </div>
                <div class="skills__card-back">
                    <h3 class="skills__card-back-title">${title}</h3>
                    <p class="skills__card-back-description">${descr}</p>
                    <button type="button" class="skills__card-back-button">Back</button>
                </div>
            </div>
        `;
    
        parent.appendChild(element);
    }
    
    
    function renderCards(data) {
        data.forEach(item => {
            createSkillsCard({ 
                ...item, 
                parentSelector: '.skills .skills__wrapper', 
                classes: ["skills__wrapper-card"] 
            });
        });

        flippingCard(
            '.skills__card-front-button', 
            '.skills__card-back-button', 
            '.skills__card-front', 
            '.skills__card-back'
        );

        initializeVanillaTilt('.skills__card');
        initializeBlureEffect('.skills__card');
        watchAOSAnimation();
    }

    getResources('http://localhost:3000/skills')
        .then(renderCards)
        .catch(error => {
            console.error('Помилка при отриманні даних:', error);
    
            const defaultCards = [
                {
                    src: "logo-html5",
                    alt: "html5",
                    title: "HTML5",
                    descr: "Exactly, it creates the framework for your website or application...",
                    target: "90"
                },
                {
                    src: "logo-css3",
                    alt: "css3",
                    title: "CSS3",
                    descr: "This styling language allows me to create any appearance...",
                    target: "90"
                },
                {
                    src: "logo-javascript",
                    alt: "javascript",
                    title: "Java Script",
                    descr: "This programming language allows me to animate anything...",
                    target: "80"
                },
                {
                    src: "logo-react",
                    alt: "react",
                    title: "React",
                    descr: "This library enables the creation of web applications...",
                    target: "70"
                },
                {
                    src: "logo-wordpress",
                    alt: "wordpress",
                    title: "WordPress",
                    descr: "It's a powerful platform for building interactive web applications...",
                    target: "80"
                }
            ];
    
            renderCards(defaultCards);
        });
        window.addEventListener('resize', () => {
            const newIsDesktop = window.innerWidth > 991;
            if (newIsDesktop !== isDesktop) {
                isDesktop = newIsDesktop;
                initializeVanillaTilt('.skills__card');
                initializeBlureEffect('.skills__card');
            }
        });
}
export {loadingSkillsCard};
export {cards};