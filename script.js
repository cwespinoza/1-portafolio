 const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    themeToggleBtn.addEventListener('click', () => {
      htmlElement.classList.toggle('dark');
      if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });

    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }

    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); 

      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '¡ENVIADO CON ÉXITO! <i class="fa-solid fa-check ml-2"></i>';
      submitBtn.classList.remove('bg-brand-600', 'hover:bg-brand-700');
      submitBtn.classList.add('bg-emerald-500', 'hover:bg-emerald-600');

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.classList.remove('bg-emerald-500', 'hover:bg-emerald-600');
        submitBtn.classList.add('bg-brand-600', 'hover:bg-brand-700');
        contactForm.reset();
      }, 3000);
    });