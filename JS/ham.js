navToggle.on('click', () => {
    navMenu.css('right', '0');
});

$('#close-flyout').on('click', () => {
     navMenu.css('right', '-100%');
});

$(document).on('click', (e) => {
    let target = $(e.target);
    if (!(target.closest('#nav-toggle').length > 0 || target.closest('#nav-menu').length > 0)) {
        navMenu.css('right', '-100%');
    }
});

$(document).scroll(() => {
    let scrollTop = $(document).scrollTop();

    if (scrollTop > 0) {
        navMenu.addClass('is-sticky');
        logo.css('color', '#000');
        headerElem.css('background', '#fff');
        navToggle.css('border-color', '#000');
        navToggle.find('.strip').css('background-color', '#000');
    } else {
        navMenu.removeClass('is-sticky');
        logo.css('color', '#fff');
        headerElem.css('background', 'transparent');
        navToggle.css('bordre-color', '#fff');
        navToggle.find('.strip').css('background-color', '#fff');
    }

    headerElem.css(scrollTop >= 200 ? {'padding': '0.5rem', 'box-shadow': '0 -4px 10px 1px #999'} : {'padding': '1rem 0', 'box-shadow': 'none' });
});

$(document).trigger('scroll');
