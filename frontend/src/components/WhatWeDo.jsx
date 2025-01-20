import PageTemplate from "./templates/PageTemplate";

export default function WhatWeDo() {
  const whatWeDoTitle = "WHAT WE DO";
  const whatWeDoSubTitle = "THIS IS WHAT WE DO";
  const whatWeDoText =
    "At The Humankind Charity, we believe kindness is the key to a better world. United by compassion, we stand together as one humankind, offering hope, help, and solidarity to those in need. Through your support - whether it's a donation, volunteering, or sharing our mission - we create a ripple of change, providing warmth and dignity to those facing hardship. Together, we can make a meaningful impact and restore hope to those who need it most.";
  const whatWeDoListTitle = "CLICK TO FIND OUT MORE";
  const whatWeDoLinks = [
    { name: "POVERTY ALLEVIATION", href: "#", img: "" },
    { name: "HUMANKIND", href: "#", img: "" },
    { name: "WOMAN AND CHILDREN HEALTH", href: "#", img: "" },
    { name: "WOMANKIND", href: "#", img: "" },
    { name: "EMERGENCIES", href: "#", img: "" },
  ];

  return (
    <PageTemplate
      pageTitle={whatWeDoTitle}
      pageSubTitle={whatWeDoSubTitle}
      pageText={whatWeDoText}
      pageListTitle={whatWeDoListTitle}
      pageLinksList={whatWeDoLinks}
    />
  );
}
