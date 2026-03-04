import { useEffect } from "react";
import { navLinks } from "../constants";
import { Menu, X } from "lucide-react"; 

const NavBar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    const handleScroll = () => {
      // Optional scroll effect
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar fixed top-0 w-full z-[99999] backdrop-blur-sm bg-gradient-to-r from-[#10096e84] via-[#0f172a81] to-[#0a0e1684] shadow-md">
      <div className="inner flex items-center justify-between px-4 py-3">
        <div className="logo text-white font-semibold text-lg lg:text-xl">
          <span className="lg:inline hidden">Rayyan</span>
          <span className="lg:hidden">{menuOpen ? "Menu" : "Rayyan"}</span>
        </div>

        {/* Desktop nav */}
        <nav className="desktop hidden lg:block">
          <ul className="flex space-x-6">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group hidden lg:flex">
          <div className="inner">
            <span>Kontak Saya</span>
          </div>
        </a>

        {/* Hamburger Button */}
        <button
          className="lg:hidden text-white z-[99999] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-r from-[#10096e] via-[#0f172a] to-[#0a0e16] text-white flex flex-col items-center py-5 space-y-4 lg:hidden transition-all duration-300 ease-in-out shadow-lg border-t border-b border-white/50 z-[60]">
          {navLinks.map(({ link, name }) => (
            <a
              key={name}
              href={link}
              className="text-lg hover:text-gray-300 hover:bg-[#10096e] transition py-2 px-4 rounded w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default NavBar;