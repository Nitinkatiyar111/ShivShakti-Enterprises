import background from '../assets/background.jpeg'
import Navbar from './Navbar';
function Background() {
  return (
    <div className="relative w-full h-screen">
      <img
        src={background}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <Navbar />
      <div className="relative z-10 flex items-center justify-center h-full text-white">
      </div>

    </div>
  );
}

export default Background;