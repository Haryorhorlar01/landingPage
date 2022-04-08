const selectEl = element => document.querySelector(element);
// const selectEl = function (element) {
//     return document.querySelector(element);
// }

let menuToggler = selectEl('.menu-toggle');
let body = selectEl('body');

menuToggler.addEventListener('click', function() {
    body.classList.toggle('open');
})