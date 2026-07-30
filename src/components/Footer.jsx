import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="main w-full">
      <div className="topBorder bg-[#E20613] w-full h-0.5"></div>
      <div className="content bg-[#0E0E0E] w-full flex flex-row justify-between items-start p-16">
        <div className="left">
          <div className="top text-[#E5E2E1] text-[80px] font-extrabold font-[Anybody] tracking-[-4px] italic">
            <span className='text-[#0066B3]'>I</span>
            <span className='text-[#2D2A77]'>I</span>
            <span className='text-[#E20613]'>I</span>
            M HERITAGE
          </div>
          <div className="bottom py-6 text-[#E9BCB6] text-[16px] font-[Geist]">
            L'excellence en ingénierie au service de la performance pure depuis 1972.
          </div>
        </div>
        <div className="right flex flex-col">
          <div className="top font-[JetBrains_Mono] text-[#E20613] text-[12px] font-bold tracking-[1.2px]">CONTACT ME</div>
          <div className="middle flex flex-col text-[#E9BCB6] font-[Geist] text-[16px] gap-2 pt-4">
            <div className="info">Dylan Jonckheere</div>
            <div className="email">dylan.jonckheere.pro@gmail.com</div>
            <div className="website"><Link to="https://dily-projects.com">Main Website</Link></div>
            <div className="website"><Link to="https://github.com/Dyluan">GitHub</Link></div>
            <div className="website"><Link to="https://www.linkedin.com/in/dylan-jonckheere/">LinkedIn</Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;