import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'
import Link from 'components/Link'
import Image from 'next/image'

const About = () => {
  return (
    <div id="About" className="relative overflow-hidden pt-16 pb-32">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
          <div>
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-prepp-blue">
                <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight">How We Do It</h2>
              <p className="mt-4 text-lg text-gray-500">
                Co-located in Virginia Beach, VA and our remote office in the Philippines, we use a
                team of highly-trained, career-level photo editors to ensure consistency and
                responsiveness to our clients. Give us a try to see the difference that we can make
                for your workflow.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex rounded-md border border-transparent bg-prepp-blue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-6">
            <blockquote>
              <div>
                <p className="text-base text-gray-500">
                  &ldquo;First talk about quality, then say something about service -- friendly,
                  easy to work with, good communication...&rdquo;
                </p>
              </div>
              <footer className="mt-3">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Image
                      loading="lazy"
                      className="h-6 w-6 rounded-full"
                      src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="text-base font-medium text-gray-700">
                    Developer833, Unsolicited Marketing Advice
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
            <Image
              loading="lazy"
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/5e66acca-4d1b-442d-b15f-5d6d40dbc0c6/Team.jpg?format=1500w"
              alt="Inbox user interface"
              width={711}
              height={616}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
