import './home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bigBimmer from '../assets/bmw_m1_big.jpg';
import leftArrow from '../assets/left-arrow.png';
import engineBay from '../assets/engine-bay.png';
import steering from '../assets/steering-wheel.png';
import garage from '../assets/garage.png';
import m1 from '../assets/m1-side.png';
import e30 from '../assets/e30.png';
import v12 from '../assets/v12lmr.png';

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
              <button className="bg-[#E20613] text-[18px] font-[JetBrains_Mono] text-[#FFF3F2] px-10 py-5 flex flex-row items-center gap-4 hover:bg-[#0066B3] cursor-pointer">
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
      {/* partie description */}
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
      {/* partie chronologie */}
      <div className="chronologySection w-full bg-[#131313]">
        <div className="title flex flex-col items-center pt-32">
          <div className="top uppercase text-[#E20613] font-[JetBrains_Mono] font-bold text-[12px] mb-4 tracking-[1.2px]">chronologie</div>
          <div className="bottom capitalize text-[#E5E2E1] font-[Anybody] font-bold text-[40px] pb-24">les jalons de la victoire</div>
        </div>
        <div className="chronoContent relative flex flex-col">
          <div className="line absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-[#343434]"></div>
          <div className="chronoContent relative flex items-center">
            <div className="left flex flex-col items-end max-w-[50%] w-[50%]">
              <div className="top text-[#FFB4AA] font-[JetBrains_Mono] text-2xl mb-2">1972</div>
              <div className="middle text-[#E5E2E1] font-[Anybody] font-bold text-[32px] mb-3">Création de BMW Motorsport</div>
              <div className="bottom font-[Geist] text-[#E9BCB6] text-[16px] text-right">Une petite équipe de 35 passionnés s'installe à Munich avec un seul but : dominer la compétition mondiale.</div>
            </div>
            <div className="divider w-0.5 mx-12 flex flex-col items-center justify-center">
              <div className="ball h-4 w-4 bg-[#E20613] rounded-[50%]"></div>
            </div>
            <div className="right max-w-[50%] w-[50%]">
              <img src={garage} alt="garage" />
            </div>
          </div>
          <div className="chronoContent relative flex items-center pt-24">
            <div className="left max-w-[50%] w-[50%] flex justify-end">
              <img src={m1} alt="m1 Procar" />
            </div>
            <div className="divider w-0.5 mx-12 flex flex-col items-center justify-center">
              <div className="ball h-4 w-4 bg-[#0568B5] rounded-[50%]"></div>
            </div>
            <div className="right flex flex-col items-start max-w-[50%] w-[50%]">
              <div className="top text-[#A2C9FF] font-[JetBrains_Mono] text-2xl mb-2">1978</div>
              <div className="middle text-[#E5E2E1] font-[Anybody] font-bold text-[32px] mb-3">L'Avènement de la M1</div>
              <div className="bottom font-[Geist] text-[#E9BCB6] text-[16px] text-left">La première voiture à porter fièrement le badge M. Un chef- d'œuvre à moteur central conçu pour la piste et la route.</div>
            </div>
          </div>
          <div className="chronoContent relative flex items-center pt-24">
            <div className="left flex flex-col items-end max-w-[50%] w-[50%]">
              <div className="top text-[#FFB4AA] font-[JetBrains_Mono] text-2xl mb-2">1987</div>
              <div className="middle text-[#E5E2E1] font-[Anybody] font-bold text-[32px] mb-3">M3 E30 : Reine du DTM</div>
              <div className="bottom font-[Geist] text-[#E9BCB6] text-[16px] text-right">La voiture de tourisme la plus victorieuse de l'histoire. Elle a redéfini le concept de berline sportive pour toujours.</div>
            </div>
            <div className="divider w-0.5 mx-12 flex flex-col items-center justify-center">
              <div className="ball h-4 w-4 bg-[#2D2A77] rounded-[50%]"></div>
            </div>
            <div className="right max-w-[50%] w-[50%]">
              <img src={e30} alt="e30 DTM" />
            </div>
          </div>
          <div className="chronoContent relative flex items-center pt-24">
            <div className="left max-w-[50%] w-[50%] flex justify-end">
              <img src={v12} alt="v12 LMR" />
            </div>
            <div className="divider w-0.5 mx-12 flex flex-col items-center justify-center">
              <div className="ball h-4 w-4 bg-[#E20613] rounded-[50%]"></div>
            </div>
            <div className="right flex flex-col items-start max-w-[50%] w-[50%]">
              <div className="top text-[#A2C9FF] font-[JetBrains_Mono] text-2xl mb-2">1999</div>
              <div className="middle text-[#E5E2E1] font-[Anybody] font-bold text-[32px] mb-3">Triomphe au Mans</div>
              <div className="bottom font-[Geist] text-[#E9BCB6] text-[16px] text-left">La consécration ultime avec la victoire de la V12 LMR aux 24 Heures du Mans, prouvant l'endurance de l'ingénierie M.</div>
            </div>
          </div>
        </div>
      </div>
      {/* partie "rejoignez la légende" */}
      <div className="joinSection w-full">
        <div className="content join mt-32 pt-24 w-full flex flex-col items-center gap-8">
          <div className="top uppercase italic tracking-[-3.2px] font-[Anybody] font-extrabold text-[80px] text-[#E5E2E1]">rejoignez la <span className="text-[#E20613]">légende</span></div>
          <div className="middle text-[#E9BCB6] font-[Geist] text-[16px] max-w-[648px] text-center">Plongez dans les archives, explorez les modèles iconiques et vivez l'émotion de la piste à travers notre collection exclusive.</div>
          <div className="bottom flex flex-row items-center gap-6">
            <div className="left">
              <button className="uppercase bg-[#E5E2E1] hover:bg-[#E20613] hover:text-[#E5E2E1] text-[#131313] font-[JetBrains_Mono] text-[18px] font-bold px-12 py-5 cursor-pointer">voir les légendes</button>
            </div>
            <div className="right">
              <button className="bg-transparent border-[#E5E2E1] border-2 uppercase text-[#E5E2E1] font-[JetBrains_Mono] hover:bg-[#E5E2E1] hover:text-[#131313] px-12 py-5 text-[18px] font-bold cursor-pointer">l'esprit m</button>
            </div>
          </div>
          <div className="filigrane-container">
            <div className="filigrane-scroll">
              <span className="filigrane-text">BMW MOTORSPORT BMW MOTORSPORT BMW MOTORSPORT BMW MOTORSPORT </span>
              <span className="filigrane-text">BMW MOTORSPORT BMW MOTORSPORT BMW MOTORSPORT BMW MOTORSPORT </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;