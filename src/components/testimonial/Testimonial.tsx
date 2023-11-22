import { component$, useStyles$ } from '@builder.io/qwik'
import styled from '~/lib/styled'

export default component$(() => {
  useStyles$(createStyle())

  return (
    <div class="testimonial_card">
      <div class="testimonial__visual"></div>
      <div class="testinomial_detail">
        <h3>"Professionalism, Punctuality, Responsiveness"</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
})

function createStyle() {
  return styled(`
    .testimonial_card {
      box-shadow: 3px 13px 21px -3px rgba(161, 161, 161, 0.4);
      border-radius: 10px;
      overflow: hidden;
    }

    .testimonial__visual {
      width: 100%;
      aspect-ratio: 3 / 2;
      position: relative;
      background-color: grey;
    }

    .testinomial_detail {
      display: flex;
      flex-direction: column;
      align-items: start;
      text-align: start;
      padding: 2em 1.5em;
    }

    .testinomial_detail h3 {
      letter-spacing: -.07em;
      margin-bottom: .2em;
    }

    .testinomial_detail p {
      letter-spacing: -.07em;
      line-height: 1.4;
    }
  `)
}