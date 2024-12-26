const navElements = document.querySelectorAll('.navElem');

navElements.forEach(elem => {
    elem.addEventListener('click', () => {
        navElements.forEach(e => {
            e.style.color = '#000';
            e.style.backgroundColor = '';
            e.style.transition = '.5s'
        });

        elem.style.color = '#fff'
        elem.style.backgroundColor = 'black';
    });
});
