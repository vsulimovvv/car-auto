const openBtn = document.querySelector('.burger');
const list = document.querySelector('.list');

openBtn.addEventListener('click', (e) => {
  list.classList.toggle('active');

  list.classList.contains('active')
    ? (e.target.closest('i').className = 'fas fa-times')
    : (e.target.closest('i').className = 'fas fa-bars');
});
