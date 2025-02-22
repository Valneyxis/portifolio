import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [ "Skills", "Projetos", "Experiências","Sobre"];

  return (
    <nav className="fixed w-full z-10 bg-[#1a1f2e]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between h-16 items-center">
        <span className="text-lg font-semibold text-[#4fd1c5]">
          Valney Rodrigues
        </span>
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-[#4fd1c5] transition"
            >
              {item}
            </a>
          ))}
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          ☰
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#1a1f2e] p-4 flex flex-col space-y-4 text-center md:hidden">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-[#4fd1c5] transition"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
