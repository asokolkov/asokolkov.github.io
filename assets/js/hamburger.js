const hamburgerBtn = document.getElementById('hamburger');
const list = document.getElementById('list');

function toggleBtn() {
    list.classList.toggle('show');
}

hamburgerBtn.addEventListener('click', toggleBtn)