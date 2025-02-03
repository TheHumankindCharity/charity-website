import PageTitle from "./templates/PageTitle";
import PageSubTitle from "./templates/PageSubTitle";
import PageText from "./templates/PageText";
import PageLinksHover from "./templates/PageLinksHover";

export default function WhatWeDo() {
  const whatWeDoText =
    "At The Humankind Charity, we believe kindness is the key to a better world. United by compassion, we stand together as one humankind, offering hope, help, and solidarity to those in need. Through your support - whether it's a donation, volunteering, or sharing our mission - we create a ripple of change, providing warmth and dignity to those facing hardship. Together, we can make a meaningful impact and restore hope to those who need it most.";
  const whatWeDoLinks = [
    {
      name: "POVERTY ALLEVIATION",
      href: "/what-we-do/poverty-alleviation",
      img: "",
    },
    { name: "HUMANKIND", href: "#", img: "" },
    { name: "WOMAN AND CHILDREN HEALTH", href: "#", img: "" },
    { name: "WOMANKIND", href: "#", img: "" },
    { name: "EMERGENCIES", href: "#", img: "" },
  ];

  return (
    <div className="w-window flex flex-col justify-center text-center mb-10">
      <PageTitle>WHAT WE DO</PageTitle>
      <PageSubTitle>WHAT WE DO</PageSubTitle>
      <PageText>{whatWeDoText}</PageText>
      <PageLinksHover pageLinksList={whatWeDoLinks}>
        CLICK TO FIND OUT MORE
      </PageLinksHover>
    </div>
  );
}
