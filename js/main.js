 
if(window.pageYOffset >= 20){
    $(".navbar, .navbar-toggler").addClass("compressed"); // add class compressed when is 20 heigh
    document.querySelector('.navbar').style.transition = 'none'; // remove style transition whenin 20 heith
   }
 // to add compressed class to the menu on scroll
      $(document).ready(function() {
              $(window).on("scroll", function() {
                if ($(window).scrollTop() >= 20) {
                  $(".navbar, .navbar-toggler").addClass("compressed");
                } else {
                  $(".navbar, .navbar-toggler").removeClass("compressed");
                }
              });
            });
 // Select all links with hashes
          $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
              // On-page links
              if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
                && 
                location.hostname == this.hostname
              ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                  // Only prevent default if animation is actually gonna happen
                  event.preventDefault();
                  $('html, body').animate({
                    scrollTop: target.offset().top
                  }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                      return false;
                    } else {
                      $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                      $target.focus(); // Set focus again
                    };
                  });
                }
              }
            });   

           
               












