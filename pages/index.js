import { PageSEO } from 'components/SEO'
import siteMetadata from 'data/siteMetadata'
import FreeTrialCTA from 'components/sections/FreeTrialCTA'
import LeftCTA from 'components/sections/LeftCTA'
import RightCTA from 'components/sections/RightCTA'
import FAQ from 'components/sections/FAQ'

const Home = () => {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <FreeTrialCTA />

      {/* What we do */}
      <LeftCTA
        title="What We Do"
        text="Designed specifically to meet the needs of real estate and architectural
        photographers, our team of editors offer excellent edits, unbeatable prices, and
        fast turnaround."
        hrefCTA="/samples"
        CTA="Samples"
        testimonial="Always good to have a testimonial, even if you write them yourself at
        first..."
        imgSrc="https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/0e55218c-db4c-46c3-9a73-0a5946717524/Done-2.jpg?format=1500w"
        imgAlt="Done"
      />
      {/* What we offer */}
      <RightCTA
        title="What We Offer"
        text="Advanced real estate photo processing, virtual twilight conversions, virtual
        staging, virtual decluttering, and more. Whether a standard service or a custom
        request, we can accommodate virtually any client need."
        hrefCTA="/services"
        CTA="Samples"
        imgSrc="https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/136a7d52-b759-46b0-914e-1500bff0c997/Grid-EditingServices.jpg?format=1500w"
      />
      {/* How we do it */}
      <LeftCTA
        title="How We Do It"
        text="Co-located in Virginia Beach, VA and our remote office in the Philippines, we use a
        team of highly-trained, career-level photo editors to ensure consistency and
        responsiveness to our clients. Give us a try to see the difference that we can make
        for your workflow."
        hrefCTA="/contact"
        CTA="Contact Us"
        testimonial="Always good to have a testimonial, even if you write them yourself at
        first..."
        imgSrc="https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/5e66acca-4d1b-442d-b15f-5d6d40dbc0c6/Team.jpg?format=1500w"
        imgAlt="Done"
      />
      <FAQ />
    </>
  )
}

export default Home
