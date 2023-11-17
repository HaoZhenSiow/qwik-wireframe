import { component$, useStylesScoped$, useVisibleTask$ } from '@builder.io/qwik'
import styled from '~/lib/styled'

export default component$(() => {
  useStylesScoped$(createStyle())
  useVisibleTask$(({ cleanup }) => {
    const items = document.querySelectorAll(".accordion-button")
    const content = document.querySelectorAll(".accordion-content")
    function toggleAccordion() {
      const itemToggle = this.getAttribute('aria-expanded')

      for (let i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
      }
      
      if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
      }

    }

    content.forEach(content => {
      const contentHeight = Math.trunc(content.getBoundingClientRect().height) + 'px'
      content.parentNode?.style?.setProperty("--content-height", contentHeight)
      console.log(content.getBoundingClientRect())
      
    })

    items.forEach(item => {
      item.addEventListener('click', toggleAccordion)
    })
    cleanup(() => {
      items.forEach(item => item.removeEventListener('click', toggleAccordion))
    })
    
  })
  return (
    <div class="container">
      <h2>Frequently Asked Questions</h2>
      <div class="faq">
      <div class="accordion-item">
        <button id="accordion-button-1" aria-expanded="false" type="button" class="accordion-button"><span class="accordion-title">Why is the moon sometimes out during the day?</span><span class="icon" aria-hidden="true"></span></button>
        <div class="accordion-content-container">
          <div class="accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <button id="accordion-button-2" aria-expanded="false" type="button" class="accordion-button">
          <span class="accordion-title">Why is the moon sometimes out during the day?</span>
          <span class="icon" aria-hidden="true"></span>
        </button>
        <div class="accordion-content-container">
          <div class="accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
          </div>
        </div>
      </div>

      </div>
    </div>
  )
})

// https://codepen.io/kathykato/details/MoZJom

function createStyle() {
  return styled(`
    .container {
      padding-block: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      --border-bot-color: grey;
      /* --active-color: #03b5d2; */
      --active-color: currentColor;
    }

    h2 {
      text-align: center;
    }

    .faq {
      max-width: 38.125em;
    }

    button {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: left;
      width: 100%;
      padding: .5em 0;
      font-size: 1em;
      font-weight: 700;
      border: none;
      background: none;
      outline: none;
      &:hover {
        cursor: pointer;
        color: var(--active-color);
      }
    }

    .icon {
      flex-shrink: 0;
      margin-left: .5em;
      position: relative;
      display: inline-block;
      width: 22px;
      height: 22px;
      &::before {
        display: block;
        position: absolute;
        content: '';
        top: 9px;
        left: 5px;
        width: 10px;
        height: 2px;
        background: currentColor;
      }
      &::after {
        display: block;
        position: absolute;
        content: '';
        top: 5px;
        left: 9px;
        width: 2px;
        height: 10px;
        background: currentColor;
      }
    }

    .accordion-content-container {
      height: 0;
      overflow: hidden;
      transition: all 200ms linear;

      /* & p:not(:last-child) {
        margin-bottom: 1em;
      } */
    }

    .accordion-content {
      padding-block-end: 1em;
      display: flex;
      flex-direction: column;
      gap: 1em;
      opacity: 0.8;
    }

  
    button[aria-expanded='true'] {
      color: var(--active-color);

      .icon:after { display: none; }

      + .accordion-content-container {
        height: var(--content-height);
      }
    }
  `)
}