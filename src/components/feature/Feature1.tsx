import { component$, useStylesScoped$ } from '@builder.io/qwik'
import fluid from '~/lib/fluid'

export default component$(() => {
  useStylesScoped$(createStyle())

  return (
    <div>
      <div class="container">
        <div class="copy">
          <h2>2-Month Handover<br/>or 50% Refund</h2>
          <p>Getting our dream home is a milestone for every Singaporean, and for most of us, it’s a once-in-a-lifetime experience.</p>
          <p>We understand your excitement about moving into your dream house, and we promise it will be a swift and stress-free process.</p>
          <p>We've partnered up with trusted and experienced vendors and contractors, and we're so confident that we'll complete the project in just 2 months.</p>
          <p>If you’re not move in after 2 months, 50% of all the fees is on us!</p>
        </div>
        <div class="visual"></div>
      </div>
    </div>
  )
})

function createStyle() {
  return `
    .container {
      padding-block: 100px;
      display: flex;
      flex-direction: column-reverse;
      // text-align: center;
      align-items: center;
    }

    h2 {
      font-size: ${fluid(26, 44, 320, 1440)};
      margin-top: 1.5em;
    }

    p {
      max-width: 38.125em;
      margin-block: 1.5em;
    }

    .visual {
      width: 100%;
      max-width: 500px;
      aspect-ratio: 3 / 2;
      background-color: grey;
      align-self: center;
    }

    @media (1000px <= width) {
      .container {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: start;
      }

      h2 {
        margin-top: 0;
      }

      P {
        margin-right: 3em;
      }
    }
  `
}