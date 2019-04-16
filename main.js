// $(function() {
//     console.log("hello");
//     // $(".fa-twitter-square").click(function(event) {
//     //     $(".twitter").toggle();
//     // })
//     $(".panelButton").each(function(i) {
//         $(this).click(function() {
//             console.log("pclick");
//             var panel = $(this).prev();
//             panel.toggleClass("openPanel");
//             panel.find(".overlayReveal").toggleClass("overlayRevealClose");
//         })
//     })
//     $("#nav-icon3").click(function() {
//         $(this).toggleClass("open");
//         $(".navOverlay").toggleClass("open");
//         $(".swiper-container").toggleClass("below");
//         $("body").toggleClass("stop-scrolling");
//     })
//     $(".frontend").click(function() {
//         if ($(".frontendItems").css("max-height") != "0px") {
//             $(".frontendItems").css("max-height", "0px");
//         } else {
//             $(".frontendItems").css("max-height", $(".frontendItems").prop("scrollHeight") + "px");
//         }
//         var changeSign = $(".frontend").find("p.skillType");
//         if (changeSign.text() == "Frontend -") {
//             changeSign.html("Frontend +");
//         } else {
//             changeSign.html("Frontend -");
//         };
//     })
//     $(".backend").click(function() {
//         if ($(".backendItems").css("max-height") != "0px") {
//             $(".backendItems").css("max-height", "0px");
//         } else {
//             $(".backendItems").css("max-height", $(".backendItems").prop("scrollHeight") + "px");
//         }
//         var changeSign = $(".backend").find("p");
//         if (changeSign.text() == "Backend -") {
//             changeSign.html("Backend +");
//         } else {
//             changeSign.html("Backend -");
//         };
//     })
//     $(".software").click(function() {
//         if ($(".softwareItems").css("max-height") != "0px") {
//             $(".softwareItems").css("max-height", "0px");
//         } else {
//             $(".softwareItems").css("max-height", $(".softwareItems").prop("scrollHeight") + "px");
//         }
//         var changeSign = $(".software").find("p");
//         if (changeSign.text() == "Software -") {
//             changeSign.html("Software +");
//         } else {
//             changeSign.html("Software -");
//         };
//     })
//     $(window).scroll(function() {
//         let scrollTop = window.scrollY / 5 + 'px';
//         $(".portrait").css("transform", "translateY(" + scrollTop + ")");
//         $(".whoami").css("transform", "translateY(-" + scrollTop + ")");
//         $(".featuredWorkTitle").css("transform", "translateY(-" + scrollTop + ")");

//     })
//     var mySwiper = new Swiper('.swiper-container', {
//         slidesPerView: 'auto',
//         centeredSlides: true,
//         loop: false,
//         slidesPerGroup: 1,
//         paginationClickable: true,
//         spaceBetween: 20,
//         initialSlide: 1,
//     });
//     mySwiper.on('touchStart', function() {
//         $(".swiper-slide").css("filter", "grayscale(0%)");
//     });
//     // Select all links with hashes
// $('a[href*="#"]')
// // Remove links that don't actually link to anything
// .not('[href="#"]')
// .not('[href="#0"]')
// .click(function(event) {
//   // On-page links
//   if (
//     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//     && 
//     location.hostname == this.hostname
//   ) {
//     // Figure out element to scroll to
//     var target = $(this.hash);
//     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//     // Does a scroll target exist?
//     if (target.length) {
//       // Only prevent default if animation is actually gonna happen
//       event.preventDefault();
//       $('html, body').animate({
//         scrollTop: target.offset().top
//       }, 1000, function() {
//         // Callback after animation
//         // Must change focus!
//         var $target = $(target);
//         $target.focus();
//         if ($target.is(":focus")) { // Checking if the target was focused
//           return false;
//         } else {
//           $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//           $target.focus(); // Set focus again
//         };
//       });
//     }
//   }
// });
// });
