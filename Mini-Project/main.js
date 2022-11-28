//Change navbar style on scroll
window.addEventListener('scroll',()=>
{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY> 100 )
})
//show hide faq answer
 const faqs = document.querySelectorAll('.faq');
     faqs.forEach(faq=>
        {
            faq.addEventListener('click',()=>{
                faq.classList.toggle('open');
                //change icon
                const icon = faq.querySelector('.faq_icon i');
                if(icon.className ==='fa-light fa-plus')
                {
                    icon.className = "fa-light fa-minus";
                }
                else
                {
                    icon.className="fa-light fa-plus";
                }
            })
        })
        // var swiper = new Swiper(".mySwiper", {
        //     slidesPerView: 3,
        //     spaceBetween: 30,
        //     pagination: {
        //       el: ".swiper-pagination",
        //       clickable: true,
        //     },
        //   });
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            // mediaquery
            breakpoints:
            {
                600:{
                    slidesPerView: 2,
                }
            }
            })
            // Show Hide navbar
            const menu=document.querySelector(".nav_menu");
            const menuBtn=document.querySelector("open-menu-btn");
            const closebtn=document.querySelector("close-menu-btn");
            menuBtn.addEventListener('click',()=>
            {
                menu.style.display="flex";
                closebtn.style.display="inline-block";
                menuBtn.style.display="none";
            })
            //close nav menu
            const closeNav = () =>
            {
                menu.style.display = "none";
                closebtn.style.display="none";
                menuBtn.style.display="inline-block";
            }
            closebtn.addEventListener('click',closeNav)