// jQuery Accordion - Version 01

const $tabs = $('.tab');
const $content = $('.content');

// Hide the content elements on page load
$content.hide();

// Accordion
$tabs.click(function(){
    //if they click on a tab,
    //determine which one with $(this)
    //and slideToggle() the element that comes after this tab
    $(this).next().slideToggle();                 
});

