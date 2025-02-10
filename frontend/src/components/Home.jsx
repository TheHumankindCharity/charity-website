import PageTitle from "./templates/PageTitle";
import PageSubTitle from "./templates/PageSubTitle";
import PageText from "./templates/PageText";
import PageLinksHover from "./templates/PageLinksHover";

export default function Home() {
  const homePageText =
    "At The Humankind Charity, we believe kindness is the key to a better world. United by compassion, we stand together as one humankind, offering hope, help, and solidarity to those in need. Through your support - whether it's a donation, volunteering, or sharing our mission - we create a ripple of change, providing warmth and dignity to those facing hardship. Together, we can make a meaningful impact and restore hope to those who need it most.";
  const homePageLinks = [
    { name: "Donate", href: "/donate", img: "donate.png" },
    { name: "Volunteer", href: "/volunteer", img: "volunteer.png" },
    { name: "Humankind", href: "/humankind", img: "humankind.png" },
    { name: "Womankind", href: "/womankind", img: "womankind.png" },
    { name: "Emergencies", href: "/emergencies", img: "emergencies.png" },
    { name: "Contact Us", href: "/contact-us", img: "contact-us.png" },
  ];
  const imgUrl = "banners/will-you-stand-with-humankind.png";

  return (
    <div className="w-window flex flex-col justify-center text-center mb-10">
      <PageTitle imgUrl={imgUrl} bgColor="red"></PageTitle>
      <PageSubTitle>
        WELCOME TO THE HUMAN<span className="text-[--maroon]">KIND</span>{" "}
        CHARITY
      </PageSubTitle>
      <PageText>{homePageText}</PageText>
      <PageLinksHover pageLinksList={homePageLinks}>
        HOW YOU CAN STAND WITH HUMAN
        <span className="text-[--maroon]">KIND</span>
      </PageLinksHover>
    </div>
  );
}
