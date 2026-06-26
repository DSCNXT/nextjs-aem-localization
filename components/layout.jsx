import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const { NEXT_PUBLIC_URL } = process.env;

export const siteTitle = 'WKND';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const localeLabels = {
  'en-US': 'EN',
  'es-MX': 'ES',
  'pt-BR': 'PT',
};

export default function Layout({ children, pages }) {
  const router = useRouter();
  const { locale, locales, asPath } = router;

  const isCurrentPage = (currPath) => {
    const path = router.asPath === '/' ? '/home' : router.asPath;
    return path.indexOf(currPath) === 0;
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="AEM WKND built in Next.js" />
        <meta
          property="og:image"
          content="/wknd-logo-dk.svg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="cq:pagemodel_router" content="disabled" />
      </Head>
      <Disclosure as="nav" className="bg-gray-100">
        {({ open }) => (
          <>
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-800 rounded-md hover:text-gray-700 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                  <div className="flex items-center flex-shrink-0">
                    <a href="/">
                      <img
                        className="block w-auto h-8 lg:hidden"
                        src="/wknd-logo-dk.svg"
                        alt="WKND"
                      />
                      <img
                        className="hidden w-auto h-8 lg:block"
                        src="/wknd-logo-dk.svg"
                        alt="WKND"
                      />
                    </a>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {pages.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          aria-current={isCurrentPage(item.href) ? 'page' : undefined}
                          className={classNames(
                            isCurrentPage(item.href)
                              ? 'bg-yellow-300 text-gray-700'
                              : 'text-gray-800 hover:bg-yellow-200 hover:text-gray-700',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Locale switcher */}
                <div className="flex items-center space-x-1">
                  {locales.map((l) => (
                    <Link
                      key={l}
                      href={asPath}
                      locale={l}
                      className={classNames(
                        l === locale
                          ? 'bg-yellow-300 text-gray-700'
                          : 'text-gray-500 hover:bg-yellow-200 hover:text-gray-700',
                        'px-2 py-1 rounded text-xs font-medium'
                      )}>
                      {localeLabels[l]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {pages.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      isCurrentPage(item.href)
                        ? 'bg-yellow-300 text-gray-700'
                        : 'text-gray-800 hover:bg-yellow-200 hover:text-gray-700',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={isCurrentPage(item.href) ? 'page' : undefined}>
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <main>{children}</main>
      <footer className="text-center bg-gray-200 lg:text-left">
        <div className="p-4 text-center text-gray-700">
          © 2022 Copyright:
          <a className="text-gray-800" href="https://wknd.site/">
            {' '}
            WKND Site
          </a>
        </div>
      </footer>
    </>
  );
}