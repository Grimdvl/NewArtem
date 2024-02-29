require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import multipleText from './modules/contacts';
// import hamburger from './modules/hamburger';
import navigation from './modules/navigation';
import {cards} from './modules/cards';
import modal from './modules/modal';
import portfolioTrigger from './modules/portfolio';
import navigationMenu from './modules/menu';

window.addEventListener('DOMContentLoaded', () => {
    // const hamburger = require('./modules/hamburger'),

    multipleText();
    // hamburger('.navigation', '.hamburger', 'active', '.navigation__overlay');
    navigationMenu('active', '.navigation-menu', '.navigation');
    navigation('.navigation-link', 'active', 'section', '.indicator');
    cards();
    modal('[data-modal]', '.modal', 'form');
    portfolioTrigger('.portfolio__items-item', 'active', '.portfolio__items');
});