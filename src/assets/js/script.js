require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import multipleText from './modules/contacts';
import navigation from './modules/navigation';
import {cards} from './modules/cards';
import modal from './modules/modal';
import portfolioTrigger from './modules/portfolio';
import menu from './modules/menu';
import resume from './modules/resume';
import skills from './modules/skills';

window.addEventListener('DOMContentLoaded', () => {
    multipleText();
    menu('active', '.menu-bar', '.menu', '.mode', '.color');
    navigation('.navigation__link', 'active', '.indicator');
    skills('.skills__ratings-counter', '.skills__ratings-line');
    cards();
    modal('[data-modal]', '.modal', 'form');
    portfolioTrigger('.portfolio__items-item', 'active', '.portfolio__items');
    resume();
});