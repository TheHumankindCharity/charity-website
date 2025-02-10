import { Button } from "@headlessui/react";

import PageSubTitle from "./templates/PageSubTitle";
import PageText from "./templates/PageText";
import PageTitle from "./templates/PageTitle";
import CampaignSection from "./templates/CampaignSection";

export default function Emergencies() {
  const emergenciesText =
    "Our Emergency Fund enables us to respond swiftly to crises, providing immediate relief to families and communities in need. From food and clean water to essential hygiene supplies, your contributions help save lives and bring hope to those facing unimaginable hardships. Together, we can act quickly to make a difference when it matters most.";
  const imgUrl = "banners/emergencies.png";
  return (
    <div className="w-window flex flex-col justify-center text-center mb-10">
      <PageTitle imgUrl={imgUrl} bgColor="white"></PageTitle>
      <PageSubTitle>OUR EMERGENCY FUND</PageSubTitle>
      <PageText>{emergenciesText}</PageText>
      <div>
        <button className="rounded p-2 mx-20 text-lg font-semibold text-[--maroon] border-2 border-[--maroon] hover:bg-[--maroon] hover:text-white active:bg-red-700">
          DONATE TO OUR EMERGENCY FUND
        </button>
      </div>
      <div className="flex justify-center">
        <hr className="w-20 mt-10 mb-2 border-t-2 border-[--maroon]" />
      </div>
      <PageSubTitle>SYRIA</PageSubTitle>
      <CampaignSection titleLogo="humankind-logo-syria.png">
        The people of Syria are facing overwhelming challenges as they struggle
        to secure necessities such as food and clean water. Through the
        Humankind Campaign, we are focused on addressing these critical needs by
        delivering essential food packages containing rice, flour, canned goods,
        and cooking oil to families in the most affected areas. We hope to
        expand our efforts to provide clean water solutions to Syria where
        access to safe drinking water is scarce, with the support of donations
        from the Humankind.
        <br />
        <br />
        Each food package delivered represents a lifeline of hope, helping to
        restore dignity and offer a path to survival. Your support enables us to
        bring much needed assistance directly to those who need it most,
        ensuring that no one is left behind. Together, we can make a tangible
        difference, giving families the opportunity to rebuild their lives,
        regain their strength, and take small steps toward a brighter, more
        sustainable future.
      </CampaignSection>
      <CampaignSection titleLogo="womankind-logo-syria.png">
        The Womenkind Campaign is dedicated to empowering the women of Syria,
        who have endured tremendous hardship and struggle daily to care for
        their children and families. We focus on providing essential resources
        that address the unique needs of women, such as sanitary pads, diapers,
        baby formula, and hygiene products. These basic but vital supplies are
        crucial in helping women maintain their health, dignity, and wellbeing.
        For mothers, these resources are not just practical, they are a lifeline
        that allows them to nurture their children and provide a semblance of
        normalcy and care amidst difficult circumstances. By meeting these
        immediate needs, we help create a foundation of support, giving Syrian
        mothers and their babies the opportunity to thrive despite the
        overwhelming challenges they face.
        <br />
        <br />
        Your generosity allows us to deliver care packages directly to the women
        of Syria, bringing hope and relief when they need it most. Each package
        represents more than just essential items; it is a symbol of compassion,
        a restoration of dignity, and a reminder that no mother is alone in her
        struggle. Together, we can help empower these resilient women, ensuring
        they have the resources to care for themselves and their children. By
        joining the Womenkind Campaign, we contribute to building stronger,
        healthier families in Syria and offer the hope of a brighter, more
        secure future for mothers and their loved ones.
      </CampaignSection>
    </div>
  );
}
