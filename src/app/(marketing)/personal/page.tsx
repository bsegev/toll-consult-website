import { PersonalHero } from "@/components/sections/personal/hero"
import { PersonalFeatures } from "@/components/sections/personal/features"
import { PersonalServices } from "@/components/sections/personal/services"
import { PersonalProcess } from "@/components/sections/personal/process"
import { PersonalTestimonials } from "@/components/sections/personal/testimonials"
import { PersonalCTA } from "@/components/sections/personal/cta"

export const metadata = {
  title: 'Personal Legal Services | Toll Legal',
  description: 'Expert legal guidance for life\'s important moments. From estate planning to contract review, we make complex legal matters clear and manageable.',
}

export default function PersonalPage() {
  return (
    <>
      <PersonalHero />
      <PersonalFeatures />
      <PersonalServices />
      <PersonalProcess />
      <PersonalTestimonials />
      <PersonalCTA />
    </>
  )
} 