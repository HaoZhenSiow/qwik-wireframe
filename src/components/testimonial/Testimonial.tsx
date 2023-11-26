import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styled from '~/lib/styled'

export default component$(() => {
  useStylesScoped$(styled(`
    .review {
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 3px 13px 21px -3px rgba(161,161,161,0.4);

      &:nth-child(4), &:nth-child(5), &:nth-child(6) {
        display: none;
      }

      @media (width > 650px) {
        &:nth-child(4) {
          display: block;
        }
      }

      @media (width > 1200px) {
        &:nth-child(4), &:nth-child(5), &:nth-child(6) {
          display: block;
        }
      }
    }

    .visual {
      position: relative;
      aspect-ratio: 3/2;
      background-color: #525252;
    }

    .copy {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 2em 1.5em;
      letter-spacing: -0.07em;
    }

    b { margin-bottom: .5em; }
  `))

  return (
    <div class="review">
      <div class="visual"></div>
      <div class="copy">
        <b>"Professionalism, Punctuality, Responsiveness"</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
})

// import { component$ } from '@builder.io/qwik'

// export default component$(({ classes }: {
//   classes?: string
// }) => {
//   // useStylesScoped$(createStyle())

//   return (
//     <div class={`overflow-hidden rounded-xl shadow-[3px_13px_21px_-3px_rgba(161,161,161,0.4)] ${classes}`}>
//       <div class="relative w-full aspect-[3/2] bg-gray-500"></div>
//       <div class="flex flex-col items-start px-[1.5em] py-[2em] -tracking-[.07em]">
//         <b class="mb-[.5em]">"Professionalism, Punctuality, Responsiveness"</b>
//         <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//       </div>
//     </div>
//   )
// })

// // function createStyle() {
// //   return styled(`

    
// //   `)
// // }