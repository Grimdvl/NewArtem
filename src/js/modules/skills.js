function skills(counterSelector, lineSelector) {
    const counters = document.querySelectorAll(counterSelector),
          lines = document.querySelectorAll(lineSelector);

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });
}

export default skills;