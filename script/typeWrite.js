function typeWrite(e) {
    const textoArray = e.innerHTML.split('');
    e.innerHTML = ' ';
    textoArray.forEach(function (letter, i) {
        setTimeout(function () {
            e.innerHTML += letter;
        }, 90 * i);
    });
}

const phrase = document.querySelector('.headline');
typeWrite(phrase);