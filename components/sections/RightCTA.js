import Image from 'next/image'
import Link from 'components/Link'
import { SparklesIcon } from '@heroicons/react/outline'

const RightCTA = ({ title, text, hrefCTA, CTA, imgSrc, altImg }) => {
  return (
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
        <div>
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-prepp-purple to-prepp-blue">
              <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">{title}</h2>
            <p className="mt-4 text-lg text-gray-500">{text}</p>
            <div className="mt-6">
              <Link
                href={hrefCTA}
                className="inline-flex rounded-md border border-transparent bg-prepp-blue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-prepp-orange"
              >
                <a>{CTA}</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
        <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
          <Image
            loading="lazy"
            className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            src={imgSrc}
            alt={altImg}
            width={711}
            height={616}
          />
        </div>
      </div>
    </div>
  )
}

export default RightCTA
