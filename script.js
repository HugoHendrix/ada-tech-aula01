window.addEventListener('scroll', function () {
    var button = document.querySelector('.back-to-top');
    if (window.scrollY > 200) {
        button.style.display = 'block'; // Mostra o botão quando a rolagem é superior a 200 pixels
    } else {
        button.style.display = 'none'; // Oculta o botão quando a rolagem é menor ou igual a 200 pixels
    }
});