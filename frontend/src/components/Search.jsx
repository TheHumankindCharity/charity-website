import { useSearchParams } from "react-router";
import PageSubTitle from "./templates/PageSubTitle";
import PageLinksHover from "./templates/PageLinksHover";
import { useEffect } from "react";

const searchableList = [
  {
    name: "WHAT WE DO",
    href: "what-we-do",
    img: "what-we-do.png",
  },
  {
    name: "HOW YOU CAN HELP",
    href: "/how-you-can-help",
    img: "how-you-can-help.png",
  },
  {
    name: "EMERGENCIES",
    href: "/emergencies",
    img: "emergencies.png",
  },
  {
    name: "ABOUT US",
    href: "/about-us",
    img: "about-us.png",
  },
  { name: "Donate", href: "/donate", img: "donate.png" },
  { name: "Volunteer", href: "/volunteer", img: "volunteer.png" },
  { name: "Humankind", href: "/humankind", img: "humankind.png" },
  { name: "Womenkind", href: "/womenkind", img: "womenkind.png" },
  { name: "Contact Us", href: "/contact-us", img: "contact-us.png" },
  {
    name: "Poverty Alleviation",
    href: "/what-we-do/poverty-alleviation",
    img: "poverty-alleviation.png",
  },
  {
    name: "Women and children health",
    href: "/what-we-do/women-and-children",
    img: "women-and-children.png",
  },
  {
    name: "Events and fundraising",
    href: "/events-and-fundraisers",
    img: "events-and-fundraisers.png",
  },
  {
    name: "Syria Crisis",
    href: "/emergencies/syria-crysis",
    img: "syria-crysis.png",
  },
  {
    name: "Who we are",
    href: "/about-us/who-we-are",
    img: "who-we-are.png",
  },
  {
    name: "Who we work with",
    href: "/about-us/who-we-work-with",
    img: "who-we-work-with.png",
  },
];

export default function Search({ searchResult }) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      query: searchResult,
    });
  }, [searchResult]);

  const filteredSearchList = searchableList.filter((searchItem) => {
    return searchItem.name.toLowerCase().includes(searchResult.toLowerCase());
  });
  return (
    <div className="w-window flex flex-col justify-center text-center mb-10">
      <div className="offset">
        <PageSubTitle>
          {filteredSearchList.length} Search Results for "{searchResult}"
        </PageSubTitle>
      </div>
      <PageLinksHover pageLinksList={filteredSearchList}></PageLinksHover>
    </div>
  );
}
