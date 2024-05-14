import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

interface TimelineEvent {
  time: string;
  value: string;
}


const WeddingInvitation: React.FC = () => {
  const timeline: TimelineEvent[] = [
    { time: "4:00 PM", value: "Pre Ceremony" },
    { time: "4:30 PM", value: "Wedding Ceremony" },
    { time: "6:00 PM", value: "Social Hours" },
    { time: "8:00 PM", value: "Welcome Drink" },
    { time: "8:30 PM", value: "Introduction" },
    { time: "9:00 PM", value: "Couple Entrance" },
    { time: "10:00 PM", value: "Dinner" },
    { time: "11:30 PM", value: "Banquet Toss" },
    { time: "12:15 PM", value: "Last Drinks" },
  ];



  return (
    <div>
      <NavigationBar />
      <div
        className="relative text-white text-center h-60"
        style={{
          backgroundImage: "url('../../invitationCover.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-semibold font-poppins mb-5 tracking-wider">
            Isabella & Andrew
          </h1>
          <p className="font-poppins font-medium text-[#FFFFFF99] text-2xl text-primary">
            Wedding ceremony
          </p>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center px-12 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold font-poppins mb-5 text-[#121212] tracking-wide">
            Invitation For The Wedding
          </h2>
          <p className="font-poppins text-[#494949]">
            We're thrilled to see you here! Get ready for a cocktail of love,
            laughter, and happily-ever-afters. See you at the wedding!
          </p>
        </div>
        <div
          className="pt-20 max-w-3xl w-full rounded-xl font-poppins object-cover"
          style={{
            backgroundImage: "url('../../invitationCard.png')",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col gap-3 text-center mb-16 mt-28">
            <p className="text-white font-medium">
              Together with their families
            </p>
            <p className="text-primary font-bold text-4xl tracking-wider">
              Mr. Andrew & Ms. Isabella
            </p>
            <p className="text-white font-medium">
              Invites you to join their wedding
            </p>
          </div>
          <div className="flex flex-col gap-5 text-center mb-16">
            <div className="flex flex-col gap-2">
              <p className="text-primary font-semibold text-xl">Date</p>
              <p className="text-white font-medium">
                On Wednesday, 24 July 2024 at 4:00 p.m.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-primary font-semibold text-xl">Place</p>
              <p className="text-white font-medium">Blanc De Chene</p>
            </div>
          </div>
          <div className="flex flex-col text-center items-center justify-center mb-12">
            <p className="text-primary font-semibold text-xl mb-5">
              Wedding Day Timeline
            </p>
            <div className="w-full max-w-sm flex flex-col gap-3 items-center justify-center">
              <div className="flex flex-col gap-2 items-center justify-center">
                {timeline.map((event, i) => (
                  <div
                    key={i}
                    className="flex text-center w-full items-center gap-5"
                  >
                    <p className="text-red-500 font-semibold text-left">
                      {event.time} :{" "}
                    </p>
                    <p className="text-white">{event.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center gap-3 mb-12">
       <input type="string" placeholder="Full name" className="flex center border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins"
           />
        <div className="flex items-center gap-5 font-poppins">
        <p className="font-poppins text-2xl text-[#000000CC] tracking-wider font-semibold">
          RSVP
        </p>
          <button className="bg-primary text-white w-24 px-4 py-2 hover:shadow-lg font-semibold rounded-xl">
            Yes
          </button>
          <button className="bg-primary text-white hover:shadow-lg w-24 px-4 py-2 rounded-xl font-semibold">
            No
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default WeddingInvitation;
