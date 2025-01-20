import PageTitle from "./templates/PageTitle";
import PageSubTitle from "./templates/PageSubTitle";
import PageText from "./templates/PageText";
import PageLinks from "./templates/PageLinks";

export default function HowYouCanHelp() {
  const howYouCanHelpText =
    "You, as part of Humankind, have the power to make a profound difference in the lives of those in crisis. Whether through a donation, offering your time as a volunteer, or simply sharing our campaigns to raise awareness, every action counts. Your generosity helps provide essential resources to those who need it most, ensuring they don't face their struggles alone. By coming together, we can offer hope, relief, and a brighter future to those in desperate need. Your kindness truly has the power to change lives.";
  const howYouCanHelpLinks = [
    { name: "DONATE", href: "#", img: "" },
    { name: "VOLUNTEER", href: "#", img: "" },
    { name: "EVENTS AND FUNDRAISING", href: "#", img: "" },
    { name: "BECOME A PARTNER", href: "#", img: "" },
  ];

  return (
    <div className="w-window flex flex-col justify-center text-center mb-10">
      <PageTitle>HOW YOU CAN HELP</PageTitle>
      <PageSubTitle>HOW YOU CAN STAND WITH HUMANKIND</PageSubTitle>
      <PageText>{howYouCanHelpText}</PageText>
      <PageLinks pageLinksList={howYouCanHelpLinks}>
        YOU CAN HELP HUMANKIND BY...
      </PageLinks>
      <PageSubTitle>HOW VOLUNTEERING CAN CHANGE YOUR LIFE</PageSubTitle>
      <PageText>
        Volunteering with The Humankind Charity is more than an act of giving,
        it is an opportunity to transform lives, including your own. By
        dedicating your time and effort to support those in need, you bring hope
        and relief to vulnerable families, children, and communities. At the
        same time, volunteering helps you grow as a person, nurturing qualities
        like compassion, resilience, and gratitude. Every small action, from
        preparing aid packages to raising awareness, leaves a lasting impact on
        the lives we serve and strengthens the bond between humanity and
        kindness.
        <br />
        <br />
        Volunteering is significant not just in this life but also in the
        Akhira. It builds your character and places you among those who play a
        meaningful role in the ummah. As the Prophet Muhammad ﷺ said,{" "}
        <span className="font-semibold">
          "The best of people are those who are most beneficial to others"
        </span>
        . Through acts of service, you fulfill a higher purpose, earning rewards
        both in this world and the next, while becoming a beacon of hope and
        compassion for others.
      </PageText>
      <PageSubTitle>BECOME A VOLUNTEER</PageSubTitle>
      <video className="rounded-lg mx-12 md:mx-20 lg:mx-48" controls>
        <source
          src="https://docs.material-tailwind.com/demo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
