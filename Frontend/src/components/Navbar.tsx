import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Zap, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesDropdown, setMobileServicesDropdown] = useState(false);

  const navigationItems = [
  { name: "Home", href: "/home" },
  { name: "About Us", href: "/about" }, 
  { name: "Contact", href: "/contact" },
  { name: "Services", href: "/Services" },
  { name: "Events", href: "/Events" }
  ];

  const servicesPages = [
    { name: "Page1", path: "/page1" },
    { name: "Page2", path: "/page2" },
    { name: "Page3", path: "/page3" },
    { name: "Page4", path: "/page4" },
    { name: "Page5", path: "/page5" },
  ];

  const [servicesDropdown, setServicesDropdown] = useState(false);
  const servicesDropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  const scrollToSection = (href: string) => {
  navigate(href);
  setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <button
              className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-accent to-accent/80"
              onClick={() => {
                navigate("/home");
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                setIsOpen(false);
              }}
              aria-label="Go to Home"
              type="button"
            >
              <Zap className="h-5 w-5 text-accent-foreground" />
            </button>
            <span className="text-xl font-bold text-foreground">PowerGen</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              if (item.name === "Services") {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => {
                      if (servicesDropdownTimeout.current) {
                        clearTimeout(servicesDropdownTimeout.current);
                        servicesDropdownTimeout.current = null;
                      }
                      setServicesDropdown(true);
                    }}
                    onMouseLeave={() => {
                      servicesDropdownTimeout.current = setTimeout(() => {
                        setServicesDropdown(false);
                      }, 400);
                    }}
                  >
                    <button
                      className={`text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors text-left ${isActive ? 'border-b-2 border-accent text-accent' : ''}`}
                      onClick={() => {
                        navigate("/Services");
                        setIsOpen(false);
                      }}
                    >
                      {item.name}
                    </button>
                    <div
                      className={`absolute left-0 mt-2 min-w-[140px] z-50 bg-white border rounded shadow-lg transition-all duration-300 ${servicesDropdown ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
                      style={{
                        transformOrigin: "top left"
                      }}
                    >
                      {servicesPages.map((page) => (
                        <button
                          key={page.name}
                          onClick={() => { navigate(page.path); setIsOpen(false); setServicesDropdown(false); }}
                          className={`block w-full text-left px-4 py-2 text-gray-600 hover:bg-accent hover:text-accent-foreground transition-colors ${location.pathname === page.path ? 'bg-accent text-accent-foreground' : ''}`}
                        >
                          {page.name}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              } else {
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-lg font-medium text-black-600 hover:text-black-900 transition-colors text-left ${isActive ? 'border-b-2 border-accent text-accent' : ''}`}
                  >
                    {item.name}
                  </button>
                );
              }
            })}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Button 
              variant="default"
              className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection("#contact")}>
              
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-8">
                  {navigationItems.map((item) => {
                    const isActive = location.pathname === item.href;
                    
                    if (item.name === "Services") {
                      return (
                        <div key={item.name} className="space-y-2">
                          <button
                            onClick={() => setMobileServicesDropdown(!mobileServicesDropdown)}
                            className={`flex items-center justify-between w-full text-lg font-medium text-foreground hover:text-accent transition-colors text-left ${isActive ? 'border-b-2 border-accent text-accent' : ''}`}
                          >
                            {item.name}
                            {mobileServicesDropdown ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </button>
                          
                          {mobileServicesDropdown && (
                            <div className="pl-4 space-y-3 border-l-2 border-gray-200">
                              {servicesPages.map((page) => (
                                <button
                                  key={page.name}
                                  onClick={() => {
                                    navigate(page.path);
                                    setIsOpen(false);
                                    setMobileServicesDropdown(false);
                                  }}
                                  className={`block w-full text-left text-base text-gray-600 hover:text-accent transition-colors ${location.pathname === page.path ? 'text-accent font-medium' : ''}`}
                                >
                                  {page.name}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }
                    
                    return (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className={`text-lg font-medium text-foreground hover:text-accent transition-colors text-left ${isActive ? 'border-b-2 border-accent text-accent' : ''}`}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                  <Button 
                    className="mt-6 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground font-semibold shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Get a Quote
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;