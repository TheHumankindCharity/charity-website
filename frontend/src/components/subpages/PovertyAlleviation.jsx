import Footer from "../Footer";
import PageSubTitle from "../templates/PageSubTitle";
import PageText from "../templates/PageText";
import PageTitle from "../templates/PageTitle";
import { Link } from "react-router";

export default function PovertyAlleviation() {
  const imgUrl = "banners/poverty-alleviation.jpg";
  return (
    <>
      <div className="w-window flex flex-col justify-center text-center mb-10">
        <PageTitle imgUrl={imgUrl}></PageTitle>
        <PageText>
          At The Humankind Charity, our Humankind Campaign is driven by the
          belief that kindness can transform lives. Focusing on the struggle to
          secure basic human needs, we work tirelessly to alleviate the pain of
          hunger and thirst faced by countless families, children, and babies.
          Through the generosity donations from Humankind, we provide essential
          aid such as nutritious food, clean water, and other vital resources to
          those in crisis, giving them a chance to survive and thrive despite
          unimaginable hardships.
          <br />
          <br />
          Your contributions make an immediate and tangible difference, offering
          a lifeline to people living in extreme poverty. With your help, we can
          ensure that families receive the nourishment and care they need to see
          another day free from starvation and the devastating effects of water
          scarcity. Together, through compassion and generosity, we can bring
          hope to those most in need and create a future where no one must face
          such struggles alone.
        </PageText>
        <h2 className="h-64 text-3xl md:text-xl font-semibold mx-2 my-5 h-auto py-2 text-black">
          CLICK HERE TO FIND OUT MORE ABOUT
        </h2>
        <Link to="/humankind" className="mx-20 md:mx-52 lg:mx-96">
          <img src={`/images/humankind-logo.png`} className="aspect-auto" />
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
