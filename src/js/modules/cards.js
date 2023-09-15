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
            this.parent.append(element);
        }
    }
    getResources('http://localhost:3000/skills')
    .then(data => {
        data.forEach(({img, altimg, title, descr}) => {
            new SkillsCards(img, altimg, title, descr, '.skills .skills__wrapper').render();
        });
    })
    .catch(error => {
        console.error('Ошибка при получении данных:', error);

        new SkillsCards(
            "icons/skills/html5.svg",
            "html5",
            "HTML5",
            "Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта.",
            ".skills .skills__wrapper"
        ).render();
        new SkillsCards(
            "icons/skills/css3.svg",
            "css3",
            "CSS3",
            "Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!",
            ".skills .skills__wrapper"
        ).render();
        new SkillsCards(
            "icons/skills/js.svg",
            "javascript",
            "Java Script",
            "Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое.",
            ".skills .skills__wrapper"
        ).render();
        new SkillsCards(
            "icons/skills/react.svg",
            "react",
            "React",
            "Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт именно под ваши цели.",
            ".skills .skills__wrapper"
        ).render();
        new SkillsCards(
            "icons/skills/wordpress.svg",
            "wordpress",
            "WordPress",
            "Это мощная платформа для создания интерактивных веб-приложений любого размера.",
            ".skills .skills__wrapper"
        ).render();
    });

}

export default cards;