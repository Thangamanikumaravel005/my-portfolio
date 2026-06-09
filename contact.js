document.getElementById("contactForm").addEventListener("submit", function(event) {

    console.log("Form submitted");

    event.preventDefault();

    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const message = document.getElementById("message").value;

    console.log("Name:", name);
    console.log("Mobile Number:", mobile);
    console.log("Message:", message);

    document.getElementById("successMessage").innerHTML =
        "Thank you, " + name + "! Your message has been submitted successfully.";

    console.log("Success message displayed");

    document.getElementById("contactForm").reset();

    console.log("Form reset completed");

});