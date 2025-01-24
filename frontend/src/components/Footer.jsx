export default function Footer() {
  const footerLinks = [
    { name: "WHAT WE DO", href: "#", img: "" },
    { name: "EVENTS AND FUNDRAISERS", href: "#", img: "" },
    { name: "EMERGENCIES", href: "#", img: "" },
  ];
  return (
    <div className="w-window flex flex-col justify-center text-center mb-10">
      <h2 className="h-64 text-3xl md:text-5xl font-semibold mx-2 my-5 h-auto py-2 text-black">
        YOU MIGHT BE INTERESTED IN
      </h2>
      <div className="grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mx-32 lg:mx-80">
        {footerLinks.map((footerLink, index) => (
          <a
            key={index}
            href={footerLink.href}
            className="group transition-colors duration-300 cursor-pointer"
          >
            <img
              src="https://placehold.co/600x400"
              className="aspect-square w-full rounded-full border border-black bg-gray-200 object-cover group-hover:border-red-700 xl:aspect-[7/8] mb-0"
            />
            <h3 className="mt-4 text-lg text-black text-center font-semibold group-hover:text-red-700">
              {footerLink.name}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
}
