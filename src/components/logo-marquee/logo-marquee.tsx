import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styled from '~/lib/styled'

const logos = ['elitEnterprice', 'prestige100', 'sme', 'top', 'top2023', 'topService', 'bizsafe']

export default component$(() => {
  useStylesScoped$(styled(`
    section {
      display: flex;
      overflow: hidden;
    }

    .row {
      display: flex;
      animation: marquee 20s linear infinite;
    }

    .logo {
      width: 150px;
      aspect-ratio: 3/2;
      line-height: 0;
      margin-inline: 25px;
      background-image: var(--logo-url);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
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
  `))

  return (
    <section class="fluid-section" aria-label="awards and accreditations marquee">
      {Array(2).fill('x').map((x, idx) => (
        <div key={idx} class="row">
          {logos.map(logo => (
            <div key={`${logo}-1`} class="logo" style={{ "--logo-url": `url('/ID/${logo}.webp')`}} />
          ))}
        </div>
      ))}
    </section>
  )
})