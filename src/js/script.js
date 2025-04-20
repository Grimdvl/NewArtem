require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import multipleText from './modules/contacts';
// import hamburger from './modules/hamburger';
import navigation from './modules/navigation';
import {cards} from './modules/cards';
import modal from './modules/modal';
import portfolioTrigger from './modules/portfolio';
import menu from './modules/menu';
import resume from './modules/resume';
import skills from './modules/skills';
// import works from './modules/works';

window.addEventListener('DOMContentLoaded', () => {
    // const hamburger = require('./modules/hamburger'),

    // works();
    multipleText();
    // hamburger('.navigation', '.hamburger', 'active', '.navigation__overlay');
    menu('active', '.menu-bar', '.menu', '.mode', '.color');
    navigation('.navigation__link', 'active', 'section', '.indicator');
    skills('.skills__ratings-counter', '.skills__ratings-line');
    cards();
    modal('[data-modal]', '.modal', 'form');
    portfolioTrigger('.portfolio__items-item', 'active', '.portfolio__items');
    resume();
});