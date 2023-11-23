import { component$, } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

import HeroSection from '~/components/hero-section/double-img-marquee'
import LogoMarquee from '~/components/logo-marquee/logo-marquee'
import Feature1 from '~/components/feature/Feature1'
import Feature2 from '~/components/feature/Feature2'
import Portfolio from '~/components/portfolio/Portfolio'
import TestimonialSection from '~/components/testimonial/TestimonialSection'
import FAQ from '~/components/faq/FAQ'
import Cta1 from '~/components/cta/Cta1'

export default component$(() => {
  return (
    <>
      {/* <Navbar1/> */}
      <HeroSection/>
      <main>
        <LogoMarquee />
        <Feature2 />
        <Feature1 />
        <Portfolio />
        <TestimonialSection />
        <FAQ />
        <Cta1 />
      </main>
      {/* <footer></footer> */}
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