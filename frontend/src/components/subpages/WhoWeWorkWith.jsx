import Footer from "../Footer";
import PageText from "../templates/PageText";
import PageTitle from "../templates/PageTitle";

export default function WhoWeWorkWith() {
  const imgUrl = "banners/who-we-work-with.jpg";
  return (
    <>
      <div className="w-window flex flex-col justify-center text-center mb-10">
        <PageTitle imgUrl={imgUrl}></PageTitle>
        <PageText>
          The heart of The Humankind Charity lies in the hands of our Volunteers
          we are honoured to work with, whose commitment is crucial to the
          success of our mission. Volunteering with us is not just about giving;
          it's about being part of a collective effort to change lives.
          Volunteers play a pivotal role in helping us raise funds to be able to
          deliver such essential aid, relief packages, raise awareness, and
          supporting our campaigns. Their time, energy, and dedication help us
          reach those in need, ensuring that families, children, and entire
          communities receive the assistance they deserve. The impact of
          volunteering extends beyond the people we serve; it also transforms
          the lives of the volunteers, fostering personal growth, resilience,
          and compassion. By volunteering, you not only fulfil a higher purpose,
          but you also become a source of hope, healing, and compassion for
          those who need it most.
          <br />
          <br />
          The generosity of Humankind makes the critical work of The Humankind
          Charity possible. Every donation, whether small or large, directly
          contributes to providing essentials for those in need. Your support
          helps us make a meaningful impact on vulnerable communities, giving
          them the resources and hope they need to rebuild their lives. The
          kindness of your donations is the driving force behind our ability to
          help those in crisis, and through their generosity, we can continue to
          offer vital support, restore dignity, and change lives for the better.
        </PageText>
      </div>
      <Footer />
    </>
  );
}
