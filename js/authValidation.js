'use strict'

// $('.submit').on('click', (e) =>{
//     console.log('e :>> ', e);
//     e.preventDefault();


// })
let btnSubmit = document.getElementsByClassName('submit');
btnSubmit.addEventListener('click', e => {
    console.log('e :>> ', e);
    e.preventDefault();


})