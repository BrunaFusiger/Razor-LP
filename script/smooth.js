const btns = document.querySelectorAll(".smooth");
const products = document.getElementById("products")

btns.forEach(btn =>{
    btn.addEventListener('click', () => {
        products.scrollIntoView(true);
    })
})