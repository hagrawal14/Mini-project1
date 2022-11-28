let sidebar = document.querySelector('.sidebar');
let searchBtn;
searchBtn = document.querySelector('.fa-magnifying-glass');
searchBtn.onclick = function () {
    sidebar.classList.toggle("active");
}

const menuBtn= document.querySelector('.menu-btn');
menuBtn.onclick = function () {
    sidebar.classList.toggle("active");
}
let menuOpen = false;
menuBtn.addEventListener('click',()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen=true;
    }else {
        menuBtn.classList.remove('open');
        menuOpen=false;
    }


});

// <!-- Swiper JS -->


// <!-- Initialize Swiper --/////>

    var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 25,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
        breakpoints:
            {
                0: {
                    slidesPerView: 1,
                },
                710: {
                    slidesPerView: 2
                },

                950: {
                    slidesPerView: 3,
                },
                1240: {
                    slidesPerView: 4,
                },

            },
});