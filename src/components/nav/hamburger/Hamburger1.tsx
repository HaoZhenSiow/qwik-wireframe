import { component$, useStylesScoped$ } from "@builder.io/qwik"

export default component$(() => {
  useStylesScoped$(`
    div:not(:empty) {
      --width: 3em;
      --color: gray;
    }

    @media (width > 950px) {
      div:not(:empty) {
        display: none;
      }
    }
  `)

  const bar = [
    'w-full',
    'h-[15%]',
    'bg-[var(--color)]',
    'rounded',
    'absolute',
    'left-1/2',
    'translate-x-[-50%]',
    'translate-y-[-50%]',
  ]

  return (
    <div class="relative w-[var(--width)] aspect-[3/2] cursor-pointer">
      <div class={[...bar, 'top-[10%]']}/>
        <div class={[...bar, 'top-1/2']}/>
        <div class={[...bar, 'top-[90%]']}/>
    </div>
  )
})