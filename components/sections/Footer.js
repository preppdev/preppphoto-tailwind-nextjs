import Link from 'components/Link'
import SocialIcon from 'components/social-icons'
import Logo from 'data/logo.svg'
import services from 'data/servicesData'
import samples from 'data/samplesData'
import company from 'data/companyData'
import legal from 'data/legalData'
import siteMetadata from 'data/siteMetadata'
import { useTheme } from 'next-themes'
import DarkLogo from 'data/logo-dark.svg'
import ThemeSwitch from 'components/ThemeSwitch'

const Footer = () => {
  const { theme } = useTheme()

  return (
    <div className="mt-60">
      <footer className="bg-white dark:bg-gray-900" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
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
              <p className="text-base text-gray-500">
                Real Estate Photo Post Processing Based in Virginia Beach, VA
              </p>
              <div className="flex space-x-6">
                <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
                <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {services.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          <a>{service.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Samples
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {samples
                      .filter((x) => x < 2)
                      .map((sample) => (
                        <li key={sample.name} samples={sample}>
                          <Link
                            href={sample.href}
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            <a>{sample.name}</a>
                          </Link>
                        </li>
                      ))}
                  </ul>
                  <div className="mt-6 text-sm font-medium">
                    <Link href="/samples" className="text-indigo-600 hover:text-indigo-500">
                      View All Samples <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
                <div>
                  <ThemeSwitch />
                </div>
              </div>

              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Company
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {company.map((co) => (
                      <li key={co.name}>
                        <Link
                          href={co.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          <a>{co.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Legal
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {legal.map((leg) => (
                      <li key={leg.name}>
                        <Link
                          href={leg.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          <a>{leg.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-2 pt-4 text-sm text-black dark:text-prepp-orange">
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>{` • `}</div>
            <Link href="/">{siteMetadata.title}</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
