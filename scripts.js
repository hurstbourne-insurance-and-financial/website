function toggleDarkMode() {
  document.body.classList.toggle('dark');
}




  // gpt gave all the below bc it said it would keep dark mode on when the page reloads


function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
  }
  
  // Check dark mode state on page load
  window.onload = () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark');
    }
  };
  

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

  