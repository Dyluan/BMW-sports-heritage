import './mspirit.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import mcar from '../assets/mcar.png';
import mengine from '../assets/mengine.png';
import carbon from '../assets/carbon.png';

function MSpirit() {
  return (
    <div className="main max-w-7xl mx-auto flex flex-col items-center justify-center">
      <Header />
        <div className="content flex flex-col">
          <div className="top bg-[#131313] py-51 px-16 flex flex-col gap-6">
            <div className="mline h-1 w-24"></div>
            <div className="title uppercase italic text-[#E5E2E1] font-[Anybody] font-extrabold text-[80px] tracking-[-3.2px]">L'ESPRIT <span className='text-[#E20613]'>M</span> : DE LA PISTE À LA ROUTE</div>
            <div className="article text-[#E9BCB6] font-[Geist] text-[18px]">L'innovation née dans la fureur des circuits, sculptée par l'aérodynamisme et propulsée par une ingénierie sans compromis. Bienvenue dans l'univers où la performance devient un héritage.</div>
          </div>
          <div className="middle flex flex-row items-center bg-[#0E0E0E] px-16 py-24 gap-6">
            <div className="left w-[50%] flex flex-col gap-6">
              <div className="redTitle uppercase text-[#E20613] font-[JetBrains_Mono] font-bold text-[12px]">transition radicale</div>
              <div className="title text-[#E5E2E1] font-[Anybody] font-bold text-[40px] tracking-[-0.8px]">L'ADN du Motorsport</div>
              <div className="article text-[#E9BCB6] font-[Geist] text-[16px]">
                Chaque composant d'une BMW M raconte une histoire de victoire. La transition de la course à la route n'est pas une simple adaptation, c'est une réingénierie totale.
                <br />
                Nous extrayons la quintessence des technologies DTM et Endurance pour les injecter dans le châssis de nos modèles de série. Rigidité torsionnelle accrue, centre de gravité abaissé, et une connexion viscérale entre l'homme et la machine.
              </div>
            </div>
            <div className="right w-[50%]">
              <img src={mcar} alt="aggressive m car" className='h-full w-full'/>
            </div>
          </div>
          <div className="bottom flex flex-col bg-[#111111] py-24 px-16">
            <div className="top flex flex-col gap-4 items-center mb-16">
              <div className="title uppercase text-[#E5E2E1] font-bold font-[Anybody] text-[40px] tracking-[-0.8px]">ingénierie de précision</div>
              <div className="mline h-1 w-24"></div>
            </div>
            <div className="middle flex flex-col">
              <div className="middleTop flex flex-row gap-6">
                <div className="left bg-[#161616] border border-[#ffffff1a] rounded-md px-8 py-8 w-[66%] flex flex-col justify-center">
                  <div className="title capitalize text-[#E5E2E1] font-[Anybody] font-bold text-[32px]">Moteurs S-Series</div>
                  <div className="article text-[#E9BCB6] font-[Geist] text-[16px] mt-4 mb-12">
                    Plus qu'un bloc moteur, une symphonie mécanique. Les séries S représentent le pinacle de la combustion interne : vilebrequins forgés, refroidissement haute pression et régimes moteurs stratosphériques.
                  </div>
                  <div className="leftImageContainer">
                    <img src={mengine} alt="S engine" />
                  </div>
                </div>
                <div className="right bg-[#161616] border border-[#ffffff1a] rounded-md px-8 py-8 w-[33%]">
                  <div className="title capitalize text-[#E5E2E1] font-[Anybody] font-bold text-[32px]">Le Carbone</div>
                  <div className="article text-[#E9BCB6] font-[Geist] text-[16px] mt-4 mb-12">
                    Légèreté. Force. Esthétique. Notre usage du PRFC (Plastique Renforcé de Fibres de Carbone) réduit les masses non suspendues pour une agilité foudroyante.
                  </div>
                  <div className="leftImageContainer">
                    <img src={carbon} alt="carbon parts" />
                  </div>
                </div>
              </div>
              <div className="middleBottom"></div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default MSpirit;