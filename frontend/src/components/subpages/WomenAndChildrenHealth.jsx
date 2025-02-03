import { Button } from "@headlessui/react";
import PageSubTitle from "../templates/PageSubTitle";
import PageText from "../templates/PageText";
import PageTitle from "../templates/PageTitle";

export default function WomenAndChildrenHealth() {
  return (
    <div className="w-window flex flex-col justify-center text-center mb-10">
      <PageTitle>WOMEN AND CHILDREN HEALTH</PageTitle>
      <PageText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu diam
        quis urna maximus pharetra. Sed euismod, lectus sit amet fringilla
        aliquet, leo nunc tristique quam, ac scelerisque mi lacus non nibh.
        Fusce molestie mattis tristique. Maecenas in nisi cursus, tincidunt
        magna ac, scelerisque erat. Aliquam euismod erat mollis lorem sagittis,
        in ornare ipsum facilisis. Vivamus ut vehicula justo. Maecenas tincidunt
        tempor maximus. Nam sem ex, commodo at imperdiet in, eleifend eget enim.
        Aenean sed metus fermentum, consectetur urna et, commodo magna. Praesent
        posuere eros nec erat accumsan, sit amet venenatis libero vulputate.
      </PageText>
      <PageSubTitle>CLICK HERE TO FIND OUT MORE ABOUT</PageSubTitle>
      <img
        src={`/images/womankind-logo-alt.png`}
        className="mx-20 md:mx-52 lg:mx-96"
      />
      <PageSubTitle>CAMPAIGN</PageSubTitle>
      <div className="flex justify-center">
        <hr className="w-52 mt-10 mb-2 border-t-2 border-[--maroon]" />
      </div>
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
        <Button className="rounded p-2 mx-20 text-lg font-semibold text-[--maroon] border-2 border-[--maroon] data-[hover]:bg-[--maroon] data-[hover]:text-white data-[active]:bg-red-500">
          DONATE TO OUR EMERGENCY FUND
        </Button>
      </div>
    </div>
  );
}
