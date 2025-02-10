import PageSubTitle from "../templates/PageSubTitle";
import PageText from "../templates/PageText";
import PageTitle from "../templates/PageTitle";

export default function ContactUs() {
  const imgUrl = "banners/contact-us.png";
  return (
    <div className="w-window flex flex-col justify-center text-center mb-10">
      <PageTitle imgUrl={imgUrl}></PageTitle>
      <PageText>
        Donec egestas vulputate elementum. In hac habitasse platea dictumst.
        Integer cursus sit amet nulla sed ultrices. Nulla elementum lectus sem,
        in ornare risus convallis sit amet. Integer et ultricies diam. Mauris ut
        vulputate erat. Aenean cursus, ante a pulvinar euismod, quam justo
        bibendum enim, ut sodales orci urna at erat. Quisque ac posuere orci.
        Nunc imperdiet rhoncus porttitor. Duis suscipit ultricies nunc.
      </PageText>
      <form className="flex flex-col justify-center mx-40 gap-5">
        <input
          type="text"
          placeholder="First name"
          className="border border-black"
        ></input>
        <input
          type="text"
          placeholder="Last name"
          className="border border-black"
        ></input>
        <input
          type="email"
          placeholder="Email"
          className="border border-black"
        ></input>
        <textarea
          placeholder="Your message..."
          className="border border-black"
        ></textarea>
      </form>
    </div>
  );
}
