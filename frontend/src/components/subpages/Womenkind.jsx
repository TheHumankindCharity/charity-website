import Footer from "../Footer";
import PageSubTitle from "../templates/PageSubTitle";
import PageText from "../templates/PageText";
import PageTitle from "../templates/PageTitle";

export default function Womenkind() {
  const imgUrl = "banners/womenkind.jpg";
  return (
    <>
      <div className="w-window flex flex-col justify-center text-center mb-10">
        <PageTitle imgUrl={imgUrl}></PageTitle>
        <PageText>
          The Womenkind Campaign is a heartfelt initiative dedicated to
          empowering women across crisis affected regions, focusing on those who
          have endured unimaginable hardship in countries like Syria, Yemen,
          Palestine, Sudan, and others. Women in these regions are often the
          backbone of their families, shouldering the immense responsibility of
          caring for their children and loved ones amidst overwhelming
          challenges. Despite the struggles they face, they remain resilient,
          but their needs often go unmet. The Womenkind Campaign is here to
          change that, ensuring that women receive the vital support they need
          to maintain their health, dignity, and wellbeing.
          <br />
          <br />
          Through this campaign, we provide essential resources tailored to the
          unique needs of women; items like sanitary pads, baby formula,
          diapers, and hygiene products. These supplies, while seemingly simple,
          are a lifeline for women trying to care for themselves and their
          families in dire circumstances. For mothers, these resources offer
          more than just practicality; they restore dignity and provide the
          basic tools necessary to nurture their children. In environments where
          access to such necessities is limited, the Womenkind Campaign plays a
          crucial role in ensuring that women do not have to sacrifice their
          health or their ability to care for their families.
          <br />
          <br />
          Each care package delivered through the Womenkind Campaign is a beacon
          of hope, a tangible symbol of kindness that reaches directly to the
          women who need it most. It's a reminder that they are not forgotten;
          that, even in the most desperate times, there are people around the
          world who care. With each package, we help create a foundation of
          support, empowering women to rise above their challenges and continue
          to be the strong, loving caregivers they have always been. By meeting
          their immediate needs, we open the door to a brighter future, giving
          these resilient women the chance to provide a better life for their
          children, families, and communities.
          <br />
          <br />
          The Womenkind Campaign is more than just about providing essential
          resources-it's about offering hope, restoring dignity, and building a
          future where women are not left behind in the face of crisis. Through
          your generosity, we can bring life-changing aid directly to these
          women, ensuring they have the tools to not only survive but thrive. No
          mother should ever feel isolated or without support, and by joining
          the Womenkind Campaign, you are making a difference that ripples out
          across families and communities, creating lasting change for
          generations to come.
          <br />
          <br />
          Together, we can help empower women in the most vulnerable regions,
          ensuring they have access to the resources they need to care for
          themselves and their children. Every act of kindness, whether through
          donations, volunteering, or spreading the word about the campaign,
          contributes to building stronger, healthier families. By investing in
          women's health and wellbeing, we create a foundation for brighter,
          more secure futures, not just for women, but for entire communities.
          The Womenkind Campaign is a call to stand together, showing that when
          we support women, we are empowering entire societies to rise above
          their struggles and build a better tomorrow.
        </PageText>

        <PageSubTitle>OUR EMERGENCY FUND</PageSubTitle>
        <PageText>
          Our Emergency Fund enables us to respond swiftly to crises, providing
          immediate relief to families and communities in need. From food and
          clean water to essential hygiene supplies, your contributions help
          save lives and bring hope to those facing unimaginable hardships.
          Together, we can act quickly to make a difference when it matters
          most.
        </PageText>
        <div>
          <button className="rounded p-2 mx-20 text-lg font-semibold text-[--maroon] border-2 border-[--maroon] hover:bg-[--maroon] hover:text-white active:bg-red-700">
            DONATE TO OUR EMERGENCY FUND
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
