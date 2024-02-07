function skills(counterSelector, lineSelector) {
    const counters = document.querySelectorAll(counterSelector),
          lines = document.querySelectorAll(lineSelector);

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });
    
    // function numberCounter(counter, target) {
    //     const value = +counter.innerText.replace(/\D/g, '');

    //     if (value < target) {
    //         counter.innerHTML = `${Math.ceil(value + 1)}<sup>%</sup>`;
    //         setTimeout(() => {
    //             numberCounter(counter, target);
    //         }, 15);
    //     }
    // }
    // numberCounter(counters, lines);
}

export default skills;