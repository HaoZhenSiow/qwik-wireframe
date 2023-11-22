import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styled from '~/lib/styled'
import Testimonial from './Testimonial'
// import Card from '../portfolio/Card'

export default component$(() => {
  useStylesScoped$(createStyle())

  return (
    <section class="container">
      <h2>Don't Take Our Word For It. Hear What Our Customers Say.</h2>
      <div class="testimonials__container">
        <Testimonial/>
        <Testimonial/>
        <Testimonial/>
        <Testimonial/>
        <Testimonial/>
        <Testimonial/>
      </div>
      <button type="button" class="testimonials__cta">All Projects</button>
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

    .testimonials__container {
      display: grid;
      grid-gap: 1.5em;
    }

    .testimonials__cta {
      font-weight: bold;
      font-size: 1em;
      padding: 1em 2em;
      color: white;
      background-color: black;
      margin-top: 2em;
    }

    br {
      display: none;
    }

    @media (500px <= width) {
      br {
        display: inline;
      }
    }

    @media (650px <= width < 1200px) {
      .testimonials__container { grid-template-columns: repeat(2, 1fr); }
    }

    @media (width >= 1200px) {
      .testimonials__container { grid-template-columns: repeat(3, 1fr); }
    }
  `)
}