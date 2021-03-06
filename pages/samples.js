import Image from 'next/image'
import samples from 'data/samplesData'
import { PageSEO } from 'components/SEO'
import siteMetadata from 'data/siteMetadata'
import GetStartedHero from 'components/sections/GetStartedHero'

const samplesPage = () => {
  return (
    <>
      <PageSEO title={`Samples`} description={siteMetadata.description} />
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          {/* Details section */}
          <section aria-labelledby="details-heading bg-white dark:bg-gray-900">
            <GetStartedHero
              title="Here are samples of our "
              coloredTitle="natural, authentic, and clean looking photos."
              subTitle="Get Started today and let us make your job easier."
              getStarted="Book Now"
              getStartedRoute="/contact"
              freeTrial="Free Trial"
              freeTrialRoute="http://localhost:3000/freetrial"
            />

            <div className="mt-16 grid grid-cols-1 gap-y-16 bg-white dark:bg-gray-900 lg:grid-cols-2 lg:gap-x-8">
              {samples.map((s) => (
                <div key={s.id}>
                  <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
                    <Image
                      src={s.imgSrc}
                      alt="Drawstring top with elastic loop closure and textured interior padding."
                      className="h-full w-full object-cover object-center"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default samplesPage
