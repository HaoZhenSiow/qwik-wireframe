import { component$ } from '@builder.io/qwik'

export default component$(() => {
  // useStylesScoped$(createStyle())

  return (
    <section class="fluid-section flex flex-col-reverse gte1000:flex-row-reverse items-center gte1000:justify-between">
      <div >
        <h2 class="mt-[1.5em] mb-[1em] gte1000:mt-0">2-Month Handover or 50% Refund</h2>
        <p class="max-w-[38.125em] my-[1.5em]">Getting our dream home is a milestone for every Singaporean, and for most of us, it&apos;s a once-in-a-lifetime experience.</p>
        <p class="max-w-[38.125em] my-[1.5em]">We understand your excitement about moving into your dream house, and we promise it will be a swift and stress-free process.</p>
        <p class="max-w-[38.125em] my-[1.5em]">We've partnered up with trusted and experienced vendors and contractors, and we're so confident that we'll complete the project in just 2 months.</p>
        <p class="max-w-[38.125em] my-[1.5em]">If you&apos;re not move in after 2 months, 50% of all the fees is on us!</p>
      </div>
      <div class="w-full gte1000:w-3/5 max-w-[500px] aspect-[3/2] bg-gray-500 self-center gte1000:mr-[3em]"></div>
    </section>
  )
})

// function createStyle() {
//   return styled(``)
// }