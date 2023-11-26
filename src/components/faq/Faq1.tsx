import { component$, useSignal, useStylesScoped$ } from '@builder.io/qwik'
import styled from '~/lib/styled'

import Accordion from './Accordion'
import Qna from './Qna'

export default component$(() => {
  useStylesScoped$(styled(`
    .faq {
      display: flex;
      flex-direction: column;
      column-gap: 1.5em;

      @media (width > 1000px) {
        flex-direction: row;
      }
    }
  `))

  const expansionSig = useSignal(Array(Qna.length).fill(false)),
        expansionSig2 = useSignal(Array(Qna.length).fill(false))

  return (
    <section class="fluid-section">
      <h2>Frequently Asked Questions</h2>
      <div class="faq">
        <div>
          {Qna.map((item, idx) => (
            <Accordion key={'1 ' + idx} idx={idx} expansionSig={expansionSig} item={item}/>
          ))}
        </div>
        <div>
          {Qna.map((item, idx) => (
            <Accordion key={'2 ' + idx} idx={idx} expansionSig={expansionSig2} item={item}/>
          ))}
        </div>
      </div>
    </section>
  )
})

// https://codepen.io/kathykato/details/MoZJom

// import { component$, useSignal } from '@builder.io/qwik'

// import Accordion from './Accordion'
// import Qna from './Qna'

// export default component$(() => {
//   // useStylesScoped$(createStyle())
//   const expansionSig = useSignal(Array(Qna.length).fill(false))
//   return (
//     <section class="fluid-section flex flex-col">
//       <h2>Frequently Asked Questions</h2>
//       <div>
//         {Qna.map((item, idx) => (
//           <Accordion key={idx} idx={idx} expansionSig={expansionSig} item={item}/>
//         ))}
//       </div>
//     </section>
//   )
// })

// // https://codepen.io/kathykato/details/MoZJom

// // function createStyle() {
// //   return styled(`

// //   `)
// // }