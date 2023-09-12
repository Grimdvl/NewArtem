import hamburger from './modules/hamburger';
import btnPromo from './modules/btnPromo';
import skills from './modules/skills';
import navigation from './modules/navigation';
import cards from './modules/cards';

window.addEventListener('DOMContentLoaded', () => {
    // const hamburger = require('./modules/hamburger'),

    hamburger('.navigation', '.hamburger', 'active');
    navigation('.navigation__link', 'active', 'section', '.indicator');
    btnPromo('.promo__link', '.promo__about', 'btn');
    skills('.skills__ratings-counter', '.skills__ratings-line span');
    cards();
});