import { component$ } from '@builder.io/qwik'

export default component$(() => {
  // useStylesScoped$(createStyle())

  return (
    <section class="fluid-section">
      <h2 class="mt-[1.5em]">Founder's Note</h2>
      <div class="flex flex-col-reverse gte1000:flex-row items-center gte1000:justify-between">
        <div class="max-w-[38.125em]">
          <b>CASE received a total of 1,300 renovation complaints in 2021, and it was about 2/3 of all the complaints received</b>
          <p class="my-[1.5em]">Turning your dream home into a reality should never feel like navigating a minefield. I know it's a major milestone in every Singaporean's life, and it should be a journey filled with excitement, not frustration.</p>
          <p class="my-[1.5em]">You see, I've heard the stories - the complaints, the headaches, the worries. Delays, questionable practices, and work that's far from up to par. The renovation journey has had its fair share of bumps in the road for far too long.</p>
          <p class="my-[1.5em]">That's why we're here. Our mission: to ensure a smooth, stress-free journey. With a foundation of trust and transparency, we've helped [X] homeowners bring their dream homes to life. We've got your back, and we can't wait to join you on this exciting journey.</p>
          <p class="font-comforter text-[2.5em] leading-tight">Johnathon</p>
          <b>Johnathon Tan</b>
          <p>Director of FT2</p>
        </div>
        <div class="w-full gte1000:w-3/5 max-w-[500px] aspect-[3/2] bg-gray-500 self-center mb-[2em] gte1000:mb-0 gte1000:ml-[3em]"></div>
      </div>
    </section>
  )
})

// function createStyle() {
//   return ``
// }