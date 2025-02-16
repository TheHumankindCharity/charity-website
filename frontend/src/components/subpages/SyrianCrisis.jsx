import PageSubTitle from "../templates/PageSubTitle";
import PageText from "../templates/PageText";
import PageTitle from "../templates/PageTitle";

export default function SyrianCrisis() {
  const imgUrl = "charity-logo-syria.jpg";
  return (
    <div className="w-window flex flex-col justify-center text-center mb-10">
      <PageTitle imgUrl={imgUrl}></PageTitle>
      <PageSubTitle>SYRIAN CRISIS</PageSubTitle>
      <PageText>
        The Syrian crisis has left over 15 million people in urgent need of
        humanitarian assistance with more than 12 million struggling to find
        enough food to survive. Families have no homes, children and babies are
        going to sleep hungry, and millions are facing a daily fight for
        survival without food, water, or any of life's basic necessities. But in
        the face of this suffering you have the power to bring hope. By standing
        with Humankind you are not just offering aid you are offering
        compassion, dignity, and a lifeline to those who feel forgotten. Your
        support can provide food, water, hope, and more to those who need it
        most. This is your chance to stand with Syria to stand with humankind.
        Donate now to our Syrian Emergency Appeal and learn more about our
        Humankind and Womenkind campaigns for Syria because together we can be
        the kindness they desperately need.
      </PageText>
      <div>
        <button className="rounded p-2 mx-20 text-lg font-semibold text-white bg-[--maroon] border-2 border-[--maroon] hover:bg-red-700 hover:text-white active:bg-red-600">
          DONATE NOW
        </button>
      </div>

      <div className="mx-12 md:mx-52 lg:mx-80 mt-20 mb-10">
        <img src="/images/humankind-logo-syria.png" className="aspect-auto" />
      </div>
      <PageText>
        The people of <span className="font-semibold">Syria</span> are facing
        overwhelming challenges as they struggle to secure necessities such as
        food and clean water. Through the
        <span className="font-semibold"> Humankind</span> Campaign, we are
        focused on addressing these critical needs by delivering essential food
        packages containing rice, flour, canned goods, and cooking oil to
        families in the most affected areas. We hope to expand our efforts to
        provide clean water solutions to Syria where access to safe drinking
        water is scarce, with the support of donations from the Humankind.
        <br />
        <br />
        Each food package delivered represents a lifeline of hope, helping to
        restore dignity and offer a path to survival. Your support enables us to
        bring much needed assistance directly to those who need it most,
        ensuring that no one is left behind. Together, we can make a tangible
        difference, giving families the opportunity to rebuild their lives,
        regain their strength, and take small steps toward a brighter, more
        sustainable future.
      </PageText>

      <div className="mx-12 md:mx-52 lg:mx-80 mt-10 mb-10">
        <img src="/images/womenkind-logo-syria.png" className="aspect-auto" />
      </div>
      <PageText>
        The <span className="font-semibold">Womenkind</span> Campaign is
        dedicated to empowering the women of Syria, who have endured tremendous
        hardship and struggle daily to care for their children and families. We
        focus on providing essential resources that address the unique needs of
        women, such as sanitary pads, diapers, baby formula, and hygiene
        products. These basic but vital supplies are crucial in helping women
        maintain their health, dignity, and wellbeing. For mothers, these
        resources are not just practical, they are a lifeline that allows them
        to nurture their children and provide a semblance of normalcy and care
        amidst difficult circumstances. By meeting these immediate needs, we
        help create a foundation of support, giving Syrian mothers and their
        babies the opportunity to thrive despite the overwhelming challenges
        they face.
        <br />
        <br />
        Your generosity allows us to deliver care packages directly to the women
        of Syria, bringing hope and relief when they need it most. Each package
        represents more than just essential items; it is a symbol of compassion,
        a restoration of dignity, and a reminder that no mother is alone in her
        struggle. Together, we can help empower these resilient women, ensuring
        they have the resources to care for themselves and their children. By
        joining the <span className="font-semibold">Womenkind</span> Campaign,
        we contribute to building stronger, healthier families in Syria and
        offer the hope of a brighter, more secure future for mothers and their
        loved ones.
      </PageText>
      <div>
        <button className="rounded p-2 mx-20 text-lg font-semibold text-white bg-[--maroon] border-2 border-[--maroon] hover:bg-red-700 hover:text-white active:bg-red-600">
          DONATE NOW
        </button>
      </div>
    </div>
  );
}
