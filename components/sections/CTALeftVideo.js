import SectionContainer from 'components/SectionContainer'
import Link from 'components/Link'

const CTALeftImage = ({ title, msg1, msg2, msg3, msg4, msg5, CTA, CTAhref, vidSrc }) => {
  return (
    <SectionContainer>
      <div className="container mx-auto py-16">
        <div className="items-center lg:flex">
          <div className="aspect-video mt-6 flex w-full items-center justify-center lg:mt-0 lg:w-1/2">
            <iframe
              className="aspect-video w-full"
              src={vidSrc}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <div className="w-full pt-8 lg:w-1/2">
            <div className="text-center lg:max-w-lg">
              <h1 className="font-saudagar pb-5 text-4xl dark:text-white">{title}</h1>
              <p className="mt-2 text-xl text-gray-600 dark:text-white">{msg1}</p>
              <p className="mt-2 text-xl text-gray-600 dark:text-white">{msg2}</p>
              <p className="mt-2 text-xl text-gray-600 dark:text-white">{msg3}</p>
              <p className="mt-2 text-xl text-gray-600 dark:text-white">{msg4}</p>
              <p className="mt-2 text-xl text-gray-600 dark:text-white">{msg5}</p>
              <button className="bg-primary lg:w-lg hover:bg-girltalk focus:bg-primary-brightLight mt-6 w-full transform rounded-3xl px-2 py-2 pt-3 transition-colors duration-200 hover:italic focus:outline-none">
                <Link
                  href={CTAhref}
                  className="font-sans font-bold uppercase text-white hover:font-sans hover:text-black md:text-2xl"
                  aria-label={`Link to ${CTA}`}
                >
                  {CTA}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default CTALeftImage
