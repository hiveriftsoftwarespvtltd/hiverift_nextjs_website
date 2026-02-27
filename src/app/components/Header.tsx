import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation, useNavigate } from "react-router";
import logoImage from "figma:asset/7fe77d5a1d2e3ea35cd92869801d704f0f2dbc95.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      // Navigate to home first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/90 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center">
            <img src={logoImage} alt="HiveRift" className="h-10 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              to="/solutions"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Solutions
            </Link>
            <Link
              to="/industries"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Industries
            </Link>
            <Link
              to="/case-studies"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Case Studies
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium text-left"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium text-left"
              >
                About Us
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium text-left"
              >
                Services
              </Link>
              <Link
                to="/solutions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium text-left"
              >
                Solutions
              </Link>
              <Link
                to="/industries"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium text-left"
              >
                Industries
              </Link>
              <Link
                to="/case-studies"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium text-left"
              >
                Case Studies
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium text-left"
              >
                Contact
              </Link>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white w-full"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}