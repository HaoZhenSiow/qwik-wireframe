import { component$, useStylesScoped$ } from '@builder.io/qwik'

export default component$(({ navitems }: { navitems: string[] }) => {
  useStylesScoped$(createStyle())
  return (
    <div class="navbar">
      <div class="navbar__container container">
        <p class="navbar__logo">LOGO</p>
        <div class="navbar__nav_button">
          <ul>
            {navitems.map((item) => (
              <li><a href={`/${item}`}>{item}</a></li>
            ))}
          </ul>
          <button type='button'>Free Quotation</button>
        </div>
        <div class="navbar__hamburger">
          <div class="navbar__hamburger__line navbar__hamburger__line--top"></div>
          <div class="navbar__hamburger__line navbar__hamburger__line--middle"></div>
          <div class="navbar__hamburger__line navbar__hamburger__line--bottom"></div>
        </div>
      </div>
      
    </div>
  )
})

function createStyle() {
  return `
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      // background-color: grey;
      padding-block: 1em;
      z-index: 100;
    }
    .navbar__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-block: .5em;
    }

    .navbar__logo {
      font-size: 3em;
      font-weight: bold;
      line-height: 1;
    }

    .navbar__nav_button {
      display: flex;
      align-items: center;
    }

    .navbar__hamburger {
      display: none;
      content: '';
      width: 3em;
      height: 2em;
      position: relative;
    }

    .navbar__hamburger:hover {
      cursor: pointer;
    }

    .navbar__hamburger__line {
      width: 100%;
      height: .3em;
      border-radius: 5px;
      background-color: grey;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .navbar__hamburger__line--top {
      top: 10%;
    }
    .navbar__hamburger__line--middle {
      top: 50%;
    }
    .navbar__hamburger__line--bottom {
      top: 90%;
    }

    ul {
      list-style-type: none;
      padding: 0;
      display: flex;
    }

    li {
      margin-left: 1em;
    }

    a {
      letter-spacing: 1px;
    }

    button {
      font-size: 1em;
      padding: .5em 1em;
      color: white;
      background-color: black;
      border-radius: 5px;
      margin-left: 1em;
    }

    @media (max-width: 950px) {
      .navbar__nav_button { display: none; }
      .navbar__hamburger { display: block; }
    }
  `
}