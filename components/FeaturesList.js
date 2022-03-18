const FeaturesList = ({ featuresTitle, children }) => {
  return (
    <>
      <h3 className="text-xs font-medium uppercase tracking-wide text-gray-900 dark:text-indigo-700">
        {featuresTitle}
      </h3>
      <ul role="list" className="mt-6 space-y-4">
        {children}
      </ul>
    </>
  )
}

export default FeaturesList
