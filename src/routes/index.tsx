import { component$, useStylesScoped$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

import Navbar1 from '~/components/nav/navbar1'
import HeroSection from '~/components/hero-section/double-img-marquee'
import LogoMarquee from '~/components/logo-marquee/logo-marquee'
import Feature1 from '~/components/feature/Feature1'
import Feature2 from '~/components/feature/Feature2'

export default component$(() => {
  useStylesScoped$(createStyle())

  return (
    <>
      <Navbar1 navitems={['About', 'Services', 'Portfolio', 'Testimonials', 'Contact']}/>
      <HeroSection/>
      <main>
        <LogoMarquee />
        <Feature1/>
        <Feature2/>
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