function scrollTo(id) {
    document.getElementById(id).scrollIntoView(
        {block: 'center', behavior: 'smooth'});
}

document.getElementById('sk-l').onclick = () => scrollTo('sk');
document.getElementById('ed-l').onclick = () => scrollTo('ed');
document.getElementById('p-l').onclick = () => scrollTo('p');
document.getElementById('c-l').onclick = () => scrollTo('c');