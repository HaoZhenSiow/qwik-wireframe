import { useSignal, useVisibleTask$ } from "@builder.io/qwik"

export default function useWindowScroll() {
  const scroll = useSignal(0)

  useVisibleTask$(({ cleanup }) => {
    window.addEventListener('scroll', handleWindowScroll)

    cleanup(() => window.removeEventListener('scroll', handleWindowScroll))

    function handleWindowScroll() {
      scroll.value = document.documentElement.scrollTop
    }

  })

  return scroll
}