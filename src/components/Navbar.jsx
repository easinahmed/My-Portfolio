
import { useState } from 'react';

// Remove the theme button since we're not using dark mode
const MenuIcon = ({
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>;
const XIcon = ({
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>;
 const MountainIcon = ({
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);;
  const navLinks = [{
    href: "#",
    label: "Projects"
  }, {
    href: "#",
    label: "Skills"
  }, {
    href: "#",
    label: "About"
  }, {
    href: "#",
    label: "Contact"
  }];
  // const toggleTheme = () => {
  //   setTheme(theme === 'dark' ? 'light' : 'dark');
  // };
  return <header className="fixed top-0 border-1 border-blue-900 left-0 right-0 bg-transparent backdrop-blur-sm z-50 w-full">
      <div className="container mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
               <MountainIcon className="h-6 w-6 text-white" />
              <span className="text-lg font-semibold text-white">Portfolio.</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => <a key={link.label} href={link.href} className="text-base font-medium text-white hover:text-blue-600 transition-colors duration-300">
                {link.label}
              </a>)}
          </nav>

          <div className="flex items-center gap-4">
             <a href="#" className="hidden text-base sm:inline-flex items-center justify-center rounded-lg text-sm font-medium h-10 px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                Hire Me
             </a>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-300" aria-expanded={isMenuOpen}>
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {isMenuOpen && <div className="md:hidden border-t bg-transparent backdrop-blur-sm" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => <a key={link.label} href={link.href} className="text-white hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
                {link.label}
              </a>)}
             <a href="#" className="w-full mt-2 text-center items-center text-base justify-center rounded-lg font-medium h-10 px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 block">
                Hire Me
             </a>
          </div>
        </div>}
    </header>;
};
export default Header;