window.addEventListener('scroll', function() {
    if (pageYOffset > 100) {
      document.querySelector('.header-nav').classList.add('active')
    } else {
      document.querySelector('.header-nav').classList.remove('active')
    }
  })
