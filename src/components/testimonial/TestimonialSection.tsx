import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styled from '~/lib/styled'
import Testimonial from './Testimonial'
// import Card from '../portfolio/Card'

export default component$(() => {
  useStylesScoped$(createStyle())

  return (
    <div class="container testimonials">
      <h2>Don't Take Our Word For It.<br/> Hear What Our Customers Say.</h2>
      <div class="testimonials__container">
        <Testimonial/>
        <Testimonial/>
        <Testimonial/>
        <Testimonial/>
        <Testimonial/>
        <Testimonial/>
      </div>
      <button type="button" class="testimonials__cta">All Projects</button>
    </div>
  )
})

function createStyle() {
  return styled(`
    .testimonials {
      padding-block: 100px;
      text-align: center;
    }

    .testimonials__container {
      display: grid;
      grid-gap: 1.5em;
    }

    .view-testimonials__cta {
      font-weight: bold;
      font-size: 1em;
      padding: 1em 2em;
      color: white;
      background-color: black;
      margin-top: 2em;
    }

    @media (900px <= width < 1200px) {
      .testimonials__container { grid-template-columns: repeat(2, 1fr); }
    }

    @media (width >= 1200px) {
      .testimonials__container { grid-template-columns: repeat(3, 1fr); }
    }
  `)
}