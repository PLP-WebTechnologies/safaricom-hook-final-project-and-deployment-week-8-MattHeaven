import backgroundImage from '../assets/heroBackground.jpg';
import logo from '../assets/CheveningLogo.png';

const HeroSection = () => {
    return (
      <div className="relative h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(" + backgroundImage + ")",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/80"></div>
        </div>
  
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          {/* Logo */}
          <img 
            src={logo}
            alt="Chevening Kenya Alumni Network"
            className="mb-8 max-w-md h-20"
          />
          
          {/* Heading */}
          <h1 className="text-[#1A1A3D] text-6xl font-bold mb-6 ">
            Chevening Alumni Association Kenya
          </h1>
  
          {/* Subheading */}
          <p className="text-gray-700 text-2xl mb-8">
            Empowering Kenya&apos;s Future Through Global Leadership
          </p>
  
          {/* CTA Button */}
          <button className="bg-[#1A1A3D] text-white px-8 py-3 rounded-md text-lg hover:bg-[#2A2A4D] transition-colors">
            Learn More
          </button>
        </div>
      </div>
    );
  };

export default HeroSection