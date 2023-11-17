import { component$, useStylesScoped$ } from '@builder.io/qwik'

export default component$(() => {
  useStylesScoped$(createStyle())

  return (
    <div class="container">
      <div class="copy">
        <h2>Crack the Code to Transparent Renovation Pricing</h2>
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
      margin-bottom: 1em;
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
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        text-align: start;
      }

      .visual {
        margin-right: 3em;
      }
    }
  `
}