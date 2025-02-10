export default function CampaignSection({ children, titleLogo }) {
  return (
    <>
      <div className="mx-12 md:mx-52 lg:mx-80">
        <img src={`images/${titleLogo}`} className="aspect-auto" />
      </div>
      <div className="grid lg:grid-cols-2 gap-6 m-10 items-start">
        <div className="text-black h-100 flex justify-center">
          <img src="https://placehold.co/600x400" />
        </div>
        <div className="flex justify-center">
          <div className="text-black text-justify text-sm max-w-xl">
            {children}
          </div>
        </div>
        <div>
          <button className="rounded p-2 mx-12 text-lg font-semibold text-[--maroon] border-2 border-[--maroon] hover:bg-[--maroon] hover:text-white active:bg-red-700">
            DONATE TO OUR EMERGENCY FUND
          </button>
        </div>
      </div>
    </>
  );
}
