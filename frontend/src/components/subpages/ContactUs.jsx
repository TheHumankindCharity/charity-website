import { Link } from "react-router";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

import ContactForm from "../templates/ContactForm";
import PageSubTitle from "../templates/PageSubTitle";
import PageTitle from "../templates/PageTitle";
import Footer from "../Footer";

export default function ContactUs() {
  const imgUrl = "banners/contact-us.jpg";
  return (
    <>
      <div className="w-window flex flex-col justify-center mb-10">
        <PageTitle imgUrl={imgUrl}></PageTitle>
        <div className="grid lg:grid-cols-2 gap-1 mx-14 items-start">
          <div className="text-center my-10">
            <h2 className="text-xl md:text-lg font-semibold py-2 text-black mb-1">
              Get in touch with us. We would love to hear from you:
            </h2>
            <a
              href=""
              className="group text-black hover:underline hover:text-[--maroon] text-xs md:text-base"
            >
              <EnvelopeIcon
                aria-hidden="true"
                className="inline-block size-6 text-gray-500 group-hover:text-[--maroon] mr-5"
              />
              info@thehumankindcharity.org
            </a>
            <h2 className="text-xl md:text-lg font-semibold py-2 text-black mt-10 mb-1">
              Volunteer Enquiries:
            </h2>
            <a
              href=""
              className="group text-black hover:underline hover:text-[--maroon] text-xs md:text-base"
            >
              <EnvelopeIcon
                aria-hidden="true"
                className="inline-block size-6 text-gray-500 group-hover:text-[--maroon] mr-5"
              />
              volunteers@thehumankindcharity.org
            </a>
          </div>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
