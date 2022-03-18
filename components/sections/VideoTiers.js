import CardGallery from 'components/CardGallery'
import PricingCard from 'components/PricingCard'
let tierColumns =
  'mx-auto max-w-md space-y-3 lg:grid lg:max-w-5xl lg:grid-cols-3 lg:gap-5 lg:space-y-0'
let tiers = [
  {
    name: 'Walkthrough',
    href: '#',
    priceMonthly: 5.0,
    description: 'Standrd Walkthrough Edit',
    features: [
      'Titles',
      'Cuts / Transitions',
      'Logos',
      'Speed Ramps',
      'Exposure Adjustments',
      'Color Adjustments / grading',
      'LUT application',
      'Cinematic Edit',
    ],
  },
  {
    name: 'Highlight Reel',
    href: '#',
    priceMonthly: 25,
    description: 'Highlight Reel Edit.',
    features: [
      'Titles',
      'Cuts / Transitions',
      'Logos',
      'Speed Ramps',
      'Exposure Adjustments',
      'Color Adjustments / grading',
      'LUT application',
      'Cinematic Edit',
    ],
  },
  {
    name: 'Cinematic',
    href: '#',
    priceMonthly: 50,
    description: 'Advanced “Cinematic” Edit.',
    features: [
      'Titles',
      'Cuts / Transitions',
      'Logos',
      'Speed Ramps',
      'Exposure Adjustments',
      'Color Adjustments / grading',
      'LUT application',
      'Cinematic Edit',
    ],
  },
]

const VideoTiers = () => (
  <CardGallery>
    <PricingCard tiers={tiers} tierColumns={tierColumns} />
  </CardGallery>
)

export default VideoTiers
