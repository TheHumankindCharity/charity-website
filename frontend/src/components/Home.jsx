import PageTitle from "./templates/PageTitle";
import PageSubTitle from "./templates/PageSubTitle";
import PageText from "./templates/PageText";
import Footer from "./Footer";
import PageLinksLoad from "./templates/PageLinksLoad";

export default function Home() {
  const homePageText =
    "At The Humankind Charity, we believe kindness is the key to a better world. United by compassion, we stand together as one humankind, offering hope, help, and solidarity to those in need. Through your support - whether it's a donation, volunteering, or sharing our mission - we create a ripple of change, providing warmth and dignity to those facing hardship. Together, we can make a meaningful impact and restore hope to those who need it most.";
  const homePageLinks = [
    { name: "Donate", href: "/donate", img: "donate.png" },
    { name: "Emergencies", href: "/emergencies", img: "emergencies.png" },
    { name: "Volunteer", href: "/volunteer", img: "volunteer.png" },
    {
      name: "Events and Fundraisers",
      href: "/events-and-fundraisers",
      img: "events-and-fundraisers.png",
    },
    { name: "Humankind", href: "/humankind", img: "humankind.png" },
    { name: "Womenkind", href: "/womenkind", img: "womenkind.png" },
  ];
  const imgUrl = "banners/will-you-stand-with-humankind.png";
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
    <>
      <div className="w-window flex flex-col justify-center text-center mb-10">
        <PageTitle imgUrl={imgUrl} bgColor="red"></PageTitle>
        <PageSubTitle>
          WELCOME TO THE HUMAN<span className="text-[--maroon]">KIND</span>{" "}
          CHARITY
        </PageSubTitle>
        <PageText>{homePageText}</PageText>
        <PageLinksLoad
          pageLinksList={homePageLinks}
          display="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        >
          HOW YOU CAN STAND WITH HUMAN
          <span className="text-[--maroon]">KIND</span>
        </PageLinksLoad>
      </div>
      <Footer />
    </>
  );
}
