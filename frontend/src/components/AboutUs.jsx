import Footer from "./Footer";
import PageLinksLoad from "./templates/PageLinksLoad";
import PageText from "./templates/PageText";
import PageTitle from "./templates/PageTitle";

export default function () {
  const aboutUsLinks = [
    {
      name: "Who We Work With",
      href: "about-us/who-we-work-with",
      img: "who-we-work-with.png",
    },
    { name: "Contact Us", href: "contact-us", img: "contact-us.png" },
    { name: "Volunteer", href: "volunteer", img: "volunteer.png" },
    {
      name: "Become a Partner",
      href: "become-a-partner",
      img: "become-a-partner.png",
    },
  ];
  const imgUrl = "banners/about-us.jpg";
  const footerLinks = [
    {
      name: "EVENTS AND FUNDRAISERS",
      href: "/events-and-fundraisers",
      img: "events-and-fundraisers.png",
    },
    {
      name: "WOMANKIND",
      href: "/womankind",
      img: "womenkind.png",
    },
    {
      name: "BECOME A PARTNER",
      href: "/become-a-partner",
      img: "become-a-partner.png",
    },
  ];

  return (
    <>
      <div className="w-window flex flex-col justify-center text-center mb-10">
        <PageTitle imgUrl={imgUrl} bgColor="white"></PageTitle>
        <PageText>
          At The Humankind Charity, we believe that kindness is the key to
          making the world a better place. The word "Humankind" represents all
          of us, people from every corner of the world, united by compassion,
          generosity, and the desire to help one another. The significance of
          our charity's red is a powerful reminder that, no matter our
          background, we all share the same humanity. We all bleed the same, and
          no life should ever have to endure the crushing weight of poverty or
          helplessness. It is essential that we, as a global community, stand
          together for those within humankind who are struggling and in need of
          hope and help.
          <br />
          <br />
          Every act of kindness - whether it's a small donation, a larger
          contribution, volunteering your time, or simply sharing our campaigns
          with others - plays a vital role in creating a world where no one is
          left behind. Your support is not just a gift; it is a beacon of hope,
          a message of solidarity, and a reminder to those in need that they are
          not alone. The Humankind Charity is dedicated to making a meaningful
          impact, one compassionate action at a time. With your help, we bring
          warmth, hope, and care to those who need it most, helping to restore
          dignity and offer a brighter, more hopeful future to those who are in
          desperate need of kindness and assistance.
        </PageText>
        <PageLinksLoad
          pageLinksList={aboutUsLinks}
          display="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2"
        />
      </div>
      <Footer />
    </>
  );
}
