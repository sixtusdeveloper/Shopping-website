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
const iconBars = document.querySelector('.menu-btn i')
navTogle = document.querySelector('.menu-btn')
if (navTogle) {
  navTogle.addEventListener('click', () => {
    navTogle.style.background = '--var(main-color)'
    navMenu.classList.toggle('active')
    iconBars.classList.toggle('fa-times')
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

// Auto indicate active section from the section link script
const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('.menu .nav-item a')

const options = {
  rootMargin: '-50% 0% -50% 0%',
  threshold: 0,
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id')
      navLinks.forEach((link) => {
        link.classList.remove('active_links')
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active_links')
        }
      })
    }
  })
}, options)

sections.forEach((section) => {
  observer.observe(section)
})
