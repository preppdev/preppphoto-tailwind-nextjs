import { Fragment, useRef } from 'react'
import Image from 'next/image'
import Link from 'components/Link'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import company from 'data/companyData'
import samples from 'data/samplesData'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Contact = () => {
  const buttonRef = useRef(null)
  return (
    <Popover>
      {({ open }) => {
        return (
          <>
            <Popover.Button
              className={classNames(
                open ? 'text-indigo-700' : 'text-gray-500',
                'group inline-flex items-center rounded-md text-base font-medium hover:text-prepp-orange focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 '
              )}
              ref={buttonRef}
            >
              <span>Contact Us</span>
              <ChevronDownIcon
                className={classNames(
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-prepp-orange'
                )}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform bg-white shadow-lg dark:bg-gray-900 md:block">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2" />
                  <div className="w-1/2" />
                </div>
                <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                  <nav className="grid gap-y-10 px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                    <div>
                      <h3 className="text-sm font-medium uppercase tracking-wide text-gray-500">
                        Company
                      </h3>
                      <ul role="list" className="mt-5 space-y-6">
                        {company.map((item) => (
                          <li key={item.name} className="flow-root">
                            <Link
                              href={item.href}
                              className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-indigo-700 hover:bg-gray-50"
                              onClick={() => buttonRef.current?.click()}
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="ml-4">{item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </nav>
                  <div className="bg-white px-4 py-8 dark:bg-gray-900 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                    <div>
                      <h3 className="text-sm font-medium uppercase tracking-wide text-gray-500">
                        From our samples
                      </h3>
                      <ul role="list" className="mt-6 space-y-6">
                        {samples
                          .filter((x) => x < 2)
                          .map((sample) => (
                            <li key={sample.id} samples={sample} className="flow-root">
                              <Link
                                href={sample.href}
                                className="-m-3 flex rounded-lg p-3 hover:bg-gray-900"
                                onClick={() => buttonRef.current?.click()}
                              >
                                <div className="hidden flex-shrink-0 sm:block">
                                  <Image
                                    loading="lazy"
                                    className="rounded-md object-cover"
                                    src={sample.imageSrc}
                                    alt={sample.title}
                                    height={sample.height}
                                    width={sample.width}
                                  />
                                </div>
                                <div className="w-0 flex-1 sm:ml-8">
                                  <h4 className="truncate text-base font-medium text-white">
                                    {sample.name}
                                  </h4>
                                  <p className="mt-1 text-sm text-gray-500">{sample.preview}</p>
                                </div>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div className="mt-6 text-sm font-medium">
                      <Link
                        href="/samples"
                        className="text-indigo-600 hover:text-indigo-500"
                        onClick={() => buttonRef.current?.click()}
                      >
                        View All Samples <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )
      }}
    </Popover>
  )
}
export default Contact
