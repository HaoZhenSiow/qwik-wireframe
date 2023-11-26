import { component$, useStylesScoped$ } from "@builder.io/qwik"
import styled from "~/lib/styled"

export default component$(() => {
  useStylesScoped$(styled(`
    .hamburger {
      --width: 3em;
      --color: gray;
      position: relative;
      width: var(--width);
      aspect-ratio: 3/2;
      cursor: pointer;
    }

    .hamburger__bar {
      width: 100%;
      height: 15%;
      border-radius: 10px;
      background-color: var(--color);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .hamburger__bar:first-child {
      top: 10%;
    }

    .hamburger__bar:last-child {
      top: 90%;
    }

    @media (width > 950px) {
      .hamburger {
        display: none;
      }
    }
  `))

  return (
    <div class="hamburger">
      <div class="hamburger__bar"/>
      <div class="hamburger__bar"/>
      <div class="hamburger__bar"/>
    </div>
  )
})

// import { component$, useStylesScoped$ } from "@builder.io/qwik"

// export default component$(() => {
//   useStylesScoped$(`
//     div:not(:empty) {
//       --width: 3em;
//       --color: gray;
//     }

//     @media (width > 950px) {
//       div:not(:empty) {
//         display: none;
//       }
//     }
//   `)

//   const bar = [
//     'w-full',
//     'h-[15%]',
//     'bg-[var(--color)]',
//     'rounded',
//     'absolute',
//     'left-1/2',
//     'translate-x-[-50%]',
//     'translate-y-[-50%]',
//   ]

//   return (
//     <div class="relative w-[var(--width)] aspect-[3/2] cursor-pointer">
//       <div class={[...bar, 'top-[10%]']}/>
//         <div class={[...bar, 'top-1/2']}/>
//         <div class={[...bar, 'top-[90%]']}/>
//     </div>
//   )
// })