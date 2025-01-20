export default function PageTitle({ children }) {
  return (
    <h1 className="offset text-4xl md:text-7xl font-semibold bg-black h-auto py-36 bg-[url('/images/stock-charity.jpg')] bg-cover">
      {children}
    </h1>
  );
}
