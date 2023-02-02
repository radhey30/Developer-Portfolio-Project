const btn = document.querySelector('.collapse-btn');
const collapse = document.querySelector('.collapse');

btn.addEventListener('click', function() {
    collapse.classList.toggle('show');
})
