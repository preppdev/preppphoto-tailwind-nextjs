import Image from 'next/image'

const HeroCenterImage = ({ imgSrc, altText }) => {
  return (
    <div className="mx-auto max-w-7xl  items-center justify-center pt-14">
      <Image loading="lazy" src={imgSrc} alt={altText} width={1100} height={400} />
    </div>
  )
}

export default HeroCenterImage
