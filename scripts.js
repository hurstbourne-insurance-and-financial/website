function toggleMenu() {
  const menu = document.querySelector('.menu-container');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

  

  document.querySelectorAll('.faq-item button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const content = button.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

  