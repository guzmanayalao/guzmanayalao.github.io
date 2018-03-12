window.onload = function() {
    console.log("doc ready");
    var navIcon = document.querySelector("#nav-icon3");
    var overlay = document.querySelector(".navOverlay");
    var swiperContainer = document.querySelector(".swiper-container");
    navIcon.addEventListener("click", function() {
        this.classList.toggle("open");
        overlay.classList.toggle("open");
        swiperContainer.classList.toggle("below");

        document.querySelector("body").classList.toggle("stop-scrolling");
    })
    var selfie = document.querySelector(".selfie");
    window.addEventListener("scroll", (function() {
        var scrollTop = window.scrollY / 7 + 'px';
        selfie.style.transform = "translateY(-" + scrollTop + ")";
    }))
    var portrait = document.querySelector(".portrait");
    window.addEventListener("scroll", (function() {
        var scrollTop2 = window.scrollY / 5 + 'px';
        portrait.style.transform = "translateY(" + scrollTop2 + ")";
    }))
    var aboutContent = document.querySelector(".aboutContent");
    window.addEventListener("scroll", (function() {
            var scrollTop3 = window.scrollY / 7 + 'px';
            aboutContent.style.transform = "translateY(-" + scrollTop3 + ")";
    }));

    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        slidesPerGroup: 1,
        paginationClickable: true,
        spaceBetween: 20
        });
        console.log("swiper below");
        console.log(mySwiper);

}
