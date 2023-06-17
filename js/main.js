$(function() {

    'use strict';

    // smooth scroll
    $("a").on("click", function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({

                scrollTop: $(hash).offset().top - 50

            }, 850);

        }

    });

    // hide navbar on mobile after click
    $('.navbar-nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // navbar on scroll
    $(window).on("scroll", function() {

        var onScroll = $(this).scrollTop();

        if( onScroll > 50) {
            $(".navbar").addClass("navbar-fixed");

            $(".navbar-ng .navbar-collapse .current a").css({
                "color": "blue"
            });
        }
        else {
            $(".navbar").removeClass("navbar-fixed");
            $(".navbar-ng .navbar-collapse .current a").css({
                "background-color": "#ffc107"
            });

        }

    });


    // porfolio filterizr
    $('.filter-container').imagesLoaded( function() {
        var filterizr = $('.filter-container').filterizr();
    });

    // portfolio filter
    $('.portfolio-filter-menu li').on('click', function() {
        $('.portfolio-filter-menu li').removeClass('active');
        $(this).addClass('active');
    });

    // portfolio magnific popup
    $('.portfolio').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: '.portfolio-popup', // the selector for portfolio item
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

});


function generateWhatsAppLink() {
    var name = document.querySelector('#first-name-field input').value.trim();
    var phoneNumber = document.querySelector('#email-field input').value.trim();
    var subject = document.querySelector('#subject-field input').value.trim();
    var message = document.querySelector('#message-field textarea').value.trim();
  
    // Encode the message for the URL
    var encodedMessage = encodeURIComponent(message);
  
    // Generate the WhatsApp link
    var whatsappLink = `https://wa.me/919713236431?text=Hey%20I'm%20${name}%20${phoneNumber}%20${subject}%20${encodedMessage}`;
  
    // Open the WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');
  }
  
  var contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    generateWhatsAppLink();
  });
  
  

  const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
  }
  
  trailer.animate(keyframes, { 
    duration: 800, 
    fill: "forwards" 
  });
}

const getTrailerClass = type => {
  switch(type) {
    case "video":
      return "fa-solid fa-play";
    default:
      return "fa-solid fa-arrow-up-right"; 
  }
}

window.onmousemove = e => {
  const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
  
  const icon = document.getElementById("trailer-icon");
  
  animateTrailer(e, interacting);
  
  trailer.dataset.type = interacting ? interactable.dataset.type : "";
  
  if(interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
  }
}