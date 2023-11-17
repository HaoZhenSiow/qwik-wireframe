import { component$, useStylesScoped$, useVisibleTask$ } from '@builder.io/qwik'
import useViewportSize from '~/hooks/useViewportSize'
import styled from '~/lib/styled'

const navitems = ['About', 'Services', 'Portfolio', 'Testimonials', 'Contact']

export default component$(() => {
  const viewport = useViewportSize(),
        isSmallScreen = viewport.width <= 950

  useStylesScoped$(createStyle())

  useVisibleTask$(({ cleanup }) => {
    if (typeof document !== 'undefined') {
      document.addEventListener('scroll', toggleNavbarScrolled)
    }
    cleanup(() => {
      document.removeEventListener('scroll', toggleNavbarScrolled)
    })
  })

  return (
    <div class="navbar">
      <div class="container navbar__container">
        <p class="navbar__logo">LOGO</p>
        {isSmallScreen ? <Hamburger /> : <NavButtons />}
      </div>
    </div>
  )
})

function createStyle() {
  return styled(`
    .navbar {
      --navbar-bg: transparent;
      --logo-fs: 3em;
      --navbar-bg-scrolled: white;
      --logo-fs-scrolled: 2.5em;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: var(--navbar-bg);
      padding-block: 1.5em;
      transition: padding-block .5s ease-in-out;
      z-index: 100;
    }

    .navbar__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .navbar__logo {
      font-size: var(--logo-fs);
      font-weight: bold;
      line-height: 1;
      transition: font-size .5s ease-in-out;
    }

    .navbar.navbar--scrolled {
      background-color: var(--navbar-bg-scrolled);
      padding-block: .4em;

      & .container .navbar__logo {
        font-size: var(--logo-fs-scrolled);
      }
    }
  `)
}

const NavButtons = component$(() => {
  useStylesScoped$(styled(`
    .nav__links--container {
      --btn-bg: black;
      --btn-color: white;
      display: flex;
      align-items: center;
    }

    .nav__links--list {
      list-style-type: none;
      padding: 0;
      display: flex;
    }

    .nav__links--link {
      margin-left: 1em;
      letter-spacing: 1px;
    }

    .nav__links--button {
      font-size: 1em;
      padding: .5em 1em;
      color: var(--btn-color);
      background-color: var(--btn-bg);
      border-radius: 5px;
      margin-left: 1em;
    }
  `))
  return (
    <div class="nav__links--container">
      <ul class="nav__links--list">
        {navitems.map((item) => (
          <li key={item}>
            <a href={`/${item}`} class="nav__links--link">{item}</a>
          </li>
        ))}
      </ul>
      <button type='button' class="nav__links--button">Free Quotation</button>
    </div>
  )
})

const Hamburger = component$(() => {
  useStylesScoped$(styled(`
    .hamburger {
      --width: 3em;
      --color: gray;
      content: '';
      width: var(--width);
      height: calc(var(--width)/3*2);
      position: relative;
      cursor: pointer;
    }

    .hamburger__bar {
      width: 100%;
      height: .3em;
      border-radius: 5px;
      background-color: var(--color);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .hamburger__bar--first { top: 10%; }
    .hamburger__bar--last { top: 90%; }
  `))
  return (
    <div class="hamburger">
      <div class="hamburger__bar hamburger__bar--first"/>
      <div class="hamburger__bar"/>
      <div class="hamburger__bar hamburger__bar--last"/>
    </div>
  )
})



function toggleNavbarScrolled() {
  const pagePos = document.documentElement.scrollTop
  pagePos > 0 ?
  document.querySelector('.navbar')?.classList.add('navbar--scrolled') :
  document.querySelector('.navbar')?.classList.remove('navbar--scrolled')
}

