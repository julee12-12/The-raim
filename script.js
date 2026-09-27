// Mobile menu

function toggleMenu() {
    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");
}


// Course button

function courseMessage(courseName) {

    alert(
        "Thank you for your interest in " +
        courseName +
        "! We will contact you soon."
    );

}


// Contact form

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        alert(
            "Thank you, " +
            name +
            "! Your message has been received."
        );

        this.reset();
    });