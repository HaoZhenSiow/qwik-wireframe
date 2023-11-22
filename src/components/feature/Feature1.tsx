import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styled from '~/lib/styled'
// import fluid from '~/lib/fluid'

export default component$(() => {
  useStylesScoped$(createStyle())

  const isLeft = false

  return (
    <div class={['container', 'section', 'feature', isLeft ? 'feature--left' : '']}>
      <div class="feature__copy">
        <h2>2-Month Handover<br/> or 50% Refund</h2>
        <p>Getting our dream home is a milestone for every Singaporean, and for most of us, it’s a once-in-a-lifetime experience.</p>
        <p>We understand your excitement about moving into your dream house, and we promise it will be a swift and stress-free process.</p>
        <p>We've partnered up with trusted and experienced vendors and contractors, and we're so confident that we'll complete the project in just 2 months.</p>
        <p>If you’re not move in after 2 months, 50% of all the fees is on us!</p>
      </div>
      <div class="visual"></div>
    </div>
  )
})

function createStyle() {
  return styled(`
    .feature {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }

    .feature__copy h2 {
      margin-top: 1.5em;
      margin-bottom: 1em;
      text-align: center;
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
      .feature {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: start;
      }

      .feature__copy h2 {
        margin-top: 0;
        text-align: left;
      }

      .visual {
        width: 100%;
      }

      .feature__copy {
        margin-right: 3em;
      }

      .feature--left {
        flex-direction: row-reverse;

        & .feature__copy {
          margin-right: 0;
          margin-left: 3em;
        }

        & .visual {
          width: 60%;
        }
      }
    }
  `)
}