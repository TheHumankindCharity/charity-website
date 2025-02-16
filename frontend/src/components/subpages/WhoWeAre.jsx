import PageSubTitle from "../templates/PageSubTitle";
import PageText from "../templates/PageText";
import PageTitle from "../templates/PageTitle";

export default function WhoWeAre() {
  const imgUrl = "banners/who-we-are.jpg";
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
