import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styled from '~/lib/styled'
import fluid from '~/lib/fluid'

export default component$(() => {
  useStylesScoped$(styled(`
    header {
      --title-fs: ${fluid(30, 52, 320, 1440)};
      padding-top: ${fluid(100, 140, 320, 1440)};
    }

    h1 {
      font-size: var(--title-fs);
    }
  `))

  const heroImages = ['1', '2', '3', '4', '5']

  return (
    <header class="fluid-header">
      <div class="flex flex-col items-center text-center">
        <h1 class="mt-[1em]">Redefining Renovation Experience <br class="hidden md:inline" />Where<br class="sm:hidden" /> Trust Comes First</h1>
        <p class="max-w-[38.125em] py-[2em]">
          The most reliable interior design firm in Singapore, backed by over X happy customers, where your dream home is delivered, not nightmares!
        </p>
        <button type="button" class="font-bold py-[1em] px-[2em] bg-black text-white">Get my Quote Now</button>
        <small>It's free, no consultation fee</small>
      </div>
      <div class="flex flex-col gap-5">
        <Marquee heroImages={heroImages} />
        <Marquee heroImages={heroImages} reverse />
      </div>
    </header>
  )
})

const Marquee = component$(({ heroImages, reverse }: {
  heroImages: string[],
  reverse?: boolean
}) => {
  useStylesScoped$(styled(`
    .marquee {
      --img-width: ${fluid(250, 300, 320, 1440)};
      --mask-gradient: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 52%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%);
      -webkit-mask-image: var(--mask-gradient);
      mask-image: var(--mask-gradient);
    }
  `))

  const animate: string = reverse ? 'animate-[marquee_20s_linear_infinite]' : 'animate-[marquee_20s_linear_infinite_reverse]'
  
  return (
    <div class={`marquee relative flex overflow-hidden`}>
      {Array(2).fill('x').map((x, idx) => (
        <div key={idx} class={`flex ${animate}`}>
          {heroImages.map((img, idx) => (
            <div key={idx} class={`aspect-video w-[--img-width] bg-gray-500 mx-2.5 rounded-xl`}></div>
          ))}
        </div>
      ))}
    </div>
  )
})