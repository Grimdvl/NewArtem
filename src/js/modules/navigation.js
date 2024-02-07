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
        const removeLoadingSkillsCards = loadingSkillsCards('.skills__card-front-icon', '.counter');
        Object.values(sectionsMap).forEach(section => {
            if (section && section.classList) {
                section.classList.remove('animated');
            }
        });
        removeLoadingSkillsCards();
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
                if (sectionsMap[section.id] && sectionsMap[section.id].classList) {
                    sectionsMap[section.id].classList.add('animated');
                    if (sectionsMap[section.id].classList.contains('skills') && sectionsMap[section.id].classList.contains('animated') && !isSkillsCardsLoaded) {
                        isSkillsCardsLoaded = true;
                        loadingSkillsCards('.skills__card-front-icon', '.counter');
                    }
                    if (sectionsMap[section.id].classList.contains('skills') && !sectionsMap[section.id].classList.contains('animated')) {
                        // removeAnimatedClass();
                        isSkillsCardsLoaded = false;
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