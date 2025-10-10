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
        threshold: 0.2,
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

    // =======================================
    // !!! تنظیمات و راه‌اندازی ذرات !!!
    // =======================================
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80, // تعداد ذرات
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#a855f7" // رنگ ذرات (همان رنگ بنفشaccent)
            },
            "shape": {
                "type": "circle", // شکل دایره‌ای
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5, // شفافیت ذرات
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3, // اندازه ذرات
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true, // اتصال ذرات به هم
                "distance": 150, // فاصله اتصال
                "color": "#a855f7", // رنگ خطوط اتصال
                "opacity": 0.4, // شفافیت خطوط
                "width": 1 // ضخامت خطوط
            },
            "move": {
                "enable": true,
                "speed": 2, // سرعت حرکت
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true, // فعال شدن افکت با موس
                    "mode": "repulse" // ذرات از موس فرار می‌کنند
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 100, // فاصله فرار ذرات از موس
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

});