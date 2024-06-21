const hamburger = document.querySelector('.icon-bars');
const cancel = document.querySelector('.div-x-menu-hamburger');
const listHamburger = document.querySelector('.list-hamburger');
const categoryLabel = document.querySelector('.category');
const checkbox = document.getElementById('category')


hamburger.addEventListener('click', () => {
  hamburger.classList.add('hidden');
  if(hamburger.classList.contains('hidden')){
    cancel.style.display = 'block';
    listHamburger.style.display = 'block'
  }
  cancel.addEventListener('click', () => {
    cancel.style.display = 'none';
    if(cancel.style.display === 'none'){
      hamburger.classList.remove('hidden');
      listHamburger.style.display = 'none'
    }
  })
});

checkbox.addEventListener('change', () => {
 if(checkbox.checked){
  categoryLabel.classList.add('color-category');
} else {
  categoryLabel.classList.remove('color-category'); 
}
})