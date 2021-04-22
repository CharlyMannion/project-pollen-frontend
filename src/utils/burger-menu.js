const burgerMenu = document.querySelector('.burger-menu');
console.log('this page gets loaded');
burgerMenu.addEventListener('click', () => {
    console.log('get here');
    let spans = document.querySelectorAll('.burger-menu span');
    // let dropdownMenu = document.querySelector('.dropdown-menu');
    for (let i = 0; i < spans.length; i++){
        spans[i].classList.toggle(`burger-span-${i+1}`);
        
    }
    // dropdownMenu.classList.toggle('display');
});