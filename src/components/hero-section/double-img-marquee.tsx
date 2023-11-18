import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styled from '~/lib/styled'
import fluid from '~/lib/fluid'
import useViewportSize from '~/hooks/useViewportSize'

export default component$(() => {
  useStylesScoped$(createStyle())

  const viewport = useViewportSize(),
        isMidScreen = viewport.width >= 650

  return (
    <header>
      <div class="hero__visual container">
        <Marquee />
        <Marquee reverse />
      </div>
      <div class="hero__content container">
        <h1 class="hero__title">Redefining Renovation Experience {isMidScreen && <br />}Where{!isMidScreen && <br />} Trust Comes First</h1>
        <p class="hero__desc">
          The most reliable interior design firm in Singapore, backed by over X happy customers, where your dream home is delivered, not nightmares!
        </p>
        <button type="button" class="hero__cta">Get my Quote Now</button>
        <small class="hero__small">It's free, no consultation fee</small>
      </div>
    </header>
  )
})

const Marquee = component$(({ reverse }: {
  reverse?: boolean
}) => {
  const heroImages = ['1', '2', '3', '4', '5']
  const repeat = 2

  useStylesScoped$(styled(`
    .marquee {
      --img-width: ${fluid(250, 300, 320, 1440)};
      --ani-duration: 20s;
      display: flex;
      overflow: hidden;
      position: relative;
    }

    .marquee:before, .marquee:after {
      content: "";
      position: absolute;
      z-index: 1;
      bottom: 0;
      width: calc(var(--img-width) * 0.2);
      height: 100%;
      background-image: linear-gradient(to var(--dir), rgba(255,255,255,0), white 90%);
    }

    .marquee:before {
      --dir: left;
      left: -5px;
    }

    .marquee:after {
      --dir: right;
      right: -2px;
    }

    .marquee_row {
      display: flex;
      animation: marquee-move var(--ani-duration) linear infinite;
    }

    .marquee--reverse .marquee_row {
      animation-direction: reverse;
    }

    .marquee__img {
      aspect-ratio: 16/9;
      width: var(--img-width);
      background-color: grey;
      margin-inline: calc(var(--img-width) * .04);
      border-radius: 10px;
      flex-shrink: 0;
    }

    @keyframes marquee-move {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-100%);
      }
    }
  `))
  
  return (
    <div class={`marquee ${reverse && 'marquee--reverse'}`}>
      {Array(repeat).fill('x').map((x, idx) => (
        <div key={idx} class="marquee_row">
          {heroImages.map((img, idx) => (
            <div key={idx} class="marquee__img"></div>
          ))}
        </div>
      ))}
    </div>
  )
})

function createStyle() {
  return styled(`
    header {
      --title-fs: ${fluid(28, 48, 320, 1440)};
      --cta-fs: 1em;
      --cta-color: white;
      --cta-bg: black;
      padding-top: ${fluid(100, 140, 320, 1440)};
      padding-bottom: 100px;
    }

    .hero__visual {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .hero__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .hero__title {
      font-size: var(--title-fs);
      margin-top: 1.5em;
      margin-bottom: .5em;
    }

    .hero__desc {
      max-width: 38.125em;
    }

    .hero__cta {
      font-weight: bold;
      font-size: var(--cta-fs);
      padding: 1em 2em;
      color: var(--cta-color);
      background-color: var(--cta-bg);
      margin-top: 2.5em;
    }
  `)
}