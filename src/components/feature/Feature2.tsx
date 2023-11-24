import { component$ } from '@builder.io/qwik'

export default component$(() => {
  // useStylesScoped$(createStyle())

  return (
    <section class="fluid-section flex flex-col-reverse gte1000:flex-row items-center gte1000:justify-between">
      <div>
        <h2 class="mt-[1.5em] mb-[1em] gte1000:mt-0">Crack the Code to<br class="hidden gte1000:inline" /> Transparent Renovation Pricing</h2>
        <p class="max-w-[38.125em] my-[1.5em]">Hidden costs and unexpected expenses can turn your dream home project into a financial nightmare. But worry not! We&apos;ve introduced E Build Assist, a revolutionary quotation system that provides you:</p>
        <ul class="list-disc ml-[2em]">
          <li class="my-[.5em]">Accurate Quotation in Just 1 Hour</li>
          <li class="my-[.5em]">Drag-and-Drop Features which you can Easily Customize Your Quotation</li>
          <li class="my-[.5em]">Access the User-Friendly Platform within 3 days from Your First Consultation</li>
          <li class="my-[.5em]">Transparent Cost Breakdown</li>
          <li class="my-[.5em]">Effortless Comparison with Other Agencies&apos; Quotation</li>
          <li class="my-[.5em]">Comprehensive Insight into Your Home Transformation Process</li>
        </ul>
      </div>
      <div class="w-full gte1000:w-3/5 max-w-[500px] aspect-[3/2] bg-gray-500 self-center gte1000:ml-[3em]"></div>
    </section>
  )
})

// function createStyle() {
//   return ``
// }