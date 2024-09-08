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

function scrollNav() {
  // Привязываем обработчик клика только для ссылки с id="studentLink"
  $('#studentLink').click(function(event){
    event.preventDefault();  // Предотвращаем переход по ссылке



    // Плавно прокручиваем к блоку с ID "S"
    $('html, body').stop().animate({
      scrollTop: $('#S').offset().top - 160  // Прокручиваем к якорю с отступом 160px
    }, 500);  // Длительность анимации 500 мс
  });
}

// Вызываем функцию при загрузке страницы
scrollNav();


$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    }
  }
});


function openMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('open');
}