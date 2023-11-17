import { component$, useStylesScoped$, useStyles$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import styled from '~/lib/styled'
import fluid from '~/lib/fluid'

import Navbar1 from '~/components/nav/navbar1'
import HeroSection from '~/components/hero-section/double-img-marquee'
import LogoMarquee from '~/components/logo-marquee/logo-marquee'
import Feature1 from '~/components/feature/Feature1'
import Feature2 from '~/components/feature/Feature2'
import Portfolio from '~/components/portfolio/Portfolio'
import TestimonialSection from '~/components/testimonial/TestimonialSection'
import FAQ from '~/components/faq/FAQ'

export default component$(() => {
  useStyles$(createStyle())

  return (
    <>
      <Navbar1 navitems={['About', 'Services', 'Portfolio', 'Testimonials', 'Contact']}/>
      <HeroSection/>
      <main>
        <LogoMarquee />
        <Feature1/>
        <Feature2/>
        <Portfolio/>
        <TestimonialSection/>
        <FAQ/>
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

function createStyle() {
  return styled(`
    h2 {
      font-size: ${fluid(26, 44, 320, 1440)};
      margin-top: 1.5em;
      margin-bottom: 2em;
    }

    footer {
      height: 800px;
      width: 100%;
    }

    @media (1000px <= width) {
      h2 {
        margin-top: 0;
      }
    }
  `)
}