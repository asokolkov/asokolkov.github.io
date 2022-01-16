function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('shown');
        }
    });
}

let options = {threshold: [0.5]};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.e-to-show');

for (let e of elements) {
    observer.observe(e);
}