// Fade-in card quando scorri
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, {threshold:0.2});
cards.forEach(card => observer.observe(card));

// Accordion
const acc = document.querySelectorAll(".accordion");
acc.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("active");
        const panel = button.nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
});
