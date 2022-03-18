const TitleSubText = ({ title, coloredTitle, subTitle, subTitleBold }) => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="pt-12 sm:pt-16 lg:pt-24">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl space-y-2 lg:max-w-none">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                {title}
                <span className="block pb-5 font-extrabold text-prepp-orange xl:inline">
                  {coloredTitle}
                </span>
              </h1>
              <p className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">{subTitleBold}</p>
              <p className="text-xl ">{subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TitleSubText
