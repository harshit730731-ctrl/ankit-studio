
console.log("Welcome to Ankit Studio!");

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {
        loader.style.display = "none";
    }, 3000);

});

// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    '.work, .services, .about, .contact'
);

const revealObserver = new IntersectionObserver(
    function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    },
    { threshold: 0.15 }
);

revealElements.forEach(function(element) {
    element.classList.add('reveal');
    revealObserver.observe(element);
});
