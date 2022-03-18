import GetStartedHero from 'components/sections/GetStartedHero'
import VideoTiers from 'components/sections/VideoTiers'
import TitleSubText from 'components/TitleSubText'

const videos = [
  {
    className: 'aspect-video w-full',
    src: 'https://player.vimeo.com/video/537317894?h=712e02bd53&app_id=122963',
    allow:
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  },
  {
    className: 'aspect-video w-full',
    src: 'https://player.vimeo.com/video/641919142?h=d7ea6014f7&app_id=122963',
    allow:
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  },
  {
    className: 'aspect-video w-full',
    src: 'https://player.vimeo.com/video/537325941?h=d1c4854e66&app_id=122963',
    allow:
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  },
]
const videoEditing = () => (
  <>
    <GetStartedHero
      title=""
      coloredTitle="Start now for $5,"
      subTitleBold="Let's us work on the wow factor of your videos, freeing you to work on next projects!"
      subTitle="Our Team has the skills and depth to understand you video editing style and needs. Book now for a free trial, our risk free method of calibrating our edits to your specifications."
      getStarted="Start Now"
      getStartedRoute="/contact"
      freeTrial="Free Trial"
      freeTrialRoute="http://localhost:3000/freetrial"
    />
    <div className="mx-auto max-w-screen-2xl pt-16 pb-3 lg:inset-y-0">
      <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1">
        <iframe
          className="w-full"
          src="https://player.vimeo.com/video/537317894?h=712e02bd53&app_id=122963"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allow-fullscreen"
        ></iframe>
      </div>
    </div>

    <div className="mx-auto max-w-7xl py-5 px-4 sm:px-2 lg:py-24 lg:px-8">
      <TitleSubText
        title="Video Editing"
        coloredTitle="On Your Terms"
        subTitleBold="Let our industry trained professional photo Editors  "
        subTitle="Think of it like your Personal Professional Team of video editing Assistants"
      />
      <VideoTiers />
      <div className="mt-12">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-6"
        >
          {videos.map((e) => (
            <li key={e.source} className="relative">
              <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <iframe className={e.className} src={e.src} allow={e.allow}></iframe>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
)

export default videoEditing
