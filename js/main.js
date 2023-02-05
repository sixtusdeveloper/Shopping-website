$(document).ready(function () {
  var scrollLink = $('.smooth-scroll')

  // Smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault()
    $('body,html').animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      100,
    )
  })

  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop()

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 10

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active_link')
        $(this).parent().siblings().removeClass('active_link')
      }
    })
  })

  // Init On Dom Load
  document.addEventListener('DOMContentLoaded', init)

  // Init App

  function init() {
    const TxtElement = document.querySelector('.txt-type')
    const words = JSON.parse(TxtElement.getAttribute('data-words'))
    const wait = TxtElement.getAttribute('data-wait')
    //   Init TypeWriter
    new TypeWriter(TxtElement, words, wait)
  }
})

/*===== Resize Navbar on Scroll =====*/
var navbar = document.querySelector('.navbar')
//when the scroll is higher than 20 viewport height, add the sticky class to the tag with a class navbar
window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add('sticky')
    : navbar.classList.remove('sticky')
}

/* Navbar Toggler */
const navMenu = document.querySelector('.menu')
navTogle = document.querySelector('.menu-btn')
if (navTogle) {
  navTogle.addEventListener('click', () => {
    navMenu.classList.toggle('active')
  })
}
// closing menu when navlink is clicked
const navLink = document.querySelectorAll('.nav-link')
function linkAction() {
  const navMenu = document.querySelector('.menu')
  navMenu.classList.remove('active')
}
navLink.forEach((n) => n.addEventListener('click', linkAction))
/* Product Colors */
var pic = document.querySelector('#main-shoe')
var cyan = document.querySelector('.cyan')
var purple = document.querySelector('.purple')
var blue = document.querySelector('.blue')
var pink = document.querySelector('.pink')
var green = document.querySelector('.green')
var red = document.querySelector('.red')
const colors = document.querySelectorAll('.color')
//store product info in object
var info = [
  {
    src: 'images/products/cyan.png',
  },
  {
    src: 'images/products/purple.png',
  },
  {
    src: 'images/products/blue.png',
  },
  {
    src: 'images/products/pink.png',
  },
  {
    src: 'images/products/green.png',
  },
  {
    src: 'images/products/red.png',
  },
]
// change color
cyan.addEventListener('click', function () {
  pic.src = info[0].src
})
purple.addEventListener('click', function () {
  pic.src = info[1].src
})
blue.addEventListener('click', function () {
  pic.src = info[2].src
})
pink.addEventListener('click', function () {
  pic.src = info[3].src
})
green.addEventListener('click', function () {
  pic.src = info[4].src
})
red.addEventListener('click', function () {
  pic.src = info[5].src
})
//active color
function color() {
  colors.forEach((c) => c.classList.remove('active'))
  this.classList.add('active')
}
colors.forEach((c) => c.addEventListener('click', color))
