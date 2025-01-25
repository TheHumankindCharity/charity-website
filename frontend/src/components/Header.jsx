import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  PopoverGroup,
  Input,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import Dropdown from "./Dropdown";
import { Link } from "react-router";

const navItems = [
  {
    name: "WHAT WE DO",
    description: "Get a better understanding of your traffic",
    href: "/what-we-do",
    dropdownItems: [
      {
        name: "Poverty Alleviation",
        description: "Get a better understanding of your traffic",
        href: "#",
      },
      {
        name: "Humankind",
        description: "Speak directly to your customers",
        href: "#",
      },
      {
        name: "Women and children health",
        description: "Your customers’ data will be safe and secure",
        href: "#",
      },
      {
        name: "Womankind",
        description: "Connect with third-party tools",
        href: "#",
      },
      {
        name: "Emergencies",
        description: "Build strategic funnels that will convert",
        href: "#",
      },
    ],
  },
  {
    name: "HOW YOU CAN HELP",
    description: "Speak directly to your customers",
    href: "/how-you-can-help",
    dropdownItems: [
      {
        name: "Donate",
        description: "Get a better understanding of your traffic",
        href: "#",
      },
      {
        name: "Volunteer",
        description: "Speak directly to your customers",
        href: "#",
      },
    ],
  },
  {
    name: "EMERGENCIES",
    description: "Your customers’ data will be safe and secure",
    href: "/emergencies",
    dropdownItems: [
      {
        name: "Syria Crisis",
        description: "Get a better understanding of your traffic",
        href: "#",
      },
    ],
  },
  {
    name: "ABOUT US",
    description: "Connect with third-party tools",
    href: "/about-us",
    dropdownItems: [
      {
        name: "Who we are",
        description: "Get a better understanding of your traffic",
        href: "#",
      },
      {
        name: "Volunteer",
        description: "Speak directly to your customers",
        href: "#",
      },
      {
        name: "Who we work with",
        description: "Your customers’ data will be safe and secure",
        href: "#",
      },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-screen bg-white border-b border-black z-[1]">
      <nav
        aria-label="Global"
        className="hidden lg:flex py-0 mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8"
      >
        <div className="hidden lg:flex flex lg:flex-1">
          <Link to="/home" className="-m-1.5 p-1.5">
            <span className="sr-only">The Humankind Charity</span>
            <img
              alt=""
              src="/images/charity-logo-alt.png"
              className="h-16 w-auto"
            />
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="lg:flex lg:flex-1 lg:justify-center border border-black grow">
            <Input
              className="hidden  lg:block flex-1 text-black px-1 focus:outline-none"
              name="full_name"
              type="text"
            />
            <a href="#">
              <MagnifyingGlassIcon
                aria-hidden="true"
                className="h-3/4 flex-none lg:flex border border-black text-black bg-white hover:border-[--maroon] hover:text-[--maroon] m-2 rounded"
              />
            </a>
          </div>
          <a
            href="#"
            className="text-sm/2 font-semibold bg-[--maroon] p-5 text-white hover:bg-red-600"
          >
            DONATE
          </a>
        </div>
      </nav>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-8xl items-center justify-between lg:justify-center p-0 lg:px-8 border-t border-black"
      >
        <div className="lg:hidden flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="/images/charity-logo-alt.png"
              className="h-14 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden lg:justify-end">
          <a
            href="#"
            className="text-sm/2 font-semibold bg-[--maroon] p-5 text-white hover:bg-red-600"
          >
            DONATE
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md px-2.5 text-gray-700 mx-1"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-6">
          {navItems.map((navItem, index) => (
            <Dropdown navItem={navItem} key={index} />
          ))}
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/home" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/images/charity-logo-alt.png"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                aria-hidden="true"
                className="size-6 text-[--maroon]"
              />
            </button>
          </div>
          <hr className="w-window mt-4 -mx-6" />
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navItems.map((navItem, index) => (
                  <Disclosure key={index} as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 data-[open]:text-[--maroon]">
                      {navItem.name}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none group-data-[open]:rotate-180 text-[--maroon]"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      <DisclosureButton
                        key="discover more"
                        as="a"
                        href={navItem.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Discover more
                      </DisclosureButton>
                      {navItem.dropdownItems.map((dropdownItem) => (
                        <DisclosureButton
                          key={dropdownItem.name}
                          as="a"
                          href={dropdownItem.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          {dropdownItem.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  DONATE
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
