export default function PageTitle({ imgUrl, bgColor }) {
  const bgColorVariants = {
    red: "bg-[#3a0302]",
    white: "bg-white",
  };
  return (
    <div className={`offset ${bgColorVariants[bgColor]} flex justify-center`}>
      {/* <h1 className="offset text-4xl md:text-7xl font-semibold text-white bg-black h-80 bg-[url(/images/Banners/will-you-stand-with-humankind.png)] bg-cover">
        {children}
      </h1> */}
      <img className="max-h-96 object-contain" src={`/images/${imgUrl}`}></img>
    </div>
  );
}
