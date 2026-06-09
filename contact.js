document.getElementById("contactForm").addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("successMessage").innerHTML =
    "Thank you, " + name + "! Your message has been submitted successfully.";

    document.getElementById("contactForm").reset();

});