let headerburger = document.querySelector('.header_burger');
let headerlist = document.querySelector('.header-list');
headerburger.addEventListener('click', function(){
   headerlist.classList.toggle('active');
})