import { component$, useStylesScoped$ } from '@builder.io/qwik'

export default component$(() => {
  useStylesScoped$(createStyle())

  const logos = ['elitEnterprice', 'prestige100', 'sme', 'top', 'top2023', 'topService', 'bizsafe']
  return (
    <div class="logo__marquee">
      <div class="logoList">
        {logos.map(logo => (
          <div key={`${logo}-1`} class="logo" style={{ "--logo-url": `url('/ID/${logo}.webp')`}}></div>
        ))}
      </div>
      <div class="logoList">
        {logos.map(logo => (
          <div key={`${logo}-2`} class="logo" style={{ "--logo-url": `url('/ID/${logo}.webp')`}}></div>
        ))}
      </div>
    </div>
  )
})

function createStyle() {
  return `
  .logo__marquee {
    --ani-duration: 20s;
    --logo-width: 150px;
    --logo-color: black;
    --logo-opacity: .5;

    display: flex;
    padding-block: 100px;
    overflow: hidden;
  }

  .logoList {
    display: flex;
    animation: marquee-move-left var(--ani-duration) linear infinite;
  }

  .logo {
    width: var(--logo-width);
    aspect-ratio: 3 / 2;
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
    flex-shrink: 0;
    margin-inline: calc(var(--logo-width) * .2);
    // opacity: var(--logo-opacity);
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