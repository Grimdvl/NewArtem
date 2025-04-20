function skills(counterSelector, lineSelector) {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(() => {
            document.querySelectorAll('.skills__ratings-item').forEach((item) => {
                if (item.classList.contains('aos-animate') && !item.classList.contains('loaded')) {
                    const counter = item.querySelector(counterSelector);
                    const line = item.querySelector(`${lineSelector} span`);
                    if (!counter || !line) return; // <-- тут перевірка

                    const target = +counter.getAttribute('value');

                    item.classList.add('loaded'); // щоб не запускалось знову
                    counter.innerHTML = `0<sup>%</sup>`;
                    line.style.width = '0%';

                    setTimeout(() => {
                        startCounter(counter, line, target);
                    }, 500);
                } else if (!item.classList.contains('aos-animate') && item.classList.contains('loaded')) {
                    const counter = item.querySelector(counterSelector);
                    const line = item.querySelector(`${lineSelector} span`);
                    if (!counter || !line) return;

                    counter.innerHTML = `0<sup>%</sup>`;
                    line.style.width = '0%';
                    item.classList.remove('loaded');
                }
            });
        });
    });

    observer.observe(document.body, {
        attributes: true,
        subtree: true,
        attributeFilter: ['class']
    });

    function startCounter(counter, line, target) {
        if (!counter || !line) return;

        const value = +counter.innerText.replace(/\D/g, '');

        if (value < target) {
            const newValue = value + 1;
            counter.innerHTML = `${newValue}<sup>%</sup>`;
            line.style.width = `${newValue}%`;

            setTimeout(() => {
                startCounter(counter, line, target);
            }, 15);
        }
    }
}

export default skills;
