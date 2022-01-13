const subLinks = document.querySelectorAll('.nav-sublinks')
const navLink = document.querySelectorAll('.link')

navLink.forEach((link, index) => {
  link.addEventListener('click', () => {
    subLinks[index].classList.toggle('active')
    removeDropdown(index)
  })
})

// Remove active class if another link is clicked
function removeDropdown(index) {
  for (let i = 0; i < subLinks.length; i++) {
    if (subLinks[i].classList.contains('active') && index != i) {
      subLinks[i].classList.remove('active')
    }
  }
}

const hamburger = document.querySelector('.hamburger')
const burgerIcon = document.querySelector('.hamburger img')
const mobileMenu = document.querySelector('.mobile-nav')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  if (hamburger.classList.contains('active')) {
    burgerIcon.src = '../images/icon-close.svg'
    mobileMenu.classList.add('active')
  } else {
    burgerIcon.src = '../images/icon-hamburger.svg'
    mobileMenu.classList.remove('active')
  }
})

// Mobile menu sublinks
const mobileLinks = document.querySelectorAll('.mobile-link')
const mobileSublinks = document.querySelectorAll('.mobile-sublinks')

mobileLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    mobileSublinks[index].classList.toggle('active')
  })
})
