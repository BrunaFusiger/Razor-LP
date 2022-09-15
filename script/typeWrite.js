//função generica, lá em baixo passo o que quero
function typeWrite(e) {
    //pega cada letra do elemento HTML e separa em array ["", ""]
    const textoArray = e.innerHTML.split('');
    //da um espaço depois do slit
    e.innerHTML = ' ';
    //para cada letra, execute a função
    textoArray.forEach(function (letter, i) {
        setTimeout(function () {
            e.innerHTML += letter;
        }, 90 * i);
    });
}

const phrase = document.querySelector('.headline');
typeWrite(phrase);

// const scrollY = phrase.offsetTop;

// function heightZero() {
//     if (window.scrollY = scrollY) {
//         console.log("oi");
//     } else {

//     }
//   }


// heightZero();
