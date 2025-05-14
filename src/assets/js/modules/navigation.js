import portfolioTrigger from './portfolio';

function navigation(linksSelector, activeClass, indicatorSelector) {
    const links = document.querySelectorAll(linksSelector),
          indicator = document.querySelector(indicatorSelector);

    const sectionsMap = {
        promo: document.querySelector('.promo'),
        resume: document.querySelector('.resume'),
        skills: document.querySelector('.skills'),
        portfolio: document.querySelector('.portfolio'),
        contacts: document.querySelector('.contacts'),
    };

    let activeSection = null;
    let activeAttribute = null;
    let isSkillsCardsLoaded = false;

    const attributs = ['data-skills-wrapper-card', 'data-skills-ratings-items'];

    function removeActiveClass() {
        links.forEach(item => item.classList.remove(activeClass));
    }

    function removeAnimatedClass() {
        Object.values(sectionsMap).forEach(section => {
            if (section?.classList) section.classList.remove('animated');
        });
    }

    function scrollNavigation() {
        const scrollY = window.scrollY;
        let foundSection = null;
        let foundAttribute = null;
    
        for (const [id, section] of Object.entries(sectionsMap)) {
            if (!section) continue;
    
            const offsetTop = section.offsetTop - 300;
            const height = section.offsetHeight;
    
            if (scrollY >= offsetTop && scrollY < offsetTop + height) {
                foundSection = id;
                break;
            }
        }
    
        for (const attr of attributs) {
            const elements = document.querySelectorAll(`[${attr}]`);
            for (const el of elements) {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    foundAttribute = attr;
                    break;
                }
            }
            if (foundAttribute) break;
        }
    
        const homeBtn = document.querySelector('.home');
    
        if (foundSection && foundSection !== activeSection) {
            activeSection = foundSection;
            removeActiveClass();
            removeAnimatedClass();
    
            const link = document.querySelector(`a[href="#${foundSection}"]`);
            if (link) link.parentNode.classList.add(activeClass);
    
            const currentSection = sectionsMap[foundSection];
            if (currentSection && !currentSection.classList.contains('animated')) {
                currentSection.classList.add('animated');
    
                if (foundSection === 'portfolio') {
                    portfolioTrigger('.portfolio__items-item', 'active', '.portfolio__items');
                }
    
                if (foundSection === 'skills' && !isSkillsCardsLoaded) {
                    isSkillsCardsLoaded = true;
                }
            }
        }
    
        if (foundSection && foundSection !== 'promo') {
            indicator?.classList.add('active');
        } else {
            indicator?.classList.remove('active');
        }
    
        if (foundSection === 'promo' || scrollY <= 400) {
            homeBtn?.classList.remove('active');
        } else {
            homeBtn?.classList.add('active');
        }
    
        if (!foundAttribute && activeAttribute) {
            activeAttribute = null;
        } else if (foundAttribute !== activeAttribute) {
            activeAttribute = foundAttribute;
        }
    }

    window.addEventListener('scroll', scrollNavigation);
}

export default navigation;
