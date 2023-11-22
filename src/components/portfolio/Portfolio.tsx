import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styled from '~/lib/styled'
import Card from './Card'

export default component$(() => {
  useStylesScoped$(createStyle())

  return (
    <section class="container">
      <h2>Outstanding Work and Nothing Less</h2>
      {/* <h2>Find Out What <br/>We Do Best</h2> */}
      <div class="portfolio__container">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <button type="button" class="portfolio__cta">All Projects</button>
    </section>
  )
})

function createStyle() {
  return styled(`
    section {
      text-align: center;
    }

    h2 {
      text-align: start;
    }

    .portfolio__container {
      display: grid;
      grid-gap: 1.5em;
    }

    .portfolio__cta {
      font-weight: bold;
      font-size: 1em;
      padding: 1em 2em;
      color: white;
      background-color: black;
      margin-top: 2em;
    }

    @media (650px <= width < 1200px) {
      .portfolio__container { grid-template-columns: repeat(2, 1fr); }
    }


    @media (width >= 1200px) {
      .portfolio__container { grid-template-columns: repeat(3, 1fr); }
    }
  `)
}