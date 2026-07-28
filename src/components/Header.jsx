import './header.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {

  const location = useLocation();
  const url = location.pathname;
  console.log(url);

  const getLinkClass = (path) => {
    const baseClass = "font-[JetBrains_Mono] font-bold text-[12px] hover:text-white";
    return url === path 
      ? `${baseClass} text-[#FFB4AA]` 
      : `${baseClass} text-[#E9BCB6]`;
  };

  return (
    <>
    <div className="main bg-[#131313] flex flex-row justify-between items-center px-16 py-6 w-full">
      <div className="left font-[Anybody] font-extrabold text-[#FFB4AA] text-4xl italic">
        M HERITAGE
      </div>
      <div className="middle flex flex-row items-center gap-8">
        <Link to="/" className={getLinkClass("/")}>Home</Link>
        <Link to="/legends" className={getLinkClass("/legends")}>Legends</Link>
        <Link to="/glory-wall" className={getLinkClass("/glory-wall")}>Glory Wall</Link>
        <Link to="/m-spirit" className={getLinkClass("/m-spirit")}>M Spirit</Link>
      </div>
      <div className="right">
        <button className="bg-[#E20613] text-[#FFF3F2] hover:bg-[#0066B3] cursor-pointer font-[JetBrains_Mono] font-bold text-[16px] px-5.5 py-3">JOIN CLUB</button>
      </div>
    </div>
    <div className="bottomLine w-full h-[1px] bg-gray-500 mb-0"></div>
    </>
  );
}

export default Header;
