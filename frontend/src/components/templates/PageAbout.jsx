export default function PageAbout({ children, pageText }) {
  return (
    <>
      <h2 className="h-64 text-3xl md:text-4xl font-semibold mx-2 my-5 h-auto py-2 text-black">
        {children}
      </h2>
      <p className="text-black text-justify mx-14 md:mx-32 lg:mx-80 mb-7">
        {pageText}
      </p>
    </>
  );
}
