export default function PageLinksHover({ children, pageLinksList }) {
  return (
    <>
      <h2 className="h-64 text-3xl md:text-5xl font-semibold mx-2 my-5 h-auto py-2 text-black">
        {children}
      </h2>
      <div className="flex flex-row flex-wrap items-start justify-center gap-x-14 gap-y-10 xl:gap-x-12 mx-24 md:mx-38 lg:mx-48">
        {pageLinksList.map((pageLink, index) => (
          <a
            key={index}
            href={pageLink.href}
            className="relative w-48 group transition-colors duration-300 cursor-pointer"
          >
            <div className="bg-black relative flex justify-center">
              <img
                src={`/images/squares-and-circles/${pageLink.img}`}
                className="aspect-square w-full border-2 border-black group-hover:border-[--maroon] group-hover:opacity-50 duration-300 bg-gray-200 object-cover xl:aspect-[7/8] mb-0"
              />
              <div class="opacity-0 group-hover:opacity-100 duration-300 absolute top-20 translate-y-full group-hover:translate-y-1 transition-transform z-[0] text-md text-gray-200 font-semibold">
                {pageLink.name}
              </div>
            </div>

            <h3 className="text-lg font-semibold min-w-32 text-center text-black group-hover:text-[--maroon] transition-colors duration-300 cursor-pointer mt-3">
              {pageLink.name}
            </h3>
          </a>
        ))}
      </div>
    </>
  );
}
