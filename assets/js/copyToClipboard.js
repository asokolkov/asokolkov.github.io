function showNotification() {
    let not = document.getElementById('notification');
    not.classList.add('not-shown');
    setTimeout(function() {
        not.classList.remove('not-shown');
    }, 2000);
}

function copyToClipboard(that) {
    navigator.clipboard.writeText(that.textContent)
    showNotification()
}