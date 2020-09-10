let user = sessionStorage.getItem('name');
let point = sessionStorage.getItem('points');
let time = sessionStorage.getItem('timer');

document.querySelector('.name').innerHTML =user;
document.querySelector('.points').innerHTML =point;