import { component$, useStylesScoped$ } from '@builder.io/qwik'

export default component$(() => {
  useStylesScoped$(createStyle())

  return (
    <section class="container">
      <div class="copy">
        <h2>Crack the Code to<br /> Transparent Renovation Pricing</h2>
        <p>Hidden costs and unexpected expenses can turn your dream home project into a financial nightmare. But worry not! We've introduced E Build Assist, a revolutionary quotation system that provides you:</p>
        <ul>
          <li>Accurate Quotation in Just 1 Hour</li>
          <li>Drag-and-Drop Features which you can Easily Customize Your Quotation</li>
          <li>Access the User-Friendly Platform within 3 days from Your First Consultation</li>
          <li>Transparent Cost Breakdown</li>
          <li>Effortless Comparison with Other Agencies’ Quotation</li>
          <li>Comprehensive Insight into Your Home Transformation Process</li>
        </ul>
      </div>
      <div class="visual"></div>
    </section>
  )
})

function createStyle() {
  return `
    .container {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }

    h2 {
      margin-top: 1.5em;
      margin-bottom: 1em;
    }

    br {
      display: none;
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
      }

      h2 {
        margin-top: 0;
      }

      br {
        display: inline;
      }

      .visual {
        margin-left: 3em;
      }
    }
  `
}