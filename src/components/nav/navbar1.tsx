import { component$, useStylesScoped$, useVisibleTask$ } from '@builder.io/qwik'
import useViewportSize from '~/hooks/useViewportSize'
import styled from '~/lib/styled'

export default component$(({ navitems }: { navitems: string[] }) => {
  useStylesScoped$(createStyle())

  const viewport = useViewportSize(),
        isBigScreen = viewport.width > 950

  useVisibleTask$(({ cleanup }) => {
    if (typeof document !== 'undefined') {
      document.addEventListener('scroll', documentScroll)
    }
    cleanup(() => {
      document.removeEventListener('scroll', documentScroll)
    })
  })
  return (
    <div class="navbar">
      <div class="container">
        <p class="logo">LOGO</p>
        {isBigScreen && <div class="navbar__nav_button">
          <ul>
            {navitems.map((item) => (
              <li key={item}><a href={`/${item}`}>{item}</a></li>
            ))}
          </ul>
          <button type='button'>Free Quotation</button>
        </div>}
        {!isBigScreen && <div class="navbar__hamburger">
          <div/><div/><div/>
        </div>}
      </div>
      
    </div>
  )
})

function createStyle() {
  return styled(`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: transparent;
      padding-block: 1.5em;
      transition: padding-block .5s ease-in-out;
      z-index: 100;

      & .container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & .logo {
          font-size: 3em;
          font-weight: bold;
          line-height: 1;
          transition: font-size .5s ease-in-out;
        }
      }

      &.navbar--scrolled {
        background-color: white;
        padding-block: .4em;

        & .container .logo {
          font-size: 2.5em;
        }
      }
    }

    .navbar__nav_button {
      display: flex;
      align-items: center;

      & ul {
        list-style-type: none;
        padding: 0;
        display: flex;

        & li a {
          margin-left: 1em;
          letter-spacing: 1px;
        }
      }

      & button {
        font-size: 1em;
        padding: .5em 1em;
        color: white;
        background-color: black;
        border-radius: 5px;
        margin-left: 1em;
      }
    }

    .navbar__hamburger {
      content: '';
      width: 3em;
      height: 2em;
      position: relative;

      & > div {
        width: 100%;
        height: .3em;
        border-radius: 5px;
        background-color: grey;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        &:first-child { top: 10%; }
        &:last-child { top: 90%; }
      }

      &:hover { cursor: pointer; }
    }
  `)
}

function documentScroll() {
  const pagePos = document.documentElement.scrollTop

  if (pagePos > 0 ) {
    document.querySelector('.navbar')?.classList.add('navbar--scrolled')
  } else {
    document.querySelector('.navbar')?.classList.remove('navbar--scrolled')
  }
}