export default function PageTemplate({
  pageTitle,
  pageSubTitle,
  pageText,
  pageListTitle,
  pageLinksList,
}) {
  return (
    <div className="w-window flex flex-col justify-center text-center mb-10">
      <h1 className="h-64 text-4xl md:text-7xl font-semibold bg-black h-auto py-48 py-2">
        {pageTitle}
      </h1>
      <h2 className="h-64 text-3xl md:text-4xl font-semibold mx-2 my-5 h-auto py-2 text-black">
        {pageSubTitle}
      </h2>
      <p className="text-black text-justify mx-14 md:mx-32 lg:mx-80 mb-7">
        {pageText}
      </p>
      <h2 className="h-64 text-3xl md:text-5xl font-semibold mx-2 my-5 h-auto py-2 text-black">
        {pageListTitle}
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

            <h3 class="text-lg font-semibold rounded-b-lg border border-black min-w-32 text-center relative overflow-hidden text-black group-hover:text-white transition-colors duration-300 group cursor-pointer mt-0 z-[-1]">
              {pageLink.name}
              <span
                aria-hidden="true"
                class="bg-red-700 absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-[-1]"
              ></span>
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
}
