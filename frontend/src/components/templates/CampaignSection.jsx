import { Button } from "@headlessui/react";

export default function CampaignSection({ children, titleLogo }) {
  return (
    <>
      <img src={`images/${titleLogo}`} className="mx-20 md:mx-52 lg:mx-80" />
      <div className="grid lg:grid-cols-2 gap-6 m-16 items-start">
        <div className="text-black h-100 flex justify-center">
          <img src="https://placehold.co/600x400" />
        </div>
        <div className="flex justify-center">
          <div className="text-black text-justify text-sm max-w-xl">
            {children}
          </div>
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
