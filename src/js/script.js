require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import hamburger from './modules/hamburger';
import promo from './modules/promo';
// import skills from './modules/skills';
import navigation from './modules/navigation';
import {cards} from './modules/cards';
// import cards from './modules/cards';
import modal from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    // const hamburger = require('./modules/hamburger'),

    hamburger('.navigation', '.hamburger', 'active', '.navigation__overlay');
    navigation('.navigation__link', 'active', 'section', '.indicator');
    promo('.button--link', '.button--about', 'btn');
    cards();
    modal('[data-modal]', '.modal', 'form');
});