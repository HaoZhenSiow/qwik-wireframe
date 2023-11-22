import { component$, useStyles$ } from '@builder.io/qwik'
import styled from '~/lib/styled'
import Card from './Card'

export default component$(() => {
  useStyles$(createStyle())

  return (
    <div class="container portfolio__section">
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
    </div>
  )
})

function createStyle() {
  return styled(`
    .portfolio__section {
      padding-block: 100px;
      text-align: center;
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

    .portfolio:nth-child(4), .portfolio:nth-child(5), .portfolio:nth-child(6) {
      display: none;
    }

    @media (650px <= width < 1200px) {
      .portfolio__container { grid-template-columns: repeat(2, 1fr); }
      .portfolio:nth-child(4) {
        display: block;
      }
    }


    @media (width >= 1200px) {
      .portfolio__container { grid-template-columns: repeat(3, 1fr); }
      .portfolio:nth-child(4), .portfolio:nth-child(5), .portfolio:nth-child(6) {
        display: block;
      }
    }
  `)
}