window.addEventListener("load", () => {
    const skills = document.querySelectorAll(".progress");

    skills.forEach(skill => {
        const width = skill.getAttribute("data-width");
        skill.style.width = width + "%";
    });
});