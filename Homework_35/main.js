'use strict'
const link = document.querySelectorAll('.nav__link')
const contact = document.querySelector('.contactBox')
const section = document.querySelectorAll('section')
const arrow = document.querySelector('.scroll')

link[1].addEventListener('click', function(e){
    console.log('click');
    
    
    const rect = section[0].getBoundingClientRect();
    window.scrollTo({
        top: rect.top
    })
});

link[2].addEventListener('click', function(e){
    console.log('click');
    
    
    const rect = section[1].getBoundingClientRect();
    window.scrollTo({
        top: rect.top
    })
});


link[3].addEventListener('click', function(e){
    console.log('click');
    
    
    const rect = contact.getBoundingClientRect();
    window.scrollTo({
        top: rect.top
    })
});

arrow.addEventListener('click', function(e){
    console.log('click');
    
    
    const rect = section[0].getBoundingClientRect();
    window.scrollTo({
        top: rect.top
    })
});





$('.card-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  });
 