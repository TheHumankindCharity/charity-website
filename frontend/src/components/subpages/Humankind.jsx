import PageSubTitle from "../templates/PageSubTitle";
import PageText from "../templates/PageText";
import PageTitle from "../templates/PageTitle";

export default function Humankind() {
  const imgUrl = "banners/humankind.png";
  return (
    <div className="w-window flex flex-col justify-center text-center mb-10">
      <PageTitle imgUrl={imgUrl}></PageTitle>
      <PageText>
        In a world where millions are suffering from crisis and uncertainty,
        Humankind Campaign is a powerful reminder that compassion and generosity
        can restore hope and provide life-saving relief. As we witness the
        devastating effects of poverty, conflict, and natural disasters, we are
        reminded that no one should ever have to face such hardship alone.
        Humankind Campaign is dedicated to addressing the most urgent needs of
        communities in distress, providing essential food, clean water, and
        hygiene supplies to vulnerable families across Syria, Yemen, Sudan,
        Palestine, Lebanon, Kenya, and Jordan. Through this initiative, we
        strive to bring immediate relief to those who are most in need, offering
        a lifeline that helps them survive and begin to rebuild their lives.
        <br />
        <br />
        Every donation to the Humankind Campaign directly impacts the lives of
        families, children, orphans, and the elderly who are struggling to
        secure even the most basic necessities. We provide essential food
        packages containing items like rice, flour, canned goods, and cooking
        oil, which help to restore dignity and ensure that no one is left
        hungry. These food packages are more than just provisions; they
        represent hope, love, and solidarity from a global community that
        refuses to stand by in times of crisis. By addressing the immediate
        hunger and suffering of individuals, we empower them to regain strength
        and focus on rebuilding their futures, one small step at a time.
        <br />
        <br />
        In addition to food, the Humankind Campaign is committed to providing
        access to clean and safe drinking water, one of the most basic human
        needs that remains out of reach for many in crisis-affected regions.
        With your generous donations, we hope to expand our efforts to install
        clean water solutions and sanitation facilities, reducing the spread of
        waterborne diseases and improving the overall health of communities in
        need. Clean water is not just a resource; it is a symbol of survival and
        dignity, and our goal is to bring this essential service to as many
        families as possible, ensuring they no longer have to worry about the
        life-threatening consequences of contaminated water.
        <br />
        <br />
        The Humankind Campaign is a call to action for all of humanity to come
        together in the face of suffering. Through compassion, empathy, and
        generosity, we can make a tangible difference in the lives of those
        caught in the darkest moments of their lives. Whether through financial
        donations, volunteering, or spreading awareness, every small
        contribution helps us provide hope to those who need it most. The people
        we serve are not strangers, they are our brothers, sisters, mothers,
        fathers, and children. When you give to The Humankind Campaign, you are
        not just helping people in crisis, you are reaffirming the power of
        kindness, community, and the shared humanity that unites us all.
      </PageText>

      <PageSubTitle>OUR EMERGENCY FUND</PageSubTitle>
      <PageText>
        Donec egestas vulputate elementum. In hac habitasse platea dictumst.
        Integer cursus sit amet nulla sed ultrices. Nulla elementum lectus sem,
        in ornare risus convallis sit amet. Integer et ultricies diam. Mauris ut
        vulputate erat. Aenean cursus, ante a pulvinar euismod, quam justo
        bibendum enim, ut sodales orci urna at erat. Quisque ac posuere orci.
        Nunc imperdiet rhoncus porttitor. Duis suscipit ultricies nunc.
      </PageText>
      <div>
        <button className="rounded p-2 mx-20 text-lg font-semibold text-[--maroon] border-2 border-[--maroon] hover:bg-[--maroon] hover:text-white active:bg-red-700">
          DONATE TO OUR EMERGENCY FUND
        </button>
      </div>
    </div>
  );
}
