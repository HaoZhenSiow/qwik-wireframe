import { component$, useStyles$ } from '@builder.io/qwik'
import styled from '~/lib/styled'

export default component$(() => {
  useStyles$(createStyle())
  
  return (
    <div class="portfolio">
      <div class="portfolio__visual"><b class="price">S$49,000</b></div>
      <div class="portfolio_detail">
        <h3>513 The Calrose</h3>
        <p>513 Tio Chu Kang Road, Singapore 787066</p>
        <div class="portfolio_detail_features">
          <p class="portfolio_detail_features_icons">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" class="h-10 w-10" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M384 240H96V136a40.12 40.12 0 0140-40h240a40.12 40.12 0 0140 40v104zM48 416V304a64.19 64.19 0 0164-64h288a64.19 64.19 0 0164 64v112"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 416v-8a24.07 24.07 0 0124-24h368a24.07 24.07 0 0124 24v8M112 240v-16a32.09 32.09 0 0132-32h80a32.09 32.09 0 0132 32v16m0 0v-16a32.09 32.09 0 0132-32h80a32.09 32.09 0 0132 32v16"></path></svg>
            3
          </p>
          <p class="portfolio_detail_features_icons">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path d="M232,96H208a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8H64V52A12,12,0,0,1,76,40a12.44,12.44,0,0,1,12.16,9.59,8,8,0,0,0,15.68-3.18A28.32,28.32,0,0,0,76,24,28,28,0,0,0,48,52V96H24A16,16,0,0,0,8,112v32a56.06,56.06,0,0,0,56,56v16a8,8,0,0,0,16,0V200h96v16a8,8,0,0,0,16,0V200a56.06,56.06,0,0,0,56-56V112A16,16,0,0,0,232,96Zm-40,8v32H144V104Zm40,40a40,40,0,0,1-40,40H64a40,40,0,0,1-40-40V112H128v32a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V112h24Z"></path></svg>
            2
          </p>
          <p class="portfolio_detail_features_icons">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M 4 4 L 4 28 L 28 28 L 28 19 L 13 19 L 13 18 L 13 16 L 13 14 L 13 12 L 13 10 L 13 8 L 13 4 L 4 4 z M 6 6 L 11 6 L 11 8 L 8 8 L 8 10 L 11 10 L 11 12 L 8 12 L 8 14 L 11 14 L 11 16 L 8 16 L 8 18 L 11 18 L 11 19.585938 L 6 24.585938 L 6 6 z M 12.414062 21 L 14 21 L 14 24 L 16 24 L 16 21 L 18 21 L 18 24 L 20 24 L 20 21 L 22 21 L 22 24 L 24 24 L 24 21 L 26 21 L 26 26 L 7.4140625 26 L 12.414062 21 z"></path></svg>
            1300 sqft
          </p>
          <p>Scandinavian</p>
        </div>
        <b>CONDO</b>
      </div>
    </div>
  )
})

function createStyle() {
  return styled(`
    .portfolio {
      box-shadow: 3px 13px 21px -3px rgba(161, 161, 161, 0.4);
      border-radius: 10px;
      overflow: hidden;
    }

    .portfolio__visual {
      width: 100%;
      aspect-ratio: 3 / 2;
      position: relative;
      background-color: grey;
    }

    .price {
      position: absolute;
      bottom: 1em;
      left: 2em;
      color: white;
    }

    .portfolio_detail {
      display: flex;
      flex-direction: column;
      align-items: start;
      text-align: start;
      padding: 2em 1.5em;

      & > h3, p {
        letter-spacing: -.07em;
      }

      & > h3 {
        margin-bottom: .2em;
      }

      & > p {
        line-height: 1.4;
      }
    }

    .portfolio_detail_features {
      display: flex;
      flex-wrap: wrap;
      margin-block: .5em;

      & > * {
        margin-right: 1em;
      }
    }

    .portfolio_detail_features_icons {
      display: flex;
      align-items: center;
      & > svg {
        margin-right: .1em;
      }
    }
  `)
}