import { component$, useStylesScoped$ } from '@builder.io/qwik'
import fluid from '~/lib/fluid'

export default component$(() => {
  useStylesScoped$(createStyle())

  return (
    <header>
      <div class="hero__visual container">
        <div class="hero__visual__marquee">
          <div class="imgList">
            <div class="img"></div>
            <div class="img"></div>
            <div class="img"></div>
            <div class="img"></div>
          </div>
          <div class="imgList">
            <div class="img"></div>
            <div class="img"></div>
            <div class="img"></div>
            <div class="img"></div>
          </div>
        </div>
        <div class="hero__visual__marquee hero__visual__marquee--reverse">
          <div class="imgList">
            <div class="img"></div>
            <div class="img"></div>
            <div class="img"></div>
            <div class="img"></div>
          </div>
          <div class="imgList">
            <div class="img"></div>
            <div class="img"></div>
            <div class="img"></div>
            <div class="img"></div>
          </div>
        </div>
      </div>
      <div class="hero__content container">
        <h1>Redefining Renovation Experience <br/>Where<br/> Trust Comes First</h1>
        <p>
          The most reliable interior design firm in Singapore, backed by over X happy customers, where your dream home is delivered, not nightmares!
        </p>
        <button type="button" class="hero__cta">Get my Quote Now</button>
        <small>It's free, no consultation fee</small>
      </div>
    </header>
  )
})

function createStyle() {
  return `
    header {
      padding-top: 100px;
      padding-bottom: 100px;
    }

    .hero__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .hero__content h1 {
      font-size: ${fluid(28, 48, 320, 1440)};
      margin-top: 1.5em;
      margin-bottom: .5em;
    }

    .hero__content h1 br:first-of-type {
      display: none;
    }

    .hero__content p {
      max-width: 38.125em;
    }

    @media (700px <= width) {
      .hero__content h1 br:first-of-type {
        display: inline;
      }

      .hero__content h1 br:last-of-type {
        display: none;
      }
    }

    .hero__visual__marquee {
      --img-width: ${fluid(200, 300, 320, 1440)};
      display: flex;
      overflow: hidden;
    }

    .hero__visual__marquee:before {
      content: "";
      position: absolute;
      z-index: 1;
      bottom: 0;
      left: 0;
      pointer-events: none;
      background-image: linear-gradient(to left, rgba(255,255,255,0), white 90%);
      width: calc(var(--img-width) * 0.2);
      height: 100%;
    }

    .hero__visual__marquee:after {
      content: "";
      position: absolute;
      z-index: 1;
      bottom: 0;
      right: 0;
      pointer-events: none;
      background-image: linear-gradient(to right, rgba(255,255,255,0), white 90%);
      width: calc(var(--img-width) * 0.2);
      height: 100%;
    }

    .hero__visual__marquee--reverse {
      margin-top: 20px;
    }

    div.imgList {
      display: flex;
      animation: marquee-move-left 20s linear infinite;
    }

    .hero__visual__marquee--reverse div.imgList {
      animation-direction: reverse;
    }

    div.img {
      aspect-ratio: 16/9;
      width: var(--img-width);
      background-color: grey;
      margin-inline: calc(var(--img-width) * .04);
      flex-shrink: 0;
    }

    @keyframes marquee-move-left {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-100%);
      }
    }

    .hero__cta {
      font-weight: bold;
      font-size: 1em;
      padding: 1em 2em;
      color: white;
      background-color: black;
      margin-top: 2em;
    }
  `
}