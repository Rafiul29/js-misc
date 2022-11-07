const intro = document.querySelector(".intro");
const introLogo = document.querySelectorAll(".intro-logo");
window.addEventListener("DOMContentLoaded", function() {
    //logo appearing
    setTimeout(()=>{
        introLogo.forEach((logo, i)=>{
            setTimeout(()=>{
                logo.classList.add("active");
            }, 500 * (i + 1));
        });
        // logo disapearing
        setTimeout(()=>{
            introLogo.forEach((logo, i)=>{
                setTimeout(()=>{
                    logo.classList.remove("active");
                    logo.classList.add("fade");
                }, 50 * (i + 1));
            });
        }, 2000);
        // screen disappearing
        setTimeout(()=>{
            intro.style.top = "-100vh";
        }, 2500);
    });
});

//# sourceMappingURL=index.1c974c2f.js.map
