import Link from 'next/link'
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

import logo from '@/images/logos/logo.png'
import rocket from '@/images/request-invite-rocket.png'
import { Button } from './Button'

export default function Example() {
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect fill="white" width="100%" height="100%" strokeWidth={0} />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                />
              </svg>
            </div>
            <div className="mb-6 flex">
              <Link href="/" aria-label="Home">
                <img
                  src={logo.src}
                  alt="KeepSimple Logo"
                  className="h-16 w-auto"
                />
              </Link>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Get in touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We simplify AI integration and complex workflows, enabling
              businesses to focus on providing a more personalized human touch
              to their customers.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  545 Mavis Island
                  <br />
                  Chicago, IL 99191
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  <a href=" " className="hover:text-gray-900">
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  <a
                    href="mailto:hello@example.com"
                    className="hover:text-gray-900"
                  >
                    hello@example.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-6 pb-12 sm:pb-24 lg:px-8">
          <img
            src={rocket.src}
            alt="Rocket"
            className="h-auto w-3/5 self-center"
          />
          <h2 className="text-center text-3xl font-semibold tracking-tight text-gray-900">
            Exciting times are ahead!
          </h2>
          <h2 className="mt-4 text-center text-lg leading-8 text-gray-600">
            Enter your email address, we'll send you your unique invite link.
          </h2>

          <form action="#" method="POST" className="mt-16 w-full">
            <div className="mx-auto flex max-w-lg flex-col items-center justify-center">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Sketchme@ifyou.com"
                autoComplete="email"
                className="mb-4 block w-80 rounded-full border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="w-80 text-xl rounded-full bg-black px-4 py-4 font-extrabold text-white shadow-sm hover:bg-slate-800"
              >
                Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
