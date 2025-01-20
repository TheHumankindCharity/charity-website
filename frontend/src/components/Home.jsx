import PageTitle from "./templates/PageTitle";
import PageSubTitle from "./templates/PageSubTitle";
import PageText from "./templates/PageText";
import PageLinks from "./templates/PageLinks";

export default function Home() {
  const homePageText =
    "At The Humankind Charity, we believe kindness is the key to a better world. United by compassion, we stand together as one humankind, offering hope, help, and solidarity to those in need. Through your support - whether it's a donation, volunteering, or sharing our mission - we create a ripple of change, providing warmth and dignity to those facing hardship. Together, we can make a meaningful impact and restore hope to those who need it most.";
  const homePageLinks = [
    { name: "DONATE", href: "#", img: "" },
    { name: "DISCOVER MORE", href: "#", img: "" },
    { name: "VOLUNTEER", href: "#", img: "" },
    { name: "HUMANKIND", href: "#", img: "" },
    { name: "WOMANKIND", href: "#", img: "" },
    { name: "CONTACT US", href: "#", img: "" },
  ];

  return (
    <div className="w-window flex flex-col justify-center text-center mb-10">
      <PageTitle>
        WILL YOU STAND WITH HUMAN<span className="text-red-700">KIND</span>?
      </PageTitle>
      <PageSubTitle>
        WELCOME TO THE HUMAN<span className="text-red-700">KIND</span> CHARITY
      </PageSubTitle>
      <PageText>{homePageText}</PageText>
      <PageLinks pageLinksList={homePageLinks}>
        HOW YOU CAN STAND WITH HUMAN<span className="text-red-700">KIND</span>
      </PageLinks>
    </div>
  );
}
