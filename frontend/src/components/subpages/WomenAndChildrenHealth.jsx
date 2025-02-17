import Footer from "../Footer";
import PageSubTitle from "../templates/PageSubTitle";
import PageText from "../templates/PageText";
import PageTitle from "../templates/PageTitle";
import { Link } from "react-router";

export default function WomenAndChildrenHealth() {
  const imgUrl = "banners/women-and-children.jpg";
  return (
    <>
      <div className="w-window flex flex-col justify-center text-center mb-10">
        <PageTitle imgUrl={imgUrl}></PageTitle>
        <PageText>
          At The Humankind Charity, our Womenkind Campaign is a testament to the
          importance of kindness in empowering women and supporting mothers and
          their children. We focus on providing essential resources such as
          sanitary pads, diapers, baby formula, and hygiene products to ensure
          that women can maintain their health, dignity, and well-being. By
          addressing the unique needs of women, especially in vulnerable
          communities, we create a foundation of support for mothers and their
          babies to thrive even in the most challenging circumstances.
          <br />
          <br />
          Your generosity allows us to deliver care packages tailored to the
          needs of women and infants, restoring dignity and hope to those who
          need it most. Together, we can provide vital relief to mothers
          struggling to feed and care for their children, ensuring they receive
          the essentials to foster their families' health and resilience. Join
          us in being kind to women and empowering them to build brighter
          futures for themselves and their loved ones.
        </PageText>
        <h2 className="h-64 text-3xl md:text-xl font-semibold mx-2 my-5 h-auto py-2 text-black">
          CLICK HERE TO FIND OUT MORE ABOUT
        </h2>
        <Link to="/womenkind" className="mx-20 md:mx-52 lg:mx-96">
          <img src={`/images/womenkind-logo.png`} className="aspect-auto" />
        </Link>
        <PageSubTitle>CAMPAIGN</PageSubTitle>
        <div>
          <button className="rounded p-2 mx-20 text-lg font-semibold text-[--maroon] border-2 border-[--maroon] hover:bg-[--maroon] hover:text-white active:bg-red-700">
            DONATE TO OUR EMERGENCY FUND
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
