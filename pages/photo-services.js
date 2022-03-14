import BeforeAfterImgSlider from 'components/BeforeAfterImgSlider'
import BeforeAfterImgGallery from 'components/BeforeAfterImgGallery'
import { CheckIcon } from '@heroicons/react/outline'
const features = [
  {
    name: 'Perfect Interior Walls',
    description:
      'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    name: 'Bright and Clean Cielings',
    description:
      'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
  },
  {
    name: 'Clean Space',
    description:
      'Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.',
  },
  {
    name: 'Skies that are beautiful',
    description:
      'Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.',
  },
  {
    name: 'Inviting clean landscapes',
    description:
      'Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.',
  },
  {
    name: 'Pixel perfect color grading',
    description:
      'Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.',
  },
  {
    name: 'Consistent look and feel',
    description:
      'Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.',
  },
  {
    name: 'Property specific edits',
    description:
      'Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.',
  },
]
const photoService = () => {
  return (
    <div>
      <main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-12 pb-8 text-center lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block  xl:inline">Let us make your job </span>{' '}
              <span className="block text-indigo-600 xl:inline"> way easier </span>{' '}
              <span className="block  xl:inline">with our team of trained photo editors </span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Our industry professionals focus on natural, authentic, and clean looking photo edits
              that will build interest, trust, and credibility to your real estate or architectural
              brand. At $0.50 a photo, our value gives you the time and resources to focus the
              things that matter to you.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-prepp-blue px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  Try for Free
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl pt-60 pb-3 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          {/* SLIDER */}
          {BeforeAfterImgSlider(0, 1)}
        </div>
        <div className="mx-auto max-w-7xl py-5 px-4 sm:px-2 lg:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block pb-5 font-extrabold text-gray-900 xl:inline">
                Professional Industry Trained Photo Editors
              </span>{' '}
            </h1>
            <span className="block font-extrabold text-indigo-600 xl:inline">Break Free</span>{' '}
            <span className="block  xl:inline">
              from the tasks that up your valuable time. Our team is ready to transform your photos
              for you.
            </span>{' '}
          </div>
          <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        {/* SLIDER GALLERY */}
        <BeforeAfterImgGallery />
      </main>
    </div>
  )
}

export default photoService
