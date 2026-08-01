import './carContainer.css';
import { Link } from 'react-router-dom';

function CarContainer({ image, date, title, description, power, speed, url }) {
  return(
    <div className="mainCar border border-[#ffffff1a] max-w-[268px] bg-[#1E1E1E]">
      <div className="top">
        <div className="carImg bg-cover max-w-[268px] max-h-[201px] h-[201px]" style={{ backgroundImage: `url(${image})` }}>
          <div className="carDate flex flex-row items-center relative -bottom-4 left-4">
            <div className="dateLeft w-1 self-stretch bg-[#FFB4AA]"></div>
            <div className="dateText px-3 py-1 font-[JetBrains_Mono] text-[16px] text-[#E5E2E1] bg-black">{date}</div>
          </div>
        </div>
        
      </div>
      <div className="middle flex flex-col px-6 pt-6">
        <div className="title text-[#E5E2E1] font-[Anybody] text-[16px]">{title}</div>
        <div className="description pt-2 text-[#E9BCB6] font-[Geist] text-[14px]">{description}</div>
        <div className="power flex flex-row items-center pt-6 justify-between">
          <div className="left text-[#E5E2E1] font-[JetBrains_Mono] text-[12px]">PUISSANCE</div>
          <div className="right text-[#FFB4AA] font-[JetBrains_Mono] text-[16px] mb-3">{power} CH</div>
        </div>
        <div className="bottomLine bg-[#2F2F2F] h-0.25 w-full"></div>
        <div className="speed flex flex-row items-center justify-between mt-4">
          <div className="left text-[#E5E2E1] font-[JetBrains_Mono] text-[12px]">VITESSE MAX</div>
          <div className="right text-[#FFB4AA] font-[JetBrains_Mono] text-[16px] mb-3">{speed} KM/H</div>
        </div>
        <div className="bottomLine bg-[#2F2F2F] h-0.25 w-full"></div>
      </div>
      <div className="bottom px-6 mt-8 mb-6">
        <Link to={url} className='uppercase text-[#FFB4AA] font-[JetBrains_Mono] text-[16px] px-16 py-4 border border-[#FFB4AA] hover:bg-[#FFB4AA] hover:text-[#181818] cursor-pointer'>Découvrir</Link>
      </div>
    </div>
  )
}

export default CarContainer;