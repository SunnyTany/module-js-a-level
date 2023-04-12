// catalog
const hearts = document.querySelectorAll('.catalog__heart');
// services
let totalAmountManicure = document.querySelector('.total-amount-manicure');
let totalAmountAdding   = document.querySelector('.total-amount-adding');
let totalAmountPedicure = document.querySelector('.total-amount-pedicure');
let totalAmountAll      = document.querySelector('.total-amount-all');
const manicureServices  = document.getElementsByName('manicure');
const addingServices    = document.getElementsByName('adding');
const pedicureServices  = document.getElementsByName('pedicure');
//functional about me
const images = document.querySelectorAll('.about-me__img');
const texts  = document.querySelectorAll('.about-me__text');
const dots   = document.querySelectorAll('.about-me__slider-dot');


// start catalog
hearts.forEach( (heart) => {
    heart.addEventListener('click', () => {
        heart.classList.toggle('heart-fill');
    });
});
// end catalog

// start services
function calcTotalPriceServices(arrServ, totalPrice) {

    arrServ.forEach((item) => {
        item.addEventListener('click', () => {
            let total = 0;
            arrServ.forEach((i) => {
                
                if (i.checked) {
                    total += +(i.value);
                }
            });
            console.log(total);
            
            totalPrice.innerHTML = total;
            totalAmountAll.innerHTML = +totalAmountManicure.textContent + +totalAmountAdding.textContent + +totalAmountPedicure.textContent;
        });
    });

}

calcTotalPriceServices(manicureServices, totalAmountManicure);
calcTotalPriceServices(addingServices, totalAmountAdding);
calcTotalPriceServices(pedicureServices, totalAmountPedicure);
// end services

// start functional about me
function changeImageText(i) {

    images.forEach(img => { 

        img.classList.remove('about-me__img--active');

        if (img.classList.contains(`about-me__img${i}`)) {
            img.classList.add('about-me__img--active')
        }

    });

    texts.forEach(text => { 

        text.classList.remove('about-me__text--active')

        if (text.classList.contains(`about-me__text${i}`)) {
            text.classList.add('about-me__text--active')
        } 
    });
}

function changeBlock( event ) {
    
    const dot = event.target;

    dots.forEach( dot => {
        dot.classList.remove('about-me__slider-dot--active');
    });

    dot.classList.add('about-me__slider-dot--active');

    if (dot.classList.contains('dot1')) {
        changeImageText(1);
    }

    if (dot.classList.contains('dot2')) {
        changeImageText(2);
    }
    
    if (dot.classList.contains('dot3')) {
        changeImageText(3);
    }
}

dots.forEach((dot) => {
    dot.addEventListener('click', changeBlock);
});
// end functional about me