import { useSearchParams } from "react-router";
import PageSubTitle from "./templates/PageSubTitle";
import PageLinksHover from "./templates/PageLinksHover";
import { useEffect } from "react";

const searchableList = [
  {
    name: "What we do",
    href: "what-we-do",
    img: "squares-and-circles/what-we-do.png",
  },
  {
    name: "How you can help",
    href: "/how-you-can-help",
    img: "squares-and-circles/how-you-can-help.png",
  },
  {
    name: "Emergencies",
    href: "/emergencies",
    img: "squares-and-circles/emergencies.png",
  },
  {
    name: "About Us",
    href: "/about-us",
    img: "banners/about-us.jpg",
  },
  { name: "Donate", href: "/donate", img: "squares-and-circles/donate.png" },
  {
    name: "Volunteer",
    href: "/volunteer",
    img: "squares-and-circles/volunteer.png",
  },
  {
    name: "Humankind",
    href: "/humankind",
    img: "squares-and-circles/humankind.png",
  },
  {
    name: "Womenkind",
    href: "/womenkind",
    img: "squares-and-circles/womenkind.png",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
    img: "squares-and-circles/contact-us.png",
  },
  {
    name: "Poverty Alleviation",
    href: "/what-we-do/poverty-alleviation",
    img: "squares-and-circles/poverty-alleviation.png",
  },
  {
    name: "Women and children health",
    href: "/what-we-do/women-and-children",
    img: "squares-and-circles/women-and-children.png",
  },
  {
    name: "Events and fundraisers",
    href: "/events-and-fundraisers",
    img: "squares-and-circles/events-and-fundraisers.png",
  },
  {
    name: "Syrian Crisis",
    href: "/emergencies/syrian-crisis",
    img: "charity-logo-syria.jpg",
  },
  {
    name: "Who we work with",
    href: "/about-us/who-we-work-with",
    img: "squares-and-circles/who-we-work-with.png",
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
