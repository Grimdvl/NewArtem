import {loadingSkillsCards} from './cards';

function navigation(linksSelector, activeClass, sectionsSelector, indicatorSelector) {
    const links = document.querySelectorAll(linksSelector),
          indicator = document.querySelector(indicatorSelector),
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
                indicator.classList.remove('hide');
                indicator.classList.add('show');
                if (!sectionsMap[section.id].classList.contains('animated')) {
                    sectionsMap[section.id].classList.add('animated');
                    if (sectionsMap.skills.classList.contains('animated') && !isSkillsCardsLoaded) {
                        isSkillsCardsLoaded = true;
                        loadingSkillsCards('.skills__card-front-icon', '.counter');
                    }
                    if (!sectionsMap.skills.classList.contains('animated') && isSkillsCardsLoaded) {
                        isSkillsCardsLoaded = false;
                        const blocks = document.querySelectorAll('.skills__card-front-icon .block');
                        blocks.forEach((block) => {
                            block.remove();
                        });
                    }
                }
                link.parentNode.classList.add(activeClass);
            } else if (top <= 400 && link) {
                removeActiveClass();
                removeAnimatedClass();
                indicator.classList.remove('show');
                indicator.classList.add('hide');
            }
        });
    }

    window.addEventListener('scroll', scrollNavigation);
}

export default navigation;