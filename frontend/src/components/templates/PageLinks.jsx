export default function PageLinks({ children, pageLinksList }) {
  return (
    <>
      <h2 className="h-64 text-3xl md:text-5xl font-semibold mx-2 my-5 h-auto py-2 text-black">
        {children}
      </h2>
      <div className="grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mx-20">
        {pageLinksList.map((pageLink, index) => (
          <a
            key={index}
            href={pageLink.href}
            className="group transition-colors duration-300 cursor-pointer"
          >
            <img
              src="https://placehold.co/600x400"
              className="aspect-square w-full rounded-t-lg border border-black bg-gray-200 object-cover xl:aspect-[7/8] mb-0"
            />

            <h3 className="text-lg font-semibold rounded-b-lg border border-black min-w-32 text-center relative overflow-hidden text-black group-hover:text-white transition-colors duration-300 group cursor-pointer mt-0 z-[-1]">
              {pageLink.name}
              <span
                aria-hidden="true"
                className="bg-red-700 absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-[-1]"
              ></span>
            </h3>
          </a>
        ))}
      </div>
    </>
  );
}
