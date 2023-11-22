import { component$, useStylesScoped$ } from '@builder.io/qwik'

export default component$(() => {
  useStylesScoped$(createStyle())

  const logos = ['elitEnterprice', 'prestige100', 'sme', 'top', 'top2023', 'topService', 'bizsafe']
  return (
    <div class="logo-marquee section">
      <div class="logo-marquee__list">
        {logos.map(logo => (
          <div key={`${logo}-1`} class="logo-marquee__logo" style={{ "--logo-url": `url('/ID/${logo}.webp')`}} />
        ))}
      </div>
      <div class="logo-marquee__list">
        {logos.map(logo => (
          <div key={`${logo}-2`} class="logo-marquee__logo" style={{ "--logo-url": `url('/ID/${logo}.webp')`}} />
        ))}
      </div>
    </div>
  )
})

function createStyle() {
  return `
  .logo-marquee {
    --ani-duration: 20s;
    --logo-width: 150px;
    --logo-color: black;
    --logo-opacity: .5;

    display: flex;
    overflow: hidden;
  }

  .logo-marquee__list {
    display: flex;
    animation: marquee-move-left var(--ani-duration) linear infinite;
  }

  .logo-marquee__logo {
    width: var(--logo-width);
    aspect-ratio: 3 / 2;
    flex-shrink: 0;
    margin-inline: calc(var(--logo-width) * .2);
    line-height: 0;
    background-image: var(--logo-url);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    // background-color: var(--logo-color);
    // -webkit-mask-image: var(--logo-url);
    // -webkit-mask-size: contain;
    // -webkit-mask-repeat: no-repeat;
    // -webkit-mask-position: center;
    // mask-image: var(--logo-url);
    // mask-size: contain;
    // mask-repeat: no-repeat;
    // mask-position: center;
    // opacity: var(--logo-opacity);
  }

  .logo-marquee__logo img {
    object-fit: contain;
  }

  @keyframes marquee-move-left {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  `
}