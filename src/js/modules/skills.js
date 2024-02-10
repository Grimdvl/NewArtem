function skills(counterSelector, lineSelector) {
    const counters = document.querySelectorAll(counterSelector),
          lines = document.querySelectorAll(lineSelector);

    function numberCounter(counter, target, index) {
        const value = +counter.innerText.replace(/\D/g, '');

        if (value < target) {
            counter.innerHTML = `${Math.ceil(value + 1)}<sup>%</sup>`;
            const progress = (value + 1) / 100 * 100;
            lines[index].style.width = `${progress}%`;
            setTimeout(() => {
                numberCounter(counter, target, index);
            }, 15);
        }
    }

    counters.forEach((counter, i) => {
        counter.innerHTML = `0<sup>%</sup>`;
        const target = +counter.getAttribute('value');
        numberCounter(counter, target, i);
    });
}

export default skills;
