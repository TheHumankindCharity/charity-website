import Footer from "../Footer";
import PageSubTitle from "../templates/PageSubTitle";
import PageText from "../templates/PageText";
import PageTitle from "../templates/PageTitle";

export default function Volunteer() {
  const imgUrl = "banners/volunteer.jpg";
  return (
    <>
      <div className="w-window flex flex-col justify-center text-center mb-10">
        <PageTitle imgUrl={imgUrl}></PageTitle>
        <PageSubTitle>TOGETHER WE STAND FOR THOSE IN NEED</PageSubTitle>
        <div className="grid lg:grid-cols-2 gap-1 mx-14 items-start">
          <div className="flex flex-col mb-5">
            <button className="rounded p-2 mx-20 text-lg font-semibold text-white bg-[--maroon] border-2 border-[--maroon] hover:bg-red-700 hover:text-white active:bg-red-600">
              APPLY TO VOLUNTEER
            </button>
            <span className="text-[--maroon] mt-5">
              Volunteer today. Change tomorrow.
            </span>
          </div>
          <div className="flex justify-center">
            <div className="text-black text-justify text-md max-w-xl">
              <span className="font-semibold">Volunteering</span> with The
              Humankind Charity is more than just an opportunity to give back;
              it's a chance to make a meaningful difference in the lives of
              those who need it most. By dedicating your time and effort, you
              become an essential part of our mission to provide support and
              hope to vulnerable communities facing crisis. Every volunteer
              plays a key role in helping us deliver life-saving resources such
              as food, water, medical aid, and shelter to those in desperate
              need.
              <br />
              <br />
              Volunteering is significant not just in this life but also in the
              Akhira. It builds your character and places you among those who
              play a meaningful role in the ummah. As the Prophet Muhammad ﷺ
              said,{" "}
              <span className="font-semibold">
                "The best of people are those who are most beneficial to others"
              </span>
              . Through acts of service, you fulfill a higher purpose, earning
              rewards both in this world and the next, while becoming a beacon
              of hope and compassion for others.
            </div>
          </div>
        </div>

        <PageSubTitle>VOLUNTEERING FOR THE HUMANKIND CHARITY</PageSubTitle>
        <PageText>
          Volunteering is not only about what you can give, but also about what
          you receive. The experience of volunteering with The Humankind Charity
          fosters a deeper sense of compassion, resilience, and gratitude. It
          connects you with others who share your values, creating a strong
          community of like-minded individuals who work together to create
          positive change. Each task, no matter how small, contributes to a
          larger effort of lifting people out of hardship and providing them
          with the tools they need to rebuild their lives. The bond you form
          with fellow volunteers and the people we serve is something that stays
          with you, enriching your personal growth and understanding of the
          power of kindness.
          <br />
          <br />
          For many volunteers, the experience of serving others brings a sense
          of fulfilment that goes beyond what words can express. You will see
          firsthand the impact of your efforts and witness how even small acts
          of kindness can have a profound effect on those in need. You become a
          beacon of hope, reminding those who are suffering that they are not
          forgotten.
          <br />
          <br />
          Volunteering with The Humankind Charity also offers the opportunity to
          grow as an individual. It challenges you to step outside your comfort
          zone, develop new skills, and gain a deeper understanding of global
          issues. Whether it's sharing our campaigns, or volunteering at one of
          our relief events, every opportunity to volunteer is a chance to make
          a lasting impact on both the communities we serve and yourself. You
          become part of a movement of change, embodying the values of kindness
          and solidarity that are at the heart of everything we do.
          <br />
          <br />
          When you volunteer with us, you're not just helping others; you're
          becoming part of a larger mission that transcends borders, cultures,
          and backgrounds. As The Humankind Charity works to provide hope and
          relief to those in need, volunteers play an integral role in this
          journey. Your actions ripple out into the world, creating waves of
          change that have the power to heal and inspire. By joining us as a
          volunteer, you help write a story of compassion, generosity, and
          unity; one that changes lives, including your own.
        </PageText>

        <PageSubTitle>VOLUNTEER TODAY. CHANGE TOMORROW.</PageSubTitle>
        <video className="rounded-lg mx-12 md:mx-20 lg:mx-48" controls>
          <source
            src="https://docs.material-tailwind.com/demo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div>
          <button className="rounded p-2 mx-20 text-lg font-semibold text-white bg-[--maroon] border-2 border-[--maroon] hover:bg-red-700 hover:text-white active:bg-red-600 mt-10">
            APPLY TO VOLUNTEER
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
