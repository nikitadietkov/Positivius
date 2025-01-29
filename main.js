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

document.querySelectorAll('.letMakeThat .parent .child').forEach((child) => {
    const afterElement = child.querySelector('::after');

    child.addEventListener('transitionend', (event) => {
        if (event.propertyName === 'opacity') {
            child.classList.add('after-hidden');
        }
    });

    child.addEventListener('mouseleave', () => {
        child.classList.remove('after-hidden');
    });
});

$(document).ready(function () {
    $(".work-block p").hide();
    $(".open-content").click(function () {
        // $("#slide-elem").slideToggle(500);
        // $(".work-block").toggleClass("open-content-active");
        const parentBlock = $(this).closest('.work-block');
        const content = parentBlock.find('#slide-elem');

        $(".work-block").not(parentBlock).removeClass("open-content-active");
        $(".work-block p").not(content).slideUp(300);

        content.slideToggle(300);
        parentBlock.toggleClass("open-content-active");
    });
});