import PageTitle from "../templates/PageTitle";
import PageText from "../templates/PageText";

export default function EventsAndFundraisers() {
  const imgUrl = "banners/events-and-fundraisers.jpg";
  return (
    <div className="w-window flex flex-col justify-center text-center mb-10">
      <PageTitle imgUrl={imgUrl}></PageTitle>
      <PageText>
        At The Humankind Charity, our events and fundraisers are more than just
        ways to raise support, they are opportunities to bring people together
        in the spirit of compassion and unity. Whether it is a charity hikes, a
        community fundraiser, or an awareness event, each gathering is a
        reminder that we are stronger when we stand together. These events unite
        individuals from all backgrounds with a shared purpose, to extend
        kindness to those who need it most. By coming together, we not only
        strengthen our own communities but also create real change for
        struggling families around the world.
        <br />
        <br />
        Every contribution raised goes directly to providing food, water, and
        essential support to those in desperate need. The Prophet Muhammad ﷺ
        said, "The most beloved people to Allah are those who are most
        beneficial to others." By taking part in our events and fundraisers, you
        are not just giving, you are uplifting lives, restoring hope, and
        standing with humankind in its time of need.
      </PageText>
    </div>
  );
}
