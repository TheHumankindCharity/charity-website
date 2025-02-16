import { useState } from "react";
import PageText from "../templates/PageText";
import PageTitle from "../templates/PageTitle";
import PageSubTitle from "../templates/PageSubTitle";

export default function BecomeAPartner() {
  const [showEmail, setShowEmail] = useState(false);
  const imgUrl = "banners/become-a-partner.jpg";
  return (
    <div className="w-window flex flex-col justify-center text-center mb-10">
      <PageTitle imgUrl={imgUrl}></PageTitle>
      <PageText>
        Becoming a partner with Humankind Charity means joining a movement
        dedicated to making a real difference in the lives of those who need it
        most. Becoming a partner play a vital role in supporting our mission,
        whether through sponsorships, collaborations, or ongoing commitments to
        humanitarian aid. We believe in building strong, meaningful
        relationships with those who stand with us, and we honour our partners
        by recognising their generosity, sharing their impact, and working
        together to create lasting change.
        <br />
        <br />
        If you or your organisation are interested in partnering with us, we
        would love to hear from you. Get in touch with our founder and chair
        today to explore how we can work together to stand with humankind.
      </PageText>
      <div>
        <button
          onClick={() => setShowEmail(true)}
          className="rounded p-2 mx-20 text-lg font-semibold text-white bg-[--maroon] border-2 border-[--maroon] hover:bg-red-700 hover:text-white active:bg-red-600 mt-10"
        >
          GET IN TOUCH
        </button>
      </div>
      <div
        className={
          showEmail ? `text-black bold mt-5` : `text-black bold mt-5 invisible`
        }
      >
        <div className="flex justify-center">
          <hr className="w-20 mt-5 mb-2 border-t-2 border-[--maroon]" />
        </div>
        <PageSubTitle>Email:</PageSubTitle>
        <a href="" className="hover:underline hover:text-[--maroon]">
          hajaramaryam@thehumankindcharity.org
        </a>
      </div>
    </div>
  );
}
