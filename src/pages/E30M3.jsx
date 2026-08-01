import './e30m3.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import video from '../assets/e30-video.mp4';

function E30M3() {
  return(
    <div className="main max-w-7xl mx-auto flex flex-col items-center justify-center">
      <Header />
      <div className="content w-full px-16 flex flex-col bg-[#1A1A1A]">
        <div className="hero relative w-full h-[800px] overflow-hidden">
          <video
            className="hero-video absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="heroContent absolute inset-0 flex flex-col justify-end px-16 py-24">
            <div className="title text-[#E5E2E1] font-extrabold text-[80px] tracking-[-3.2px] font-[Anybody] uppercase italic">The e30 m3 legend</div>
            <div className="article"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default E30M3;