let navbar = document.querySelector('.navbar');

document.querySelector('#Menu-btn').onclick = () =>{
    navbar.classList.toggle('active',true);
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active',true);
}