import { component$, useSignal } from '@builder.io/qwik'

import Accordion from './Accordion'
import Qna from './Qna'

export default component$(() => {
  // useStylesScoped$(createStyle())
  const expansionSig = useSignal(Array(Qna.length).fill(false))
  return (
    <section class="fluid-section flex flex-col">
      <h2>Frequently Asked Questions</h2>
      <div>
        {Qna.map((item, idx) => (
          <Accordion key={idx} idx={idx} expansionSig={expansionSig} item={item}/>
        ))}
      </div>
    </section>
  )
})

// https://codepen.io/kathykato/details/MoZJom

// function createStyle() {
//   return styled(`

//   `)
// }