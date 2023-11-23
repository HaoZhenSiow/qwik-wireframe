import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styled from '~/lib/styled'

export default component$(() => {
  useStylesScoped$(createStyle())

  const logos = ['elitEnterprice', 'prestige100', 'sme', 'top', 'top2023', 'topService', 'bizsafe']

  return (
    <section class="fluid-section flex overflow-hidden" aria-label="awards and accreditations marquee">
      {Array(2).fill('x').map((x, idx) => (
        <div key={idx} class="flex animate-[marquee_20s_linear_infinite]">
          {logos.map(logo => (
            <div key={`${logo}-1`} class="logo-list w-36 aspect-[3/2] leading-none mx-7" style={{ "--logo-url": `url('/ID/${logo}.webp')`}} />
          ))}
        </div>
      ))}
    </section>
  )
})

function createStyle() {
  return styled(`
    .logo-list {
      background-image: var(--logo-url);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  `)
  // --logo-color: black;
  // background-color: var(--logo-color);
  // -webkit-mask-image: var(--logo-url);
  // -webkit-mask-size: contain;
  // -webkit-mask-repeat: no-repeat;
  // -webkit-mask-position: center;
  // mask-image: var(--logo-url);
  // mask-size: contain;
  // mask-repeat: no-repeat;
  // mask-position: center;
}