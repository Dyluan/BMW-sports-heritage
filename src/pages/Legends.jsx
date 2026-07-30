import './legends.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarContainer from '../components/CarContainer';
import BMW328 from '../assets/328.png';
import m1 from '../assets/m1-legend.png';
import e30 from '../assets/e30-legend.png';
import lmr from '../assets/lmr-legend.png';

function Legends() {
  return(
    <div className="main max-w-7xl mx-auto flex flex-col items-center justify-center">
      <Header />
      <div className="content w-full flex flex-col px-16">
        <div className="top w-full flex flex-col mt-12 gap-4 bg-[#181818]">
          <div className="top h-8 flex flex-row gap-1">
            <div className="color w-1 bg-[#0066B3]"></div>
            <div className="color w-1 bg-[#282D58]"></div>
            <div className="color w-1 bg-[#E20613]"></div>
          </div>
          <div className="middle uppercase text-[#E5E2E1] font-[Anybody] text-[16px]">
            légendes de la piste
          </div>
          <div className="bottom text-[#E9BCB6] font-[Geist] text-[16px]">Explorez l'ADN du sport automobile. De la route au circuit, ces machines ont redéfini les limites de l'ingénierie et gravé le nom BMW M dans l'histoire.</div>
        </div>
        <div className="middle mt-16 flex flex-row gap-6">
          <CarContainer 
            className="carContainer"
            image={BMW328} 
            date={"1936"}
            title={"BMW 328"}
            description={"L'élégance brute des années 30. Une révolution de légèreté qui a dominé les Mille Miglia."}
            power={"80"}
            speed={"150"}
          />
          <CarContainer 
            className="carContainer"
            image={m1} 
            date={"1971"}
            title={"BMW M1"}
            description={"Le premier pur-sang M. Un moteur central conçu pour la gloire en Procar et sur route."}
            power={"277"}
            speed={"265"}
          />
          <CarContainer 
            className="carContainer"
            image={e30} 
            date={"1986"}
            title={"M3 E30"}
            description={"La voiture de tourisme la plus victorieuse au monde. Une icône indétrônable du DTM."}
            power={"200"}
            speed={"235"}
          />
          <CarContainer 
            className="carContainer"
            image={lmr} 
            date={"1999"}
            title={"V12 LMR"}
            description={"Vainqueur des 24 Heures du Mans. L'apogée de l'endurance et de l'aérodynamisme."}
            power={"580"}
            speed={"340"}
          />
        </div>
        <div className="bottom mt-16"></div>
      </div>
      <Footer />
    </div>
  )
}

export default Legends;