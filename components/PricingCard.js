import { CheckIcon } from '@heroicons/react/outline'

const PricingCard = ({ tiers, tierColumns }) => {
  return (
    <>
      <div className="bg-white pb-12 dark:bg-gray-900 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 " />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className={tierColumns}>
              {tiers.map((tier) => (
                <div key={tier.name} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                  <div className="bg-white px-6 py-8 dark:bg-prepp-blue sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex rounded-full bg-prepp-blue px-4 py-1 text-sm font-semibold uppercase tracking-wide text-white dark:bg-white dark:text-prepp-blue"
                        id="tier-standard"
                      >
                        {tier.name}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                      ${tier.priceMonthly}
                      <span className="ml-1 text-2xl font-medium">/mo</span>
                    </div>
                    <p className="mt-5 text-lg ">{tier.description}</p>
                  </div>
                  <div className="flex flex-1 flex-col justify-between space-y-6 bg-gray-50 px-6 pt-6 pb-8 sm:p-10 sm:pt-6">
                    <ul role="list" className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base text-gray-700">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-md shadow">
                      <a
                        href={tier.href}
                        className="flex items-center justify-center rounded-md border border-transparent bg-prepp-blue px-5 py-3 text-base font-medium text-white hover:bg-prepp-orange"
                        aria-describedby="tier-standard"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PricingCard
