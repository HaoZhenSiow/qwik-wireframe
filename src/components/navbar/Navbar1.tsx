import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styled from '~/lib/styled'
import useWindowScroll from '~/hooks/useWindowScroll'

import Nav1 from './nav/Nav1'
import Hamburger1 from './hamburger/Hamburger1'

export default component$(() => {
  useStylesScoped$(createStyle())
  
  const scroll = useWindowScroll()

  return (
    <div class={["navbar", scroll.value > 0 && "scrolled"]}>
      <div class="fluid-container">
        <p class="navbar__logo">LOGO</p>
        <Nav1 />
        <Hamburger1 />
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
      background-color: var(--navbar-bg);
      padding-block: 1.5em;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 50;
      transition: padding .5s ease-in-out;
    }

    .fluid-container {
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

    .navbar.scrolled {
      background-color: var(--navbar-bg-scrolled);
      padding-block: .4em;
    }

    .navbar.scrolled .navbar__logo {
      font-size: var(--logo-fs-scrolled);
    }
  `)
}
// import { component$, useStylesScoped$ } from '@builder.io/qwik'
// import styled from '~/lib/styled'
// import useWindowScroll from '~/hooks/useWindowScroll'

// import Nav1 from './nav/Nav1'
// import Hamburger1 from './hamburger/Hamburger1'

// export default component$(() => {
//   useStylesScoped$(createStyle())
  
//   const scroll = useWindowScroll()

//   const navbar = [
//     'bg-[var(--navbar-bg)]',
//     'py-[1.5em]',
//     'fixed',
//     'top-0',
//     'left-0',
//     'w-full',
//     'transition-py',
//     'duration-500',
//     'ease-in-out',
//     'z-50',
//     scroll.value > 0 && 'scrolled',
//   ]

//   return (
//     <div class={navbar}>
//       <div class="flui-container fluid-container flex justify-between items-center">
//         <p class="navbar__logo scroll-text-[2.5em] font-bold leading-none transition-fs duration-500 ease-in-out">LOGO</p>
//         <Nav1 />
//         <Hamburger1 />
//       </div>
//     </div>
//   )
// })

// function createStyle() {
//   return styled(`
//     div:not(:empty) {
//       --navbar-bg: transparent;
//       --logo-fs: 3em;
//       --navbar-bg-scrolled: white;
//       --logo-fs-scrolled: 2.5em;
      
//     }

//     .navbar__logo {
//       font-size: var(--logo-fs);
//     }

//     .scrolled {
//       background-color: var(--navbar-bg-scrolled);
//       padding-block: .4em;

//       & .container .navbar__logo {
//         font-size: var(--logo-fs-scrolled);
//       }
//     }
//   `)
// }