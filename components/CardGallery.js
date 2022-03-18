import TitleSubText from 'components/TitleSubText'

const CardGallery = ({ children }) => {
  return (
    <>
      <TitleSubText />
      <div>{children}</div>
    </>
  )
}

export default CardGallery
