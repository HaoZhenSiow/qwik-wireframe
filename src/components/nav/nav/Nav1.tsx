import { component$, useStylesScoped$ } from "@builder.io/qwik"

const navitems = ['About', 'Services', 'Portfolio', 'Testimonials', 'Contact']

export default component$(() => {
  useStylesScoped$(`
    div {
      --btn-bg: black;
      --btn-color: white;
    }

    @media (width <= 950px) {
      div {
        display: none;
      }
    }
  `)
  
  return (
    <div class="flex items-center">
      <ul class="flex items-center gap-[1em]">
        {navitems.map((item) => (
          <li key={item}>
            <a href={`/${item}`}>{item}</a>
          </li>
        ))}
        <li>
          <button type="button" class="text-[var(--btn-color)] bg-[var(--btn-bg)] px-[1em] py-[.5em] rounded">Free Quotation</button>
        </li>
      </ul>
    </div>
  )
})