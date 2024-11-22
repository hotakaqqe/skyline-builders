gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    gsap.fromTo(
        "#explore", 
        { opacity: 0, y: 100 }, 
        { 
            opacity: 1, y: 0, duration: 1, ease: "power2.out" 
        });

    gsap.fromTo(
        "#hero p",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", delay: 1 }
    );

    gsap.fromTo(
        "#explore",
        { scale: 0, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.7)", delay: 1.8 } 
    );

    const exploreButton = document.querySelector("#explore");
    const projectsSection = document.querySelector("#projects");

    exploreButton.addEventListener("click", () => {
        window.scrollTo({
            top: projectsSection.offsetTop - 50,
            behavior: "smooth"
        });
    });

    const navLinks = document.querySelectorAll("nav .nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); 

            const targetId = link.getAttribute("href").substring(1); 
            const targetSection = document.getElementById(targetId); 

            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    gsap.utils.toArray("section").forEach((section) => {
        gsap.fromTo(
            section,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            }}
        );
    });

    const form = document.getElementById("contact-form");
    const confirmationMessage = document.getElementById("confirmation-message");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        confirmationMessage.classList.remove("hidden");
        confirmationMessage.classList.add("show");

        setTimeout(() => {
            confirmationMessage.classList.remove("show");
            confirmationMessage.classList.add("hide");

            setTimeout(() => {
                confirmationMessage.classList.add("hidden");
            }, 500); 
        }, 3000);
    });

    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const slider = document.querySelector(".slider");
    const sliderItems = document.querySelectorAll(".slider-item");

    let currentIndex = 0;

    function updateSlider() {
        const offset = -currentIndex * 320;
        slider.style.transform = `translateX(${offset}px)`;
    }

    // Переключение на следующий слайд
    nextBtn.addEventListener("click", () => {
        if (currentIndex < sliderItems.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    });

    // Переключение на предыдущий слайд
    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = sliderItems.length - 1;
        }
        updateSlider();
    });
});
