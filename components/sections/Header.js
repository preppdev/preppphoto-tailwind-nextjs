import Link from 'components/Link'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'
import ServicesMenu from 'components/navmenus/ServicesMenu'
import Logo from 'data/logo.svg'
import Contact from 'components/navmenus/ContactMenu'
import MobileNav from 'components/MobileNav'
import { useTheme } from 'next-themes'
import siteMetadata from 'data/siteMetadata'
import DarkLogo from 'data/logo-dark.svg'
import ThemeSwitch from 'components/ThemeSwitch'

const Header = ({ scrolled }) => {
  const { theme } = useTheme()
  let headerClass = scrolled ? ' shadow bg-gray' : ''

  return (
    <header className={headerClass}>
      <Popover className="relative">
        <div className="pointer-events-none absolute inset-0 z-30 shadow" aria-hidden="true" />
        <div className="relative z-20">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8">
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

            <ThemeSwitch />

            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md  p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
              <Popover.Group as="nav" className="flex space-x-10">
                {/* services dropdown */}
                <ServicesMenu />
                <Link
                  href="/samples"
                  className="text-base font-medium text-gray-500 hover:text-indigo-700"
                >
                  {/* samples */}
                  <a>Samples</a>
                </Link>
                {/* contact us dropdown */}
                <Contact />
              </Popover.Group>
              <div className="flex items-center md:ml-12">
                <Link
                  href="/freetrial"
                  className="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-prepp-blue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  <a>Free Trial</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
          >
            {/* Mobile Navigation */}
            <MobileNav />
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}

export default Header
