import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styled from "~/lib/styled";
import Image from '/public/id/group.jpg?jsx'

export default component$(() => {
  useStylesScoped$(styled(`
    img {
      width: 100%;
      height: 100%;
      margin-top: 100px;
    }

    div {
      display: flex;
      flex-direction: column;
      margin-top: 2em;
      gap: 1em;
    }

    p {
      max-width: 38.125em;
    }

    @media (width >= 1000px) {
      div {
        flex-direction: row;
        gap: 5em;
      }

      h1 { flex-shrink: 0; }
    }
  `))
  
  return (
    <header class="">
      <Image alt="member of the team" />
      <div class="fluid-header">
        <h1>Visualize Your Dream Space:<br />We're Your Creative Team</h1>
        <p>At FT2, we're your dedicated partners in creating spaces that truly reflect your lifestyle and vision. Our award-winning interior designers are ready to bring your dream living space to life. With FT2, your living space isn't just transformed; it's designed to complement your life seamlessly. We're here to make your vision a reality, ensuring a hassle-free and enjoyable journey.</p>
      </div>
    </header>
  )
})