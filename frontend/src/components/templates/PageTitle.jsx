export default function PageTitle({ imgUrl }) {
  return (
    <>
      {/* <h1 className="offset text-4xl md:text-7xl font-semibold text-white bg-black h-80 bg-[url(/images/Banners/will-you-stand-with-humankind.png)] bg-cover">
        {children}
      </h1> */}
      <img className="offset h-max" src={`/images/${imgUrl}`}></img>
    </>
  );
}
