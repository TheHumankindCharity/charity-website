export default function PageText({ children }) {
  return (
    <>
      <p className="text-black text-justify mx-14 md:mx-32 lg:mx-80 mb-7">
        {children}
      </p>
    </>
  );
}
