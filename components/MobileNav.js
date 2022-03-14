import { useRef } from 'react'
import { Popover } from '@headlessui/react'
import Link from 'components/Link'
import ThemeSwitch from 'components/ThemeSwitch'
import { XIcon } from '@heroicons/react/outline'
import Logo from 'data/logo.svg'
import services from 'data/servicesData'
import company from 'data/companyData'
import siteMetadata from 'data/siteMetadata'
import DarkLogo from 'data/logo-dark.svg'
import { useTheme } from 'next-themes'

const MobileNav = () => {
  const { theme } = useTheme()
  const buttonRef = useRef(null)
  return (
    <>
      <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-900">
        <div className="px-5 pt-5 pb-6 sm:pb-8">
          <div className="flex items-center justify-between">
            <div>
              {theme === 'dark' ? (
                <Link href="/" aria-label={siteMetadata.headerTitle}>
                  <a>
                    <DarkLogo height="50" />
                  </a>
                </Link>
              ) : (
                <Link href="/" aria-label={siteMetadata.headerTitle}>
                  <a>
                    <Logo height="50" />
                  </a>
                </Link>
              )}
            </div>

            <div>
              <ThemeSwitch />
              <Popover.Button
                className="inline-flex items-center justify-center rounded-md bg-white p-2 text-indigo-700 hover:bg-gray-100 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-gray-900"
                ref={buttonRef}
              >
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>

          <div className="mt-6 sm:mt-8">
            <nav>
              <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                {services.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                      <a>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                  </Link>
                ))}
              </div>
              <div className="mt-8 text-base">
                <Link href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  <a>
                    View all services <span aria-hidden="true">&rarr;</span>
                  </a>
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <div className="py-6 px-5">
          <div className="grid grid-cols-2 gap-4">
            <ul role="list" className="mt-5 space-y-6">
              {company.map((item) => (
                <li key={item.name} className="flow-root">
                  <Link
                    href={item.href}
                    className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                    onClick={() => buttonRef.current?.click()}
                  >
                    <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <a>
                      <span className="ml-4">{item.name}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileNav
