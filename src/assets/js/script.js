require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import { multipleText } from './modules/contacts';
import { toggleSocial } from './modules/contacts';
import navigation from './modules/navigation';
import { cards } from './modules/cards';
import modal from './modules/modal';
import portfolioTrigger from './modules/portfolio';
import { menu, applySavedTheme } from './modules/menu';
import resume from './modules/resume';
import skills from './modules/skills';

applySavedTheme('active', '.mode', '.color');

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    const main = document.getElementById('main');

    setTimeout(() => {
        if (loader) loader.style.display = 'none';

        if (main) {
            main.classList.remove('hide');
            main.classList.add('show');
        }

        setTimeout(() => {
            if (window.AOS) {
                AOS.init({
                    once: true,
                });
                AOS.refresh();
            }
        }, 50);

        initApp();
    }, 1500);
});

function initApp() {
    toggleSocial();
    multipleText();
    menu('active', '.menu-bar', '.menu', '.mode', '.color');
    navigation('.navigation__link', 'active', '.indicator');
    skills('.skills__ratings-counter', '.skills__ratings-line');
    cards();
    modal('[data-modal]', '.modal', 'form');
    portfolioTrigger('.swiper-slide', 'active', '.swiper-wrapper', '.swiper-button-next', '.swiper-button-prev', '.swiper');
    resume();
}
