import "./e30m3.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ModelViewer from "../components/ModelViewer";
import video from "../assets/e30-video.mp4";
import cup from "../assets/white-cup.png";
import evo1 from '../assets/evo1.png';
import evo2 from '../assets/evo2.jpg';
import evo3 from '../assets/sport-evo.webp';
import { Link } from "react-router-dom";

function E30M3() {
  return (
    <div className="main max-w-7xl mx-auto flex flex-col items-center justify-center">
      <Header />
      <div className="content w-full px-16 flex flex-col bg-[#131313]">
        <div className="hero relative w-full h-[800px] overflow-hidden">
          <video
            className="hero-video absolute inset-0 w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="heroContent absolute bottom-[20%] flex flex-col justify-end px-16 py-24">
            <div className="title text-[#E5E2E1] font-extrabold text-[80px] tracking-[-3.2px] font-[Anybody] uppercase italic">
              The <span className="text-[#FFB4AA]">e30 m3</span> legend
            </div>
            <div className="article text-[#E9BCB6] font-[Geist] text-[18px] w-[60%] ">
              Born from the racetrack, perfected for the road. The BMW M3 E30
              redefined the sports sedan and became the most successful touring
              car in history.
            </div>
          </div>
        </div>
        <div className="middle w-full flex flex-col gap-6 pb-24 ">
          <div className="middleTop w-full flex flex-row gap-6">
            <div className="leftContainer flex flex-col gap-5 px-12 py-12 border border-[#ffffff1a] bg-[#171717] w-[66%]">
              <div className="top uppercase text-[#A2C9FF] font-[Geist] font-bold text-[12px] tracking-[2.4px] ">
                engineering
              </div>
              <div className="middle capitalize text-[#E5E2E1] font-[Anybody] font-bold text-[40px] tracking-[-0.8px] ">
                the s14 masterpiece
              </div>
              <div className="bottom text-[#E9BCB6] font-[Geist] text-[16px] ">
                A high-revving 2.3-liter four-cylinder powerhouse derived from
                the M1's straight-six. It wasn't just an engine; it was a
                declaration of war on the circuit, delivering visceral response
                and unparalleled reliability.
              </div>
              <div className="statistics flex flex-row gap-12 mt-6 ">
                <div className="statContainer flex flex-col gap-1 ">
                  <div className="title text-[#FFB4AA] font-[Geist] font-bold text-[12px] uppercase">engine</div>
                  <div className="top text-[#E5E2E1] font-[Geist] font-medium text-2xl uppercase ">s14</div>
                  <div className="bottom text-[#E5E2E1] font-[Geist] font-medium text-2xl uppercase">i4</div>
                </div>
                <div className="statContainer flex flex-col gap-1 ">
                  <div className="title text-[#FFB4AA] font-[Geist] font-bold text-[12px] uppercase ">power</div>
                  <div className="top text-[#E5E2E1] font-[Geist] font-medium text-2xl uppercase ">200</div>
                  <div className="bottom text-[#E5E2E1] font-[Geist] font-medium text-2xl uppercase">CH</div>
                </div>
                <div className="statContainer flex flex-col gap-1 ">
                  <div className="title text-[#FFB4AA] font-[Geist] font-bold text-[12px] uppercase ">max speed</div>
                  <div className="top text-[#E5E2E1] font-[Geist] font-medium text-2xl uppercase ">235</div>
                  <div className="bottom text-[#E5E2E1] font-[Geist] font-medium text-2xl uppercase">KM/H</div>
                </div>
              </div>
            </div>
            <div className="rightContainer flex flex-col gap-8 px-12 py-12 text-[#FFFFFF] bg-[#E20613] w-[33%]">
              <div className="image">
                <img src={cup} alt="winning cup" />
              </div>
              <div className="title uppercase italic font-[Anybody] font-bold text-[32px]">
                WORLD'S MOST SUCCESSFUL TOURING CAR
              </div>
              <div className="article font-[Geist] text-[16px] ">
                Dominating the DTM, the E30 M3 claimed over 1,500 individual
                victories, cementing its place as a motorsport icon that could
                not be caught.
              </div>
            </div>
          </div>
          <div className="middleBottom flex flex-row w-full gap-6">
            <div className="bottomContainer border border-[#ffffff1a] bg-[#171717] flex flex-col gap-2 px-8 py-8 ">
              <div className="e30ImageContainer max-w-[302px]">
                <img src={evo1} alt="BMW M3 Evolution 1" className="w-full" />
              </div>
              <div className="date text-[#FFB4AA] font-[Geist] font-bold text-[12px] tracking-[1.2px] ">
                1987
              </div>
              <div className="title text-[#E5E2E1] font-[Anybody] font-bold text-[32px] uppercase">
                Evolution I
              </div>
              <div className="article text-[#E9BCB6] font-[Geist] text-[16px] ">
                The homologation special that started it all, featuring refined
                aerodynamics and a lighter chassis.
              </div>
            </div>
            <div className="bottomContainer border border-[#ffffff1a] bg-[#171717] flex flex-col gap-2 px-8 py-8 ">
              <div className="e30ImageContainer max-w-[302px]">
                <img src={evo2} alt="BMW M3 Evolution 2" className="w-full" />
              </div>
              <div className="date text-[#FFB4AA] font-[Geist] font-bold text-[12px] tracking-[1.2px] ">
                1988
              </div>
              <div className="title text-[#E5E2E1] font-[Anybody] font-bold text-[32px] uppercase">
                evolution II
              </div>
              <div className="article text-[#E9BCB6] font-[Geist] text-[16px] ">
                Power increased to 220 CH with a revised intake and specialized
                lightweight glass windows.
              </div>
            </div>
            <div className="bottomContainer border border-[#ffffff1a] bg-[#171717] flex flex-col gap-2 px-8 py-8 ">
              <div className="e30ImageContainer max-w-[302px]">
                <img src={evo3} alt="BMW M3 Sport Evolution" />
              </div>
              <div className="date text-[#FFB4AA] font-[Geist] font-bold text-[12px] tracking-[1.2px] ">
                1990
              </div>
              <div className="title text-[#E5E2E1] font-[Anybody] font-bold text-[32px] ">
                Sport EVO
              </div>
              <div className="article text-[#E9BCB6] font-[Geist] text-[16px] ">
                The pinnacle: 2.5L engine, 238 CH, and adjustable front/rear
                spoilers for maximum downforce.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="separator h-0.5 bg-[#E20613] w-full"></div>
      <div className="secondPart bg-[#0E0E0E] w-full px-16 py-24 flex flex-col ">
        <div className="title text-[#E5E2E1] font-[Anybody] font-bold text-[40px] mb-16 flex items-center justify-center tracking-[-0.8px] uppercase italic">performance data</div>
        <div className="moreStats flex flex-row justify-around">
          <div className="statsContainer flex flex-row ">
            <div className="left self-stretch w-0.5 bg-[#ffffff1a] "></div>
            <div className="right text-[#FFB4AA] font-bold px-8 py-8">
              <div className="big font-[Anybody] text-[40px] tracking-[-0.8px] uppercase">2.3L</div>
              <div className="little font-[Geist] text-[12px] tracking-[1.2px] uppercase">displacement</div>
            </div>
          </div>
          <div className="statsContainer flex flex-row">
            <div className="left self-stretch w-0.5 bg-[#ffffff1a] "></div>
            <div className="right text-[#FFB4AA] font-bold px-8 py-8">
              <div className="big font-[Anybody] text-[40px] tracking-[-0.8px] uppercase">6.7s</div>
              <div className="little font-[Geist] text-[12px] tracking-[1.2px] uppercase">0-100 km/h</div>
            </div>
          </div>
          <div className="statsContainer flex flex-row">
            <div className="left self-stretch w-0.5 bg-[#ffffff1a] "></div>
            <div className="right text-[#FFB4AA] font-bold px-8 py-8">
              <div className="big font-[Anybody] text-[40px] tracking-[-0.8px] uppercase">1200</div>
              <div className="little font-[Geist] text-[12px] tracking-[1.2px] uppercase">WEIGHT (kg)</div>
            </div>
          </div>
          <div className="statsContainer flex flex-row">
            <div className="left self-stretch w-0.5 bg-[#ffffff1a] "></div>
            <div className="right text-[#FFB4AA] font-bold px-8 py-8">
              <div className="big font-[Anybody] text-[40px] tracking-[-0.8px] uppercase">17k</div>
              <div className="little font-[Geist] text-[12px] tracking-[1.2px] uppercase">total produced</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="modelSection px-16 w-full h-[600px] flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, #0066B3 0% 20%, #2D2A77 20% 40%, #E20613 40% 60%, #ffffff 60% 100%)",
        }}
      >
        <ModelViewer
          modelPath="/models/m3_model/scene.gltf"
          className="w-full h-full"
        />
      </div> */}
      <div className="bottomSection flex flex-row bg-[#131313] w-full px-16 py-48 ">
        <div className="leftContainer bg-[#E20613] w-1 "></div>
        <div className="rightContainer flex flex-col gap-6 text-[#E5E2E1] px-12 py-12 max-w-[60%] ">
          <div className="top font-[Anybody] font-bold text-[40px] tracking-[-0.8px] ">Experience the Heritage</div>
          <div className="middle font-[Geist] text-[18px] ">Join the exclusive community of M enthusiasts and gain access to the full archives of BMW M Motorsport.</div>
          <div className="bottom mt-3">
            <Link to="/legends" className="bg-[#E5E2E1] text-[#131313] font-[Geist] font-bold text-[12px] px-8 py-4 tracking-[1.2px] uppercase ">explore the archive</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default E30M3;
