import { Button } from "@headlessui/react";

export default function CampaignSection({ children, titleLogo }) {
  return (
    <>
      <img src={`images/${titleLogo}`} className="mx-20 md:mx-52 lg:mx-80" />
      <div className="grid lg:grid-cols-2 gap-6 m-16">
        <div className="text-black border h-100 border-black">
          <img src="/images/stock-charity.jpg" />
        </div>
        <div className="text-black border border-black text-justify p-2">
          {children}
        </div>
        <div>
          <Button className="rounded p-2 mx-20 text-lg font-semibold text-[--maroon] border-2 border-[--maroon] data-[hover]:bg-[--maroon] data-[hover]:text-white data-[active]:bg-red-500">
            DONATE TO OUR EMERGENCY FUND
          </Button>
        </div>
      </div>
    </>
  );
}
