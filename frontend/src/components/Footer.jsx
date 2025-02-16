export default function Footer() {
  const footerLinks = [
    {
      name: "WHAT WE DO",
      href: "/what-we-do",
      img: "what-we-do.png",
    },
    {
      name: "HOW YOU CAN HELP",
      href: "/how-you-can-help",
      img: "how-you-can-help.png",
    },
    { name: "CONTACT US", href: "/contact-us", img: "contact-us.png" },
  ];
  return (
    <div className="w-window flex flex-col justify-center text-center mb-10">
      <h2 className="h-64 text-2xl md:text-3xl font-semibold mx-2 my-5 h-auto py-2 text-black">
        YOU MIGHT BE INTERESTED IN
      </h2>
      <div className="grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mx-32 lg:mx-80 items-start">
        {footerLinks.map((footerLink, index) => (
          <a
            key={index}
            href={footerLink.href}
            className="group transition-colors duration-300 cursor-pointer w-32 justify-self-center"
          >
            <img
              src={`/images/squares-and-circles/${footerLink.img}`}
              className="aspect-square w-full rounded-full border border-gray-400 bg-gray-200 object-cover group-hover:border-[--maroon] transition-colors duration-300 mb-0"
            />
            <h3 className="mt-4 text-lg text-black text-center font-semibold group-hover:text-[--maroon] transition-colors duration-300">
              {footerLink.name}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
}
