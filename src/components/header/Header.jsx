import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/logo/logo.png";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const menuRef = useRef(null);
  const itemsRef = useRef([]);

  const nav = ["Home", "About", "Gallery", "Contact Us"];

  useEffect(() => {
    if (open) {
      gsap.to(menuRef.current, {
        height: "auto",
        duration: 0.4,
        ease: "power3.out",
      });

      gsap.fromTo(
        itemsRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          delay: 0.1,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        duration: 0.3,
        ease: "power3.inOut",
      });
    }
  }, [open]);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50 ">
      <div className="page-width">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center">
            <img
              src={Logo}
              alt="logo"
              className="h-24 sm:h-20 md:h-24 xl:h-40 object-contain"
            />
          </a>

          <nav className="hidden min-[990px]:flex">
            <ul className="flex items-center gap-8">
              {nav.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    onClick={() => setActiveIndex(index)}
                    className={`font-medium relative transition-all duration-300 ${
                      activeIndex === index
                        ? "text-[#C8453C] after:w-full"
                        : "text-black"
                    } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#C8453C] after:w-0 hover:text-[#C8453C] after:transition-all after:duration-300 hover:after:w-full`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="block min-[990px]:hidden text-[#003B5C]"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        className="block min-[990px]:hidden h-0 overflow-hidden bg-white shadow-inner"
      >
        <ul className="flex flex-col gap-6 px-6 py-6">
          {nav.map((item, index) => (
            <li key={index} ref={(el) => (itemsRef.current[index] = el)}>
              <a
                href="#"
                onClick={() => {
                  setActiveIndex(index);
                  setOpen(false);
                }}
                className={`block font-medium text-lg transition-colors ${
                  activeIndex === index ? "text-[#C8453C]" : "text-[#003B5C]"
                } hover:text-[#C8453C]`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
