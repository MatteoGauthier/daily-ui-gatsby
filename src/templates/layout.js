import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Menu, Transition } from "@headlessui/react"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      gcms {
        dayDesigns {
          id
          tags
          plateforms
          day
        }
      }
    }
  `)

  console.log(data.gcms)
  const tags = [...new Set(data.gcms.dayDesigns.flatMap(e => e.tags))]
  const plateforms = [...new Set(data.gcms.dayDesigns.flatMap(e => e.plateforms))]

  return (
    <>
      <header className="text-gray-700 body-font z-0">
        <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
          <Link
            to="/"
            className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl">DailyUI</span>
          </Link>
          <nav className="flex z-10 flex-wrap items-center justify-center text-base md:ml-auto">
            <div className="relative inline-block text-left">
              <Menu>
                {({ open }) => (
                  <>
                    <span className="rounded-md">
                      <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                        <span>Tags</span>
                        <svg
                          className="w-5 h-5 ml-2 -mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Menu.Button>
                    </span>

                    <Transition
                      show={open}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="absolute right-0 w-40 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                      >
                        <div className="py-1">
                          {tags.map(e => (
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to={`/${e}`}
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } flex font-semibold justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                >
                                  #{e}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
            <div className="relative inline-block text-left">
              <Menu>
                {({ open }) => (
                  <>
                    <span className="rounded-md ">
                      <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                        <span>Plateforms</span>
                        <svg
                          className="w-5 h-5 ml-2 -mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Menu.Button>
                    </span>

                    <Transition
                      show={open}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="absolute right-0 w-40 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                      >
                        <div className="py-1">
                          {plateforms.map(e => (
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to={`/${e}`}
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } flex font-semibold justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                >
                                  #{e}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </nav>
          <button className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </header>
      <main className="container mx-auto">{children}</main>
    </>
  )
}

export default Layout
