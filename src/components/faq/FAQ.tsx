import { component$, useSignal, useStyles$ } from '@builder.io/qwik'
import styled from '~/lib/styled'

import Accordion from './Accordion'
import Qna from './Qna'

export default component$(() => {
  useStyles$(createStyle())
  const expansionSig = useSignal(Array(Qna.length).fill(false))
  return (
    <div class="container faq__container">
      <h2 class="faq__title">Frequently Asked Questions</h2>
      <div class="faq__content">
        {Qna.map((item, idx) => (
          <Accordion key={idx} idx={idx} expansionSig={expansionSig} item={item}/>
        ))}
      </div>
    </div>
  )
})

// https://codepen.io/kathykato/details/MoZJom

function createStyle() {
  return styled(`
    .faq__container {
      padding-block: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .faq__title {
      text-align: center;
    }

    .faq__content {
      max-width: 38.125em;
      width: 100%;
    }
  `)
}