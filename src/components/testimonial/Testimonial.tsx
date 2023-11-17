import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styled from '~/lib/styled'

export default component$(() => {
  useStylesScoped$(createStyle())

  return (
    <div class="card">
      <div class="card__visual"></div>
      <div class="card_detail">
        <h3>"Professionalism, Punctuality, Responsiveness"</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
})

function createStyle() {
  return styled(`
    .container {
      padding-block: 100px;
      text-align: center;
    }

    .card {
      box-shadow: 3px 13px 21px -3px rgba(161, 161, 161, 0.4);
      border-radius: 10px;
      overflow: hidden;
    }

    .card__visual {
      width: 100%;
      aspect-ratio: 3 / 2;
      position: relative;
      background-color: grey;
    }

    .card_detail {
      display: flex;
      flex-direction: column;
      align-items: start;
      text-align: start;
      padding: 2em 1.5em;
    }

    h3, p {
      letter-spacing: -.07em;
    }

    h3 {
      margin-bottom: .2em;
    }

    p {
      line-height: 1.4;
    }

    @media (768px <= width) {
      br {
        display: none;
      }
    }
  `)
}