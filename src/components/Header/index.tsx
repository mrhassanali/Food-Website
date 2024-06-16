import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Bars4Icon, ShoppingCartIcon } from "@heroicons/react/20/solid";
import Logo from "../../assets/images/logo.png";
import clsx from "clsx";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about-us" },
  { name: "Products", href: "/#products" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  let location = useLocation();
  let checkIsActive = `${location.pathname}${location.hash}`;

  return (
    <nav className="bg-slate-100 px-8 py-2">
      <div className="flex flex-row items-center justify-between">
        <div className="inline-flex items-center justify-between gap-x-1">
          <img src={Logo} alt="food" className="h-10 w-10" />
          <h1 className="font-inter text-2xl font-bold capitalize">Food</h1>
        </div>

        <div className="hidden md:block lg:block">
          <ul className="inline-flex gap-x-4 ">
            {navigation.map((item, index) => {
              return (
                <li key={index}>
                  {item.href.split("").includes("#") ? (
                    <a
                      href={item.href}
                      className={clsx({
                        "text-black": checkIsActive === item.href,
                        "text-slate-500": !(checkIsActive === item.href),
                      })}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className={clsx({
                        "text-black": checkIsActive === item.href,
                        "text-slate-500": !(checkIsActive === item.href),
                      })}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="inline-flex items-center gap-x-3">
          <ShoppingCartIcon className="h-6 w-6 cursor-pointer text-slate-500" />
          <button className="hidden cursor-pointer rounded-full bg-beers px-3 py-2 text-white md:block lg:block">
            Order Now
          </button>

          {/* Show when small screen */}
          <Bars4Icon
            className="h-6 w-6 cursor-pointer text-slate-500 md:hidden lg:hidden"
            onClick={handleMobileMenu}
          />
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mt-3 block gap-y-2 md:hidden lg:hidden">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "mt-1 inline-block w-full rounded-lg bg-beers p-2 text-white"
                : "mt-1 inline-block w-full rounded-lg p-2 text-slate-500 hover:bg-beers hover:text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "mt-1 inline-block w-full rounded-lg bg-beers p-2 text-white"
                : "mt-1 inline-block w-full rounded-lg p-2 text-slate-500 hover:bg-beers hover:text-white"
            }
          >
            About Us
          </NavLink>

          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              isActive
                ? "mt-1 inline-block w-full rounded-lg bg-beers p-2 text-white"
                : "mt-1 inline-block w-full rounded-lg p-2 text-slate-500 hover:bg-beers hover:text-white"
            }
          >
            Products
          </NavLink>

          <NavLink
            to={"/contact-us"}
            className={({ isActive }) =>
              isActive
                ? "mt-1 inline-block w-full rounded-lg bg-beers p-2 text-white"
                : "mt-1 inline-block w-full rounded-lg p-2 text-slate-500 hover:bg-beers hover:text-white"
            }
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </nav>
  );
}
