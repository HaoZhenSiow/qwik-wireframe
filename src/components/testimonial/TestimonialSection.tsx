import { component$ } from '@builder.io/qwik'
import Testimonial from './Testimonial'
// import Card from '../portfolio/Card'

export default component$(() => {
  // useStylesScoped$(createStyle())

  return (
    <section class="fluid-section flex flex-col items-center">
      <h2 class="self-start">Don't Take Our Word For It. Hear What Our Customers Say.</h2>
      <div class="grid gap-[1.5em] gte650:grid-cols-2 gte1200:grid-cols-3">
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial classes="hidden gte650:block" />
        <Testimonial classes="hidden gte1200:block" />
        <Testimonial classes="hidden gte1200:block" />
      </div>
      <button type="button" class="font-bold py-[1em] px-[2em] mt-[2em] bg-black text-white">All Projects</button>
    </section>
  )
})

// function createStyle() {
//   return styled(``)
// }