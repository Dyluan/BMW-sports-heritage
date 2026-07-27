import './home.css';
import Header from '../components/Header';
import bigBimmer from '../assets/bmw_m1_big.jpg';
import leftArrow from '../assets/left-arrow.png';
import engineBay from '../assets/engine-bay.png';
import steering from '../assets/steering-wheel.png';

function Home() {
  return(
    <div className="main max-w-7xl mx-auto flex flex-col items-center justify-center">
      <Header />
      <div className="bigImage relative w-full h-[800px] bg-cover bg-bottom" style={{ backgroundImage: `url(${bigBimmer})` }}>
        <div className="heroText h-full flex flex-col justify-end px-16 py-24">
          <div className="heroTop text-[#A2C9FF] font-[JetBrains_Mono] font-bold text-[12px] tracking-[3.2px]">DEPUIS 1972</div>
          <div className="heroMiddle font-[Anybody] uppercase text-[#E5E2E1] font-extrabold text-[88px] italic">L'héritage en <span className="text-[#E20613]">mouvement</span></div>
          <div className="heroBottom flex flex-row items-center gap-8">
            <div className="heroButton">
              <button className="bg-[#E20613] text-[18px] font-[JetBrains_Mono] text-[#FFF3F2] px-10 py-5 flex flex-row items-center gap-4">
                <div className="heroButtonText">Découvrir les légendes</div>
                <div className="heroButtonImg"><img src={leftArrow} alt="arrow" /></div>
              </button>
              </div>
            <div className="heroBottomText flex flex-row items-center gap-4">
              <div className="heroBottomTextLeft w-12 h-px bg-[#AF8782]"></div>
              <div className="heroBottomTextRight text-[#E9BCB6] font-[Geist] text-[16px]">La quintessence de la performance</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mLine flex flex-row items-center w-full h-2">
        <div className="lineLeft bg-[#0568B5] h-full w-full"></div>
        <div className="lineMiddle bg-[#282572] h-full w-full"></div>
        <div className="lineRight bg-[#E20613] h-full w-full"></div>
      </div>
      <div className="descriptionSection w-full max-h-[742px]">
        <div className="content flex flex-row px-16 py-32">
          <div className="leftDescription max-w-[45%]">
            <div className="top font-[Anybody] font-bold text-[40px] text-[#E5E2E1]">Où l'ingénierie devient Légende.</div>
            <div className="middleTop mt-8 font-[Geist] text-[#E9BCB6] text-[16px]">BMW Motorsport n'est pas seulement une division de performance ; c'est un laboratoire d'émotions brutes et de précision chirurgicale. Née sur les circuits les plus exigeants du monde, la lettre "M" est devenue le symbole universel de la suprématie automobile.</div>
            <div className="middleBottom mt-6 font-[Geist] text-[#E9BCB6] text-[16px]">Depuis la mythique M1 jusqu'aux monstres de DTM, chaque courbe, chaque piston et chaque vrombissement raconte une histoire de dépassement de soi et de gloire éternelle.</div>
            <div className="bottom mt-12">
              <div className="left flex flex-row items-center gap-4">
                <div className="leftContent px-6 py-6 border-2 border-[#1A1A1A]">
                  <div className="top text-[#FFB4AA] font-[JetBrains_Mono] text-2xl mb-2">50+</div>
                  <div className="bottom text-[#E9BCB6] font-[JetBrains_Mono] font-bold text-[12px] uppercase">années de passion</div>
                </div>
                <div className="leftContent px-6 py-6 border-2 border-[#1A1A1A]">
                  <div className="top text-[#A2C9FF] font-[JetBrains_Mono] font-bold text-2xl mb-2">∞</div>
                  <div className="bottom text-[#E9BCB6] font-[JetBrains_Mono] font-bold text-[12px] uppercase">adrénaline</div>
                </div>
              </div>
            </div>
          </div>
          <div className="rightDescription mt-14">
            <img src={engineBay} alt="engine bay" />
            <div className="steeringContainer p-4 relative bottom-[120px] left-[-40px] bg-[##ffffff1a] w-fit backdrop-blur-xl border-2 border-[#1A1A1A]">
              <img src={steering} alt="steering wheel" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;