import PageSubTitle from "../templates/PageSubTitle";
import PageText from "../templates/PageText";
import PageTitle from "../templates/PageTitle";

export default function WhoWeWorkWith() {
  const imgUrl = "banners/who-we-work-with.png";
  return (
    <div className="w-window flex flex-col justify-center text-center mb-10">
      <PageTitle imgUrl={imgUrl}></PageTitle>
      <PageText>
        At The Humankind Charity, we work closely with REDACTED (REDACTED), an
        organisation with REDACTED to communities in REDACTED. With a reach of
        more than REDACTED, REDACTED has been instrumental in offering
        life-saving assistance, including food, clean water, medical care, and
        shelter, to those who need it most. Their extensive efforts on the
        ground have helped countless families survive and rebuild, even in the
        most challenging circumstances. We are proud to partner with such a
        dedicated organisation, and together, we can bring much-needed support
        to REDACTED.
        <br />
        <br />
        The heart of The Humankind Charity lies in the hands of our Volunteers
        we are honoured to work with, whose commitment is crucial to the success
        of our mission. Volunteering with us is not just about giving; it's
        about being part of a collective effort to change lives. Volunteers play
        a pivotal role in helping us raise funds to be able to deliver such
        essential aid, relief packages, raise awareness, and supporting our
        campaigns. Their time, energy, and dedication help us reach those in
        need, ensuring that families, children, and entire communities receive
        the assistance they deserve. The impact of volunteering extends beyond
        the people we serve; it also transforms the lives of the volunteers,
        fostering personal growth, resilience, and compassion. By volunteering,
        you not only fulfil a higher purpose, but you also become a source of
        hope, healing, and compassion for those who need it most.
        <br />
        <br />
        The generosity of Humankind makes the critical work of The Humankind
        Charity possible. Every donation, whether small or large, directly
        contributes to providing essentials for those in need. Your support
        helps us make a meaningful impact on vulnerable communities, giving them
        the resources and hope they need to rebuild their lives. The kindness of
        your donations is the driving force behind our ability to help those in
        crisis, and through their generosity, we can continue to offer vital
        support, restore dignity, and change lives for the better.
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
