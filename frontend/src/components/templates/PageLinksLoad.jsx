export default function PageLinksLoad({ children, pageLinksList }) {
  return (
    <>
      <h2 className="h-64 text-3xl md:text-5xl font-semibold mx-2 my-5 h-auto py-2 text-black">
        {children}
      </h2>
      <div className="grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-12 mx-24 md:mx-44 lg:mx-48">
        {pageLinksList.map((pageLink, index) => (
          <a
            key={index}
            href={pageLink.href}
            className="group transition-colors duration-300 cursor-pointer"
          >
            <img
              src={`/images/squares-and-circles/${pageLink.img}`}
              className="max-h-72 w-full rounded-t-lg border border-black bg-gray-200 object-cover xl:aspect-[7/8] mb-0"
            />

            <h3 className="text-lg font-semibold rounded-b-lg border border-black min-w-32 text-center relative overflow-hidden text-black group-hover:text-white transition-colors duration-300 group cursor-pointer mt-0 z-[-1]">
              {pageLink.name}
              <span
                aria-hidden="true"
                className="bg-[--maroon] absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-[-1]"
              ></span>
            </h3>
          </a>
        ))}
      </div>
    </>
  );
}
