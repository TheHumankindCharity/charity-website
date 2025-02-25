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
import { Link, useNavigate, useSearchParams } from "react-router";

const navItems = [
  {
    name: "WHAT WE DO",
    description: "Get a better understanding of your traffic",
    href: "/what-we-do",
    dropdownItems: [
      {
        name: "Poverty Alleviation",
        description: "Get a better understanding of your traffic",
        href: "/what-we-do/poverty-alleviation",
      },
      {
        name: "Humankind",
        description: "Speak directly to your customers",
        href: "/humankind",
      },
      {
        name: "Women and children health",
        description: "Your customers’ data will be safe and secure",
        href: "/what-we-do/women-and-children",
      },
      {
        name: "Womenkind",
        description: "Connect with third-party tools",
        href: "/womenkind",
      },
      {
        name: "Emergencies",
        description: "Build strategic funnels that will convert",
        href: "/emergencies",
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
        href: "/donate",
      },
      {
        name: "Events and fundraisers",
        href: "/events-and-fundraisers",
      },
      {
        name: "Volunteer",
        href: "/volunteer",
      },
      {
        name: "Become a partner",
        href: "/become-a-partner",
      },
    ],
  },
  {
    name: "EMERGENCIES",
    description: "Your customers’ data will be safe and secure",
    href: "/emergencies",
    dropdownItems: [
      {
        name: "Syrian Crisis",
        description: "Get a better understanding of your traffic",
        href: "/emergencies/syrian-crisis",
      },
    ],
  },
  {
    name: "ABOUT US",
    description: "Connect with third-party tools",
    href: "/about-us",
    dropdownItems: [
      {
        name: "Who we work with",
        href: "/about-us/who-we-work-with",
        img: "who-we-work-with.png",
      },
      { name: "Volunteer", href: "/volunteer", img: "volunteer.png" },
      { name: "Contact us", href: "/contact-us", img: "contact-us.png" },
    ],
  },
];

export default function Header({ setSearchResult }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  // const [buttonType, setButtonType] = useState("submit");

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setSearchResult(searchInput);
    navigate("/search");
    setMobileMenuOpen(false);
    setSearchInput("");
  };

  return (
    <header className="fixed w-screen bg-white border-b border-gray-400 z-[1]">
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
          <form
            className="hidden lg:flex lg:flex-1 lg:flex-row-reverse lg:justify-start my-3 mr-5"
            onSubmit={handleSubmitSearch}
          >
            <button
              className="peer group p-2 hover:bg-[--maroon]"
              type={searchInput ? "submit" : "button"}
            >
              <MagnifyingGlassIcon
                aria-hidden="true"
                className="h-full flex-none lg:block text-[--maroon] group-hover:text-white group-hover:bg-[--maroon] rounded"
              />
            </button>
            <input
              className="peer relative lg:invisible text-black p-2 border border-gray-400 transition-all duration-300 ease-in-out focus:outline-none w-0 focus:w-full focus:visible peer-focus:w-full peer-focus:visible"
              type="search"
              placeholder="Search..."
              value={searchInput}
              onChange={handleSearchInput}
            />
          </form>
          <a
            href="/donate"
            className="text-sm/2 font-semibold bg-[--maroon] p-5 text-white hover:bg-red-700"
          >
            DONATE
          </a>
        </div>
      </nav>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-8xl items-center justify-between lg:justify-center p-0 lg:px-8 border-t border-gray-400"
      >
        <div className="lg:hidden flex lg:flex-1">
          <a href="/home" className="-m-1.5 p-1.5">
            <span className="sr-only">The Humankind Charity</span>
            <img
              alt=""
              src="/images/charity-logo-alt.png"
              className="h-14 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden lg:justify-end">
          <a
            href="/donate"
            className="text-sm/2 font-semibold bg-[--maroon] p-5 text-white hover:bg-red-700"
          >
            DONATE
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md px-2.5 text-gray-700 mx-1 outline-none"
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
              <span className="sr-only">The Humankind Charity</span>
              <img
                alt=""
                src="/images/charity-logo-alt.png"
                className="h-14 w-auto"
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
                  href="/donate"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  DONATE
                </a>
                <form
                  className="flex lg:hidden justify-start my-3"
                  onSubmit={handleSubmitSearch}
                >
                  <button
                    className="peer group p-2 hover:bg-[--maroon] w-11"
                    type="submit"
                  >
                    <MagnifyingGlassIcon
                      aria-hidden="true"
                      className="h-full flex-none lg:block text-[--maroon] group-hover:text-white group-hover:bg-[--maroon] rounded"
                    />
                  </button>
                  <input
                    className="peer relative w-24 text-black p-2 border border-gray-400 transition-all duration-300 ease-in-out outline-none w-0 focus:w-full focus:visible peer-focus:visible"
                    type="search"
                    placeholder="Search..."
                    value={searchInput}
                    onChange={handleSearchInput}
                  />
                </form>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
