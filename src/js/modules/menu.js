import skills from './skills';
import {loadingSkillsCards} from './cards';

const navigationMenu = (activeClass, menuSelector, navigationSelector, modeSelector, colorSelector) => {
    const menu = document.querySelector(menuSelector),
          nav = document.querySelector(navigationSelector),
          mode = document.querySelector(modeSelector),
          color = document.querySelector(colorSelector);

    let hasSkillsLoaded = false;

    menu.addEventListener('click', () => {
        nav.classList.toggle(activeClass);
    });

    const clearing = () => {
        const blocks = document.querySelectorAll('.skills__card-front-icon .block');
        const counters = document.querySelectorAll('.counter');
        const width = document.querySelectorAll('.skills__ratings-line span');
        const countersSecond = document.querySelectorAll('.skills__ratings-counter');

        countersSecond.forEach((counterSecond) => {
            counterSecond.textContent = '';
        });
        width.forEach((item) => {
            item.style.width = 0;
        });
        blocks.forEach((block) => {
            block.remove();
        });
        counters.forEach((counter) => {
            counter.textContent = '';
        });
    }

    mode.addEventListener('click', () => {
        mode.classList.toggle(activeClass);
        document.documentElement.classList.toggle(activeClass);
        color.classList.toggle(activeClass);

        if (document.querySelector('.skills').classList.contains('animated') && !hasSkillsLoaded) {
            hasSkillsLoaded = true;
            clearing();
            setTimeout(() => {
                loadingSkillsCards('.skills__card-front-icon', '.counter');
                skills('.skills__ratings-counter', '.skills__ratings-line span');
                hasSkillsLoaded = false;
            }, 500);
        }
    });
}

export default navigationMenu; 