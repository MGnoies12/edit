document.addEventListener('DOMContentLoaded', function () {

    // ----- کنترل منوی همبرگر در موبایل -----
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.main-nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('is-open');
    });

    // ----- انیمیشن ظاهر شدن با اسکرول -----
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2, // وقتی 20% عنصر دیده شد
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('is-visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

});