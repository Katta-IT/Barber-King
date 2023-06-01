export default function NotFound() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-gray-600">
            Whoops! That page doesn't exist.
          </p>

          <form className="mb-8 flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5 ml-2 text-sm font-medium text-white bg-primary-700 rounded-lg border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>

          <div className="mb-4 mt-11">
            <div className="space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 xl:gap-8 sm:space-y-0 md:mt-12">
              <a className="block px-8 py-12 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 hover:shadow-lg dark:hover:shadow-lg-light cursor-pointer">
                Homepage
              </a>
              <a className="block px-8 py-12 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 hover:shadow-lg dark:hover:shadow-lg-light cursor-pointer">
                Library
              </a>
              <a className="block px-8 py-12 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 hover:shadow-lg dark:hover:shadow-lg-light cursor-pointer">
                FAQ
              </a>
              <a className="block px-8 py-12 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 hover:shadow-lg dark:hover:shadow-lg-light cursor-pointer">
                Hello World
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
