import { useStore, useVisibleTask$ } from "@builder.io/qwik"
// create a custom hook that will return the viewport size, it will update when resize

export default function useViewportSize() {
  const viewport = useStore({ width: 0, height: 0 })

  useVisibleTask$(({ cleanup }) => {
    if (typeof window === 'undefined') return
    viewport.width = window.innerWidth
    viewport.height = window.innerHeight
    window.addEventListener('resize', handleResize)
    cleanup(() => window.removeEventListener('resize', handleResize))

    function handleResize(e: any) {
      viewport.width = e.target.innerWidth
      viewport.height = e.target.innerHeight
    }
  })

  return viewport
}