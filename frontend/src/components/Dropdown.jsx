import { useState } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Dropdown({ navItem }) {
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
      <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
        {navItem.name}
        <ChevronDownIcon
          aria-hidden="true"
          className="size-5 flex-none text-gray-400"
        />
      </PopoverButton>

      {showPopover && (
        <PopoverPanel
          anchor="bottom start"
          static={true}
          transition
          className="absolute top-full z-10 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
        >
          <div className="p-4">
            {navItem.dropdownItems.map((item) => (
              <div
                key={item.name}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
              >
                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon
                    aria-hidden="true"
                    className="size-6 text-gray-600 group-hover:text-indigo-600"
                  />
                </div>
                <div className="flex-auto">
                  <a
                    href={item.href}
                    className="block font-semibold text-gray-900"
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
              >
                <item.icon
                  aria-hidden="true"
                  className="size-5 flex-none text-gray-400"
                />
                {item.name}
              </a>
            ))}
          </div>
        </PopoverPanel>
      )}
    </Popover>
  );
}
