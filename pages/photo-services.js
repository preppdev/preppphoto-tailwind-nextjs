import PhotoTiers from 'components/sections/PhotoTiers'
import TitleSubText from 'components/TitleSubText'
import BeforeAfterImgGallery from 'components/BeforeAfterImgGallery'
import GetStartedHero from 'components/sections/GetStartedHero'

const photoService = () => (
  <>
    <GetStartedHero
      title="Let us make your job "
      coloredTitle="easy."
      subTitleBold="Our industry professionals focus on processing natural, authentic, and clean looking photos."
      subTitle="For $0.50 per photo, the value of the hours you save can be spent with family, friends, or building your brand."
      getStarted="Book Now"
      getStartedRoute="/contact"
      freeTrial="Free Trial"
      freeTrialRoute="http://localhost:3000/freetrial"
    />
    <div className="p-15">
      <BeforeAfterImgGallery />
    </div>
    <TitleSubText
      title="Break Free"
      coloredTitle=" from the Routine"
      subTitleBold="Let our industry trained professional photo Editors  "
      subTitle="Give you the time you need to transform your work and life balance."
    />
    <PhotoTiers id="#getStarted" />
  </>
)

export default photoService
