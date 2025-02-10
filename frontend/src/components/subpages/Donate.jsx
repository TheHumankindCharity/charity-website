import PageSubTitle from "../templates/PageSubTitle";
import PageText from "../templates/PageText";
import PageTitle from "../templates/PageTitle";

export default function Donate() {
  const imgUrl = "banners/donate.png";
  return (
    <div className="w-window flex flex-col justify-center text-center mb-10">
      <PageTitle imgUrl={imgUrl}></PageTitle>
      <PageText>
        Donating to The Humankind Charity, whether to the Humankind Campaign or
        the Womenkind Campaign, has a profound impact on the lives of those who
        are on the brink of despair, living with almost nothing. Your generosity
        provides vital resources that directly address the urgent needs of
        people facing extreme hardship. A simple donation can deliver food
        packages that nourish families, hygiene products that restore dignity,
        and essentials that help women care for their children in difficult
        circumstances. For those living in crisis, these contributions are more
        than just material goods, they are lifelines. Every donation helps to
        rebuild a sense of hope, offering a chance for survival, recovery, and a
        brighter future.
        <br />
        <br />
        The impact of your support stretches far beyond just alleviating
        immediate needs; it fosters a sense of compassion, solidarity, and
        community. When you donate, you help break the cycle of poverty and
        suffering, offering people the means to start rebuilding their lives.
        For women, your donations ensure they have the tools to nurture their
        children and keep their families safe. For families in crisis, your
        contribution brings stability, comfort, and the knowledge that they are
        not alone in their struggle. Your kindness creates a ripple effect,
        transforming lives, empowering individuals, and strengthening
        communities; showing that together, we can make a tangible difference in
        the fight against poverty and hardship.
      </PageText>

      <PageSubTitle>OUR EMERGENCY FUND</PageSubTitle>
      <PageText>
        Donec egestas vulputate elementum. In hac habitasse platea dictumst.
        Integer cursus sit amet nulla sed ultrices. Nulla elementum lectus sem,
        in ornare risus convallis sit amet. Integer et ultricies diam. Mauris ut
        vulputate erat. Aenean cursus, ante a pulvinar euismod, quam justo
        bibendum enim, ut sodales orci urna at erat. Quisque ac posuere orci.
        Nunc imperdiet rhoncus porttitor. Duis suscipit ultricies nunc.
      </PageText>
      <div>
        <button className="rounded p-2 mx-20 text-lg font-semibold text-[--maroon] border-2 border-[--maroon] hover:bg-[--maroon] hover:text-white active:bg-red-700">
          DONATE TO OUR EMERGENCY FUND
        </button>
      </div>
    </div>
  );
}
