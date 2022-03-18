import Link from 'components/Link'
import TitleSubText from 'components/TitleSubText'

const GetStartedHero = ({
  getStartedRoute,
  getStarted,
  freeTrial,
  freeTrialRoute,
  title,
  coloredTitle,
  subTitle,
  subTitleBold,
}) => {
  return (
    <div className="mx-auto w-full max-w-7xl pb-8 text-center lg:py-12 ">
      <div className="pt-4 sm:pt-5 lg:pt-6">
        <TitleSubText
          title={title}
          coloredTitle={coloredTitle}
          subTitleBold={subTitleBold}
          subTitle={subTitle}
        />

        <div className="mt-10 sm:flex sm:justify-center lg:justify-center">
          <div className="rounded-md shadow">
            <Link
              href={getStartedRoute}
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-prepp-blue px-8 py-3 text-base font-medium text-white hover:bg-prepp-orange md:py-4 md:px-10 md:text-lg"
            >
              <a>{getStarted}</a>
            </Link>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Link
              href={freeTrialRoute}
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
            >
              <a>{freeTrial}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStartedHero
