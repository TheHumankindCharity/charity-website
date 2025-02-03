export default function PageTitle({ children }) {
  return (
    <h1 className="offset text-4xl md:text-7xl font-semibold text-white bg-black h-auto py-36  bg-cover">
      {children}
    </h1>
  );
}
