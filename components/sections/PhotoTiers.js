import CardGallery from 'components/CardGallery'
import PricingCard from 'components/PricingCard'
let tierColumns =
  'mx-auto max-w-md space-y-3 lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-5 lg:space-y-0'
let tiers = [
  {
    name: 'Interior Package',
    href: '#',
    priceMonthly: 0.5,
    description:
      'For just $0.50 per Photo, we can take care of all your interior photos while you have lunch with new clients.',
    features: ['Perfect Wall Color', 'Perfect Ceiling Color'],
  },
  {
    name: 'Exterior Package',
    href: 'http://localhost:3000/freetrial',
    priceMonthly: 0.5,
    description:
      'With most finished images costing just $0.50 each, we can take care of all your exterior photos while you focus on your business.',
    features: ['Perfect Skies', 'Enhanced Landscaping(Green Grass + Filled Spots)'],
  },
]
const PhotoTiers = () => (
  <CardGallery>
    <PricingCard tiers={tiers} tierColumns={tierColumns} />
  </CardGallery>
)

export default PhotoTiers
