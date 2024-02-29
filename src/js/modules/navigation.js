import {loadingSkillsCards} from './cards';
import skills from './skills';
import portfolioTrigger from './portfolio';

function navigation(linksSelector, activeClass, sectionsSelector, indicatorSelector) {
    const links = document.querySelectorAll(linksSelector),
        //   indicator = document.querySelector(indicatorSelector),
          sections = document.querySelectorAll(sectionsSelector);

    const sectionsMap = {
        'resume': document.querySelector('.resume'),
        'skills': document.querySelector('.skills'),
        'portfolio': document.querySelector('.portfolio'),
        'contacts': document.querySelector('.contacts'),
    };

    let isSkillsCardsLoaded = false;

    function removeActiveClass() {
        links.forEach((item) => {
            item.classList.remove(activeClass);
        });
    }

    function removeAnimatedClass() {
        Object.values(sectionsMap).forEach(section => {
            if (section && section.classList) {
                section.classList.remove('animated');
            }
        });
    }

    function scrollNavigation() {
        sections.forEach(section => {
            const link = document.querySelector(`a[href="#${section.id}"]`),
                  top = window.scrollY,
                  offset = section.offsetTop - 300,
                  height = section.offsetHeight;

            if (top >= offset && top < offset + height && link) {
                removeActiveClass();
                removeAnimatedClass();
                // indicator.classList.remove('hide');
                // indicator.classList.add('show');
                if (!sectionsMap[section.id].classList.contains('animated')) {
                    sectionsMap[section.id].classList.add('animated');
                    if (sectionsMap.skills.classList.contains('animated') && !isSkillsCardsLoaded) {
                        isSkillsCardsLoaded = true;
                        loadingSkillsCards('.skills__card-front-icon', '.counter');
                        skills('.skills__ratings-counter', '.skills__ratings-line span');
                    }
                    if (!sectionsMap.skills.classList.contains('animated') && isSkillsCardsLoaded) {
                        isSkillsCardsLoaded = false;
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
                    if (!sectionsMap.portfolio.classList.contains('animated')) {
                        portfolioTrigger('.portfolio__items-item', 'active', '.portfolio__items');
                    }
                }
                link.parentNode.classList.add(activeClass);
            } else if (top <= 400 && link) {
                removeActiveClass();
                removeAnimatedClass();
                // indicator.classList.remove('show');
                // indicator.classList.add('hide');
            }
        });
    }

    window.addEventListener('scroll', scrollNavigation);
}

export default navigation;