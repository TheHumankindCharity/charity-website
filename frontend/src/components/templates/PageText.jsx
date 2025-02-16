export default function PageText({ children }) {
  return (
    <>
      <p className="text-black text-justify lg:text-center mx-14 md:mx-32 lg:mx-80 mb-7">
        {children}
      </p>
    </>
  );
}
