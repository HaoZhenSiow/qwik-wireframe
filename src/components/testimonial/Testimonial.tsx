import { component$ } from '@builder.io/qwik'

export default component$(({ classes }: {
  classes?: string
}) => {
  // useStylesScoped$(createStyle())

  return (
    <div class={`overflow-hidden rounded-xl shadow-[3px_13px_21px_-3px_rgba(161,161,161,0.4)] ${classes}`}>
      <div class="relative w-full aspect-[3/2] bg-gray-400"></div>
      <div class="flex flex-col items-start px-[1.5em] py-[2em] -tracking-[.07em]">
        <b class="mb-[.5em]">"Professionalism, Punctuality, Responsiveness"</b>
        <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
})

// function createStyle() {
//   return styled(`

    
//   `)
// }