import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Dropdown({ navItem }) {
  let navigate = useNavigate();
  const [showPopover, setShowPopover] = useState(false);

  return (
    <Popover
      onMouseOver={() => {
        setShowPopover(true);
      }}
      onMouseOut={() => {
        setShowPopover(false);
      }}
      className="relative"
    >
      <PopoverButton
        onClick={() => {
          navigate(navItem.href);
          setShowPopover(false);
        }}
        className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 py-4 focus:outline-none"
      >
        <span className={showPopover ? "text-[--maroon]" : ""}>
          {navItem.name}
        </span>
        <ChevronDownIcon
          aria-hidden="true"
          className="size-5 flex-none text-[--maroon]"
        />
      </PopoverButton>

      {showPopover && (
        <PopoverPanel
          anchor="bottom start"
          static={true}
          transition
          className="absolute mt-0 top-full z-10 w-screen max-w-sm overflow-hidden bg-white border-b-4 border-[--maroon]"
        >
          <div className="grid grid-cols-7 divide-x m-8">
            <div className="p-4 col-span-3 flex flex-col justify-start">
              <h2 className="text-end text-4xl font-bold text-black">
                {navItem.name}
              </h2>
              <div className="text-end mt-5">
                <PopoverButton
                  onClick={() => {
                    navigate(navItem.href);
                    setShowPopover(false);
                  }}
                  className="text-2xl text-[--maroon] hover:text-red-600"
                >
                  Discover more
                </PopoverButton>
              </div>
            </div>
            <div className="col-span-4 grid grid-rows-3 grid-cols-2 grid-flow-col px-32 border-none">
              {navItem.dropdownItems.map((item) => (
                <div
                  className="relative flex items-center gap-x-2 rounded-lg p-4 text-sm/6 flex-auto"
                  key={item.name}
                >
                  <a
                    href={item.href}
                    className="block font-semibold text-gray-900 hover:text-red-700"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </PopoverPanel>
      )}
    </Popover>
  );
}
