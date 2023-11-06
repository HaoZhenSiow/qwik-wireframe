import { component$, useStylesScoped$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

import HeroSection from '~/components/hero-section/double-img-marquee';
import LogoMarquee from '~/components/logo-marquee/logo-marquee';

export default component$(() => {
  useStylesScoped$(createStyle())

  return (
    <>
      <HeroSection/>
      <main>
        <LogoMarquee />
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
}

function createStyle() {
  return `
    
  `
}