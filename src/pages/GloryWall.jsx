import './glorywall.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import lmr from '../assets/lmr-glory.png';
import bmw328 from '../assets/328-glory.png';
import e30 from '../assets/e30-glory.jpg';
import nelson from '../assets/nelson.jpg';
import cup from '../assets/cup.png';
import { Link } from 'react-router-dom';

function GloryWall() {
  return(
    <div className="main max-w-7xl mx-auto flex flex-col items-center justify-center">
      <Header />
      <div className="content w-full px-16 flex flex-col bg-[#1A1A1A]">
        <div className="top flex flex-col w-full mt-8">
          <div className="title flex flex-col w-full">
            <div className="bmwColors h-1 w-24"></div>
            <div className="topTitle text-[#E5E2E1] font-[Anybody] font-extrabold tracking-[-3.2px] text-[80px] my-3.5 uppercase italic">le mur de la gloire</div>
            <div className="topDescription text-[#E9BCB6] font-[Geist] text-[18px] max-w-[660px]">Une célébration de l'ingénierie suprême et des pilotes légendaires qui ont gravé le nom de M Motorsport dans l'histoire éternelle de la course automobile.</div>
            <div className="topBottom flex flex-row w-full my-20 gap-6">
              <div className="topContainer border-2 border-[#E20613] w-[270px] flex flex-col text-[#FFB4AA] gap-2 py-8 px-8 bg-[#1a1a1a] hover:bg-[#201F1F] hover:border-[#282828]">
                <div className="containerTop font-[JetBrains_Mono] text-[24px] font-medium text-2xl">1972</div>
                <div className="containerBottom font-[JetBrains_Mono] font-bold text-[12px] tracking-[1.2px] uppercase">fondation</div>
              </div>
              <div className="topContainer border-2 border-[#0568B5] w-[270px] flex flex-col text-[#FFB4AA] gap-2 py-8 px-8 bg-[#1A1A1A] hover:bg-[#201F1F] hover:border-[#282828]">
                <div className="containerTop font-[JetBrains_Mono] text-[24px] font-medium text-2xl">25+</div>
                <div className="containerBottom font-[JetBrains_Mono] font-bold text-[12px] tracking-[1.2px] uppercase">titres dtm</div>
              </div>
              <div className="topContainer border-2 border-[#282572] w-[270px] flex flex-col text-[#FFB4AA] gap-2 py-8 px-8 bg-[#1A1A1A] hover:bg-[#201F1F] hover:border-[#282828]">
                <div className="containerTop font-[JetBrains_Mono] text-[24px] font-medium text-2xl">19</div>
                <div className="containerBottom font-[JetBrains_Mono] font-bold text-[12px] tracking-[1.2px] uppercase">victoires nürburgring</div>
              </div>
              <div className="topContainer border-2 border-[#E20613] w-[270px] flex flex-col text-[#FFB4AA] gap-2 py-8 px-8 bg-[#1A1A1A] hover:bg-[#201F1F] hover:border-[#282828]">
                <div className="containerTop font-[JetBrains_Mono] text-[24px] font-medium text-2xl">∞</div>
                <div className="containerBottom font-[JetBrains_Mono] font-bold text-[12px] tracking-[1.2px] uppercase">PASSION M</div>
              </div>
            </div>
          </div>
        </div>
        <div className="middle w-full flex flex-col gap-32">
          <div className="middleContainer flex flex-row items-center">
            <div className="imageContainer w-[60%]">
              <img src={lmr} alt="bmw v12 lmr" className='w-[652px] h-[366px]' />
            </div>
            <div className="right flex flex-col gap-4 w-[40%]">
              <div className="rightTop">
                <div className="award uppercase text-[#FFB4AA] font-bold font-[JetBrains_Mono] text-[12px] tracking-[1.2px]">endurance suprême</div>
                <div className="title uppercase italic text-[#E5E2E1] font-[Anybody] font-bold text-[40px] tracking-[-0.8px]">24h du mans 1999</div>
              </div>
              <div className="rightMiddle text-[#E9BCB6] font-[Geist] text-[16px]">Le triomphe de la BMW V12 LMR reste l'un des moments les plus glorieux de notre histoire. Pilotée par Yannick Dalmas, Pierluigi Martini et Joachim Winkelhock, elle a dominé la piste de la Sarthe pendant 365 tours, prouvant la supériorité technique absolue du moteur M.</div>
              <div className="rightBottom flex flex-row items-center gap-4">
                <div className="rightColor bg-[#E20613] w-1 self-stretch"></div>
                <div className="rightText uppercase font-[Anybody] text-2xl italic text-[#E5E2E1]">v12 lmr</div>
              </div>
            </div>
          </div>
          <div className="middleContainer flex flex-row items-center">
            <div className="left flex flex-col gap-4 w-[40%]">
              <div className="rightTop">
                <div className="award uppercase text-[#FFB4AA] font-bold font-[JetBrains_Mono] text-[12px] tracking-[1.2px]">LA LÉGENDE ITALIENNE</div>
                <div className="title uppercase italic text-[#E5E2E1] font-[Anybody] font-bold text-[40px] tracking-[-0.8px]">mille miglia 1940</div>
              </div>
              <div className="rightMiddle text-[#E9BCB6] font-[Geist] text-[16px]">Une victoire historique avec la BMW 328 Touring Coupé. À travers les routes sinueuses de l'Italie, Hanstein et Bäumer ont pulvérisé les records, établissant une vitesse moyenne de 166 km/h. Cette victoire a posé les bases de l'ADN de performance que nous portons encore aujourd'hui.</div>
              <div className="rightBottom flex flex-col gap-1 mt-4 w-fit">
                <div className="rightText uppercase font-[JetBrains_Mono] text-[16px] text-[#FFB4AA]">découvrir les archives</div>
                <div className="underline h-px bg-[#FFB4AA]"></div>
              </div>
            </div>
            <div className="imageContainer right w-[60%]">
              <img src={bmw328} alt="bmw 328" className='w-[652px] h-[366px]' />
            </div>
          </div>
          <div className="middleContainer flex flex-row gap-6 items-start">
            <div className="left w-[60%]">
              <div className="imageContainerReal">
                <img src={e30} alt="bmw m3 dtm" />
              </div>
              <div className="overImage relative bottom-32 left-6">
                <div className="title uppercase italic text-[#E5E2E1] font-[Anybody] text-[32px] font-bold w-fit">domination dtm</div>
                <div className="description text-[#E9BCB6] font-[Geist] text-[16px] max-w-[70%]">Plus de 25 titres de constructeurs et de pilotes. La BMW M3 E30 reste la voiture de tourisme la plus titrée au monde.</div>
              </div>
            </div>
            <div className="right w-[40%] flex flex-col ">
              <div className="topRight h-67 w-full">
                <img src={nelson} alt="Nelson Piquet" className='h-full w-full' />
              </div>
              <div className="bottomRight px-8 py-8 gap-2 border border-[#282828] hover:bg-[#201F1F]">
                <div className="top uppercase text-[#FFB4AA] font-[JetBrains_Mono] font-bold text-[12px] tracking-[1.2px]">formula 1</div>
                <div className="title text-[#E5E2E1] font-[Anybody] font-bold text-[32px] uppercase italic">turbo era</div>
                <div className="article text-[#E9BCB6] font-[Geist] text-[16px]">Le moteur M12/13, un monstre de 1500 ch qui a propulsé Nelson Piquet au titre mondial en 1983.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom flex flex-col items-center py-20 gap-5.5 mb-24">
          <div className="bottomLogo max-w-[60px] max-h-[60px]">
            <img src={cup} alt="winning cup" className='w-full h-full' />
          </div>
          <div className="bottomTitle text-[#E5E2E1] font-[Anybody] text-[80px] font-extrabold tracking-[-3.2px] uppercase italic">écrivez l'histoire</div>
          <div className="bottomArticle text-[#E9BCB6] font-[Geist] text-[18px] pt-[22px] pb-12">Rejoignez le M Club pour accéder à des événements exclusifs sur circuit et perpétuer la légende du sport automobile.</div>
          <div className="bottomButton text-[#690003] font-[JetBrains_Mono] font-bold text-[18px]">
            <Link className='becomeALegendButton uppercase px-12 py-5 bg-[#FFB4AA] hover:bg-[#0066B3] hover:text-[#E5E2E1]'>devenez une légende</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GloryWall;