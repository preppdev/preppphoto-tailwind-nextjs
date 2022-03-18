import { useRef } from 'react'

import BeforeAfterImgSlider from './BeforeAfterImgSlider'

const BeforeAfterImgGallery = () => {
  const imageContainer = useRef(undefined)

  return (
    <ul
      ref={imageContainer}
      role="list"
      className="mx-auto max-w-full space-y-4 p-1 lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-5 lg:space-y-0"
    >
      <li>{BeforeAfterImgSlider(0, 1)}</li>
      <li>{BeforeAfterImgSlider(2, 3)}</li>
      <li>{BeforeAfterImgSlider(4, 5)}</li>
      <li>{BeforeAfterImgSlider(6, 7)}</li>
    </ul>
  )
}

export default BeforeAfterImgGallery
