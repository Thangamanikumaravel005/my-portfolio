window.addEventListener("load", () => {
    alert("Welcome to Thangamani Kumaravel's Portfolio!");
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        // Only for page sections starting with #
        if (targetId.startsWith("#")) {
            e.preventDefault();

            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
window.addEventListener("DOMContentLoaded", () => {

    const skillBars = document.querySelectorAll(
        ".html, .css, .javascript, .git-github"
    );
    skillBars.forEach(bar => {

        const finalWidth = getComputedStyle(bar).width;

        bar.style.width = "0";

        setTimeout(() => {
            bar.style.transition = "width 2s ease";
            bar.style.width = finalWidth;
        }, 300);
    });
});
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.style.fontWeight = "normal";
        });

        this.style.fontWeight = "bold";
    });
});

const hobbies = document.querySelectorAll(".hobby");

hobbies.forEach(hobby => {

    hobby.addEventListener("mouseenter", () => {
        hobby.style.transform = "scale(1.1)";
        hobby.style.transition = "0.3s";
    });

    hobby.addEventListener("mouseleave", () => {
        hobby.style.transform = "scale(1)";
    });
    const viewResumeBtn = document.getElementById("viewResumeBtn");
const resumeContainer = document.getElementById("resumeContainer");
const viewResumeBtn = document.getElementById("viewResumeBtn");
const resumeContainer = document.getElementById("resumeContainer");

viewResumeBtn.addEventListener("click", () => {

    if (resumeContainer.style.display === "none") {
        resumeContainer.style.display = "block";
        viewResumeBtn.textContent = "❌ Hide Resume";

        resumeContainer.scrollIntoView({
            behavior: "smooth"
        });
    } else {
        resumeContainer.style.display = "none";
        viewResumeBtn.textContent = "👀 View Resume";
    }

});

});