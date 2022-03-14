import SectionContainer from 'components/SectionContainer'
import Image from 'next/image'
import samples from 'data/samplesData'
import { PageSEO } from 'components/SEO'
import siteMetadata from 'data/siteMetadata'
const samplesPage = () => {
  return (
    <>
      <PageSEO title={`Samples`} description={siteMetadata.description} />
      <SectionContainer>
        <div className="bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
            {/* Details section */}
            <section aria-labelledby="details-heading bg-white dark:bg-gray-900">
              <div className="flex flex-col items-center bg-white text-center dark:bg-gray-900">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                  <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Examples of Our Work
                  </h1>
                </div>
              </div>

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
      </SectionContainer>
    </>
  )
}

export default samplesPage
