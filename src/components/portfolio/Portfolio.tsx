import { component$,useStylesScoped$ } from '@builder.io/qwik'
import styled from '~/lib/styled'

import Card from './Card'

export default component$(() => {
  useStylesScoped$(styled(`
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h2 {
      align-self: start;
    }

    div {
      display: grid;
      gap: 1.5em;
      grid-template-columns: repeat(1, minmax(0, 1fr));

      @media (width > 650px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      @media (width > 1200px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    button {
      font-weight: bold;
      padding: 1em 2em;
      margin-top: 2em;
      background-color: black;
      color: white;
      border-radius: 5px;
    }
  `))

  return (
    <section class="fluid-section" aria-label="portfolio">
      <h2>Outstanding Work and Nothing Less</h2>
      {/* <h2 class="text-center">Outstanding Work<br class="gte650:hidden" /> and Nothing Less</h2> */}
      {/* <h2>Find Out What <br/>We Do Best</h2> */}
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <button type="button">All Projects</button>
    </section>
  )
})

// import { component$ } from '@builder.io/qwik'
// import Card from './Card'

// export default component$(() => {
//   // useStylesScoped$(createStyle())

//   return (
//     <section class="fluid-section flex flex-col items-center" aria-label="portfolio">
//       <h2 class="self-start">Outstanding Work and Nothing Less</h2>
//       {/* <h2 class="text-center">Outstanding Work<br class="gte650:hidden" /> and Nothing Less</h2> */}
//       {/* <h2>Find Out What <br/>We Do Best</h2> */}
//       <div class="grid gap-[1.5em] gte650:grid-cols-2 gte1200:grid-cols-3">
//         <Card />
//         <Card />
//         <Card />
//         <Card classes="hidden gte650:block" />
//         <Card classes="hidden gte1200:block" />
//         <Card classes="hidden gte1200:block" />
//       </div>
//       <button type="button" class="font-bold py-[1em] px-[2em] mt-[2em] bg-black text-white">All Projects</button>
//     </section>
//   )
// })

// // function createStyle() {
// //   return styled(``)
// // }