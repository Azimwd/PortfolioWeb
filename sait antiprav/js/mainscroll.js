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

function Aboutus()
{
    let button = $('.aboutus');

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 2100}, 1000);
    })
}

function Contacts()
{
    let button = $('.contacts');

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 6300}, 1000);
    })
}
function Services()
{
    let button = $('.Services');

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 1150}, 1000);
    })
}

function ScrolltoAppointment()
{
    let button = $('.ScrolltoAppointment');

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 5600}, 1000);
    })
}


function Samples()
{
    let button = $('.Samples');

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 4500}, 1000);
    })
}


ScrolltoAppointment();
Samples();
Contacts();
Services();
Aboutus();
backToTop();

