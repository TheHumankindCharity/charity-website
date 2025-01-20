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
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
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
        icon: ChartPieIcon,
      },
      {
        name: "Humankind",
        description: "Speak directly to your customers",
        href: "#",
        icon: CursorArrowRaysIcon,
      },
      {
        name: "Women and children health",
        description: "Your customers’ data will be safe and secure",
        href: "#",
        icon: FingerPrintIcon,
      },
      {
        name: "Womankind",
        description: "Connect with third-party tools",
        href: "#",
        icon: SquaresPlusIcon,
      },
      {
        name: "Emergencies",
        description: "Build strategic funnels that will convert",
        href: "#",
        icon: ArrowPathIcon,
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
        icon: ChartPieIcon,
      },
      {
        name: "Volunteer",
        description: "Speak directly to your customers",
        href: "#",
        icon: CursorArrowRaysIcon,
      },
    ],
  },
  {
    name: "EMERGENCIES",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    dropdownItems: [
      {
        name: "Syria Crisis",
        description: "Get a better understanding of your traffic",
        href: "#",
        icon: ChartPieIcon,
      },
    ],
  },
  {
    name: "ABOUT US",
    description: "Connect with third-party tools",
    href: "#",
    dropdownItems: [
      {
        name: "Who we are",
        description: "Get a better understanding of your traffic",
        href: "#",
        icon: ChartPieIcon,
      },
      {
        name: "Volunteer",
        description: "Speak directly to your customers",
        href: "#",
        icon: CursorArrowRaysIcon,
      },
      {
        name: "Who we work with",
        description: "Your customers’ data will be safe and secure",
        href: "#",
        icon: FingerPrintIcon,
      },
    ],
  },
];

const products = [
  {
    name: "Poverty Alleviation",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Humankind",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Women and children health",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Womankind",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Emergencies",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-screen bg-white border-b border-black">
      <nav
        aria-label="Global"
        className="hidden lg:flex py-0 mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8"
      >
        <div className="hidden lg:flex flex lg:flex-1">
          <Link to="/home" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="/images/charity-logo-alt.png"
              className="h-14 w-auto"
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
                className="h-3/4 flex-none lg:flex border border-black text-black bg-white hover:border-red-500 hover:text-red-700 m-2 rounded"
              />
            </a>
          </div>
          <a
            href="#"
            className="text-sm/2 font-semibold bg-red-700 p-5 text-white hover:bg-red-500"
          >
            DONATE
          </a>
        </div>
      </nav>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-8xl items-center justify-between lg:justify-center p-6 lg:px-8 border-t border-black"
      >
        <div className="lg:hidden flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="/images/charity-logo-alt.png"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <div className="lg:flex lg:flex-1 lg:justify-end mr-2">
            <a
              href="#"
              className="text-sm/2 font-semibold bg-red-700 p-5 text-white hover:bg-red-500"
            >
              DONATE
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 mx-1"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
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
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    WHAT WE DO
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  HOW YOU CAN HELP
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  EMERGENCIES
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  ABOUT US
                </a>
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
