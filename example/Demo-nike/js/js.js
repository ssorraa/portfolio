// #gnb>li:hover ul {
//   left: 205px;
//   opacity: 1;
// }

let menu = document.querySelector('#gnb>li')
let sub = document.querySelector('#gnb ul')

menu.addEventListener('mouseover', function(event) {
    sub.style.left = '205px';
    sub.style.opacity = '1';
  })