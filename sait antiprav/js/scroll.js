function backToTop()
{
    let button = $('.back_to_top');
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50)
        {
            button.fadeIn();
        }else{
            button.fadeOut();
        }
    });
    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
    })
}
function Contacts()
{
    let button = $('.contacts');

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 5500}, 1000);
    })
}
Contacts();
backToTop();
