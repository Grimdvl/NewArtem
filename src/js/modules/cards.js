import {getResources} from "../services/services";

function cards() {

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
                this.classes = "skills__item";
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
                <div class="skills__item-icon">
                    <img src=${this.src} alt=${this.alt}>
                </div>
                <h3 class="title title_fz14">${this.title}</h3>
                <p>${this.descr}</p>
            `;
            // <img src=${this.src} alt=${this.alt}>
            // <h3 class="menu__item-subtitle">${this.title}</h3>
            // <div class="menu__item-descr">${this.descr}</div>
            // <div class="menu__item-divider"></div>
            // <div class="menu__item-price">
            //     <div class="menu__item-cost">Цена:</div>
            //     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            // </div>
            // "icons/skills/html5.svg"
            // html5
            // HTML5
            // Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта
            this.parent.append(element);
        }
    }

    getResources('http://localhost:3000/skills')
        .then(data => {
            data.forEach(({img, altimg, title, descr}) => {
                new SkillsCards(img, altimg, title, descr, '.skills .skills__wrapper').render();
            });
        });
}

export default cards;