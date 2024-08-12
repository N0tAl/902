window.addEventListener('scroll', function() {
    if (pageYOffset > 100) {
      document.querySelector('.header-nav').classList.add('active')
    } else {
      document.querySelector('.header-nav').classList.remove('active')
    }
  })

  document.addEventListener('DOMContentLoaded', function() {
    const headerLogo = document.querySelector('.header-logo img');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            headerLogo.src = 'img/logo1.png';
        } else {
            headerLogo.src = 'img/logo.png';
        }
    });
});
