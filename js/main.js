$(function () {

  var mixer = mixitup('.directions__list')

  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })

  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
    responsive:
    [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })

  $('.slider-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })
  $('.slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })

  $('.testi__slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.testi__dots'),
  })
  $('.testi__next').on('click', function (e) {
    e.preventDefault()
    $('.testi__slider').slick('slickNext')
  })
  $('.testi__prev').on('click', function (e) {
    e.preventDefault()
    $('.testi__slider').slick('slickPrev')
  })


  $('.course__acc-link').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('course__acc-link--active')
    $(this).children('.course__acc-text').slideToggle()
  })

  $(".header__nav-list a, .header__top-button, .footer__go-top, .logo, .footer__top-list a").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top - 150
    $('body,html').animate({ scrollTop: top }, 1500)
  })


  
  setInterval(() => {
      if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false ) {
        $('.burger').addClass('burger--follow')
      } else {
        $('.burger').removeClass('burger--follow')
      }
  }, 0)
  
  $('.burger, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })
})



