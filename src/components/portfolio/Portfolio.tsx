import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styled from '~/lib/styled'
import Card from './Card'

export default component$(() => {
  useStylesScoped$(createStyle())

  return (
    <div class="container">
      <h2>Outstanding Work and Nothing Less</h2>
      {/* <h2>Find Out What <br/>We Do Best</h2> */}
      <div class="portfolio">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <button type="button" class="view-more">All Projects</button>
    </div>
  )
})

function createStyle() {
  return styled(`
    .container {
      padding-block: 100px;
      text-align: center;
    }

    .portfolio {
      display: grid;
      grid-gap: 1.5em;
    }

    .view-more {
      font-weight: bold;
      font-size: 1em;
      padding: 1em 2em;
      color: white;
      background-color: black;
      margin-top: 2em;
    }

    @media (900px <= width < 1200px) {
      .portfolio { grid-template-columns: repeat(2, 1fr); }
    }

    @media (768px <= width) {
      br {
        display: none;
      }
    }

    @media (width >= 1200px) {
      .portfolio { grid-template-columns: repeat(3, 1fr); }
    }
  `)
}