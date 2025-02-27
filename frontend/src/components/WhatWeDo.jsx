import PageTitle from "./templates/PageTitle";
import PageText from "./templates/PageText";
import Footer from "./Footer";
import PageLinksLoad from "./templates/PageLinksLoad";

export default function WhatWeDo() {
  const whatWeDoText =
    "At The Humankind Charity, we believe kindness is the key to a better world. United by compassion, we stand together as one humankind, offering hope, help, and solidarity to those in need. Through your support - whether it's a donation, volunteering, or sharing our mission - we create change, providing warmth and dignity to those facing hardship. Together, we can make a meaningful impact and restore hope to those who need it most.";
  const whatWeDoLinks = [
    {
      name: "Poverty Alleviation",
      href: "/what-we-do/poverty-alleviation",
      img: "poverty-alleviation.png",
    },
    { name: "Humankind", href: "/humankind", img: "humankind.png" },
    {
      name: "Women and Children",
      href: "/what-we-do/women-and-children",
      img: "women-and-children.png",
    },
    { name: "Womenkind", href: "/womenkind", img: "womenkind.png" },
    { name: "Emergencies", href: "/emergencies", img: "emergencies.png" },
  ];
  const imgUrl = "banners/what-we-do.jpg";
  const footerLinks = [
    {
      name: "WHO WE WORK WITH",
      href: "/who-we-work-with",
      img: "who-we-work-with.png",
    },
    {
      name: "HOW YOU CAN HELP",
      href: "/how-you-can-help",
      img: "how-you-can-help.png",
    },
    { name: "CONTACT US", href: "/contact-us", img: "contact-us.png" },
  ];

  return (
    <>
      <div className="w-window flex flex-col justify-center text-center mb-10">
        <PageTitle imgUrl={imgUrl} bgColor="white"></PageTitle>
        <PageText>{whatWeDoText}</PageText>
        <PageLinksLoad
          pageLinksList={whatWeDoLinks}
          display="flex flex-row flex-wrap items-start justify-center"
        >
          CLICK TO FIND OUT MORE
        </PageLinksLoad>
      </div>
      <Footer />
    </>
  );
}
