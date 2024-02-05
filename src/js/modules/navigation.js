function navigation(linksSelector, activeClass, sectionsSelector, indicatorSelector) {
    const links = document.querySelectorAll(linksSelector),
          indicator = document.querySelector(indicatorSelector),
          sections = document.querySelectorAll(sectionsSelector);

    const resume = document.querySelector('.resume__column');

    function removeActiveClass() {
        links.forEach((item) => {
            item.classList.remove(activeClass);
        });
    }

    function scrollNavigation() {
        sections.forEach(section => {
            const link = document.querySelector(`a[href="#${section.id}"]`),
                  top = window.scrollY,
                  offset = section.offsetTop - 300,
                  height = section.offsetHeight;

            if (top >= offset && top < offset + height && link) {
                const linkParent = link.parentNode;

                removeActiveClass();
                indicator.classList.remove('hide');
                indicator.classList.add('show');
                link.classList.add('animated');
                resume.classList.add('animated');
                linkParent.classList.add(activeClass);
                
            } else if (top <= 400 && link) {
                const linkParent = link.parentNode;

                linkParent.classList.remove(activeClass);
                indicator.classList.remove('show');
                indicator.classList.add('hide');
                // resume.classList.remove('animated');
            }
        });
    }

    window.addEventListener('scroll', scrollNavigation);
}

export default navigation;