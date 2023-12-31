import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Counter from "../Repetitive/Counter";
import TeamCard from "../Repetitive/TeamCard";
import Brands from "../Repetitive/Brands";
//img path
import team1 from "/src/assets/teamsHeader/teamCard/team-1-user-3 (1).jpg";
import team2 from "/src/assets/teamsHeader/teamCard/team-1-user-1 (2).jpg";
import team3 from "/src/assets/teamsHeader/teamCard/team-1-user-1 (1).jpg";
import person from "/src/assets/about/none.png";
import person2 from "/src/assets/about/unsplash_vjMgqUkS8q8.png";
const About = () => {
  const TeamCardData = [
    {
      url: team1,
    },
    {
      url: team2,
    },
    {
      url: team3,
    },
  ];
  return (
    <div>
      <Header />
      <section className="flex items-center justify-evenly xs:flex-wrap middle:flex-nowrap xs:p-10">
        <div className="xs:text-center middle:text-start">
          <h5 className="font-bold text-lg text-dark-navy mb-10 xs:hidden middle:block">
            ABOUT COMPANY
          </h5>
          <h1 className="font-bold text-dark-navy text-[3.6rem] mb-10">
            ABOUT US
          </h1>
          <p className="text-secondary-text text-xl mb-10 middle:w-[396px] xs:w-full">
            We know how large objects will act, but things on a small scale
          </p>
          <button
            className="bg-primary-blue border-[1px] border-primary-blue 
          rounded text-white px-9 py-3 hover:text-primary-blue duration-500 hover:bg-white"
          >
            Get Quote Now
          </button>
        </div>
        <div className="xs:mt-20 middle:mt-0">
          <img src={person} alt="" />
        </div>
      </section>
      <section className="flex items-center justify-evenly xs:mt-12 middle:mt-24 mb-24 xs:flex-wrap middle:flex-nowrap">
        <div className="xs:p-10 middle:p-0 xs:text-center middle:text-start">
          <p className="text-[#E74040] font-sm mb-10">Problems trying</p>
          <h3 className="font-bold text-2xl text-dark-navy middle:w-[380px] xs:w-full">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <div className="xs:p-10 middle:p-0">
          <p className="text-sm text-secondary-text middle:w-[520px] xs:w-full xs:mt-8">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </section>
      <section className="flex justify-evenly mb-40 mt-24 xs:flex-col middle:flex-row xs:gap-20 middle:gap-0">
        <div className="flex flex-col items-center">
          <div className="flex font-bold text-dark-navy text-[3.4rem]">
            <Counter to={15} from={0} />K
          </div>
          <p className="counterP">Happy Customers</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex font-bold text-dark-navy text-[3.4rem]">
            <Counter to={150} from={0} />K
          </div>
          <p className="counterP">Monthly Visitors</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex font-bold text-dark-navy text-[3.4rem]">
            <Counter to={15} from={0} />
          </div>
          <p className="counterP">Countries Worldwide</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex font-bold text-dark-navy text-[3.4rem]">
            <Counter to={100} from={0} />+
          </div>
          <p className="counterP">Top Partners</p>
        </div>
      </section>
      <section className="flex justify-center xs:mb-32 middle:mb-40 p-10">
        <iframe
          className="w-full aspect-video rounded-xl"
          width="990"
          height="540"
          src="https://www.youtube.com/embed/7bOptq-NPJQ"
          frameBorder="0"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </section>
      <section>
        <div className="text-center mt-14 mb-5 ">
          <h1 className="font-bold text-[2.5rem] text-dark-navy">
            Meet Our Team
          </h1>
        </div>
        <div className="text-center mb-32 ">
          <p className="text-sm text-secondary-text">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="flex justify-center gap-6 flex-wrap max-w-[1060px] mx-auto w-full mb-20">
          {TeamCardData.map((item, index) => {
            const { url } = item;
            return <TeamCard key={index} url={url} />;
          })}
        </div>
        <div className="text-center bg-[#FAFAFA] xs:pt-28 middle:pt-20 pb-5 xs:px-10">
          <h2 className="font-bold text-dark-navy text-[2.5rem] mb-10">
            Big Companies Are Here
          </h2>
          <p className="text-secondary-text text-sm">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <Brands />
        <div className="xs:flex-none middle:flex justify-center">
          <div className="bg-[#297dc8] text-white w-full mx-auto flex justify-center items-center">
            <div className="xs:p-12 middle:p-5 xs:text-center middle:text-left">
              <h5 className="font-bold mb-5">WORK WITH US</h5>
              <h1 className="font-bold mb-5 text-[2.5rem]">
                Now Let’s grow Yours
              </h1>
              <p className="text-sm mb-5">
                The gradual accumulation of information about atomic and <br />
                small-scale behavior during the first quarter of the 20th
              </p>
              <button className="border-[1px] border-white px-9 py-3 font-bold duration-500 hover:bg-white hover:text-primary-blue">
                Button
              </button>
            </div>
          </div>
          <div className="xs:hidden middle:block">
            <img src={person2} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default About;
