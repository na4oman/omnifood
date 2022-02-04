// Set current year in footer copyrignt section

const yearEl = document.querySelector('.year')
const currYear = new Date().getFullYear()
yearEl.textContent = currYear

// Make mobile navigation work

const mobileBtnEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')
mobileBtnEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open')
})

///////////////////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll('a:link')
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    const href = link.getAttribute('href')

    // Scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })

    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href)
      sectionEl.scrollIntoView({ behavior: 'smooth' })
    }

    //  Close mobile navigation
    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open')
    }
  })
})

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector('.section-hero')
// const headerEl = document.querySelector('.header')

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0]
    // console.log(ent)
    if (!ent.isIntersecting) {
      document.body.classList.add('sticky')
    }

    if (ent.isIntersecting) {
      document.body.classList.remove('sticky')
    }
  },
  {
    // In the viewport
    root: null,
    rootMargin: '-80px',
    threshold: 0,
  }
)
observer.observe(sectionHeroEl)

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

function checkFlexGap() {
  var flex = document.createElement('div')
  flex.style.display = 'flex'
  flex.style.flexDirection = 'column'
  flex.style.rowGap = '1px'

  flex.appendChild(document.createElement('div'))
  flex.appendChild(document.createElement('div'))

  document.body.appendChild(flex)
  var isSupported = flex.scrollHeight === 1
  flex.parentNode.removeChild(flex)
  console.log(isSupported)

  if (!isSupported) document.body.classList.add('no-flexbox-gap')
}
checkFlexGap()
