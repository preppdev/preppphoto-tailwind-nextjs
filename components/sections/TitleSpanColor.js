const TitleSpanColor = ({ title, coloredTitle, subTitle, subTitleBold, children }) => {
  return (
    <div className="mx-auto max-w-7xl py-5 px-4 sm:px-2 lg:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900  sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          {title}
          <span className="block pb-5 font-extrabold text-prepp-blue xl:inline">
            {coloredTitle}
          </span>
        </h1>
        <span className="block font-extrabold  xl:inline">{subTitleBold}</span>
        <span className="block  xl:inline">{subTitle}</span>
      </div>
    </div>
  )
}

export default TitleSpanColor
