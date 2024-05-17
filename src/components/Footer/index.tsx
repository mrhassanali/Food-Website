import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { ReactComponent as TelegramSVG } from "../../assets/svg/telegram.svg";
import { ReactComponent as InstagramSVG } from "../../assets/svg/instagram.svg";
import { ReactComponent as TwitterSVG } from "../../assets/svg/twitter.svg";
import { ReactComponent as FacebookSVG } from "../../assets/svg/facebook.svg";

export default function Footer() {
  return (
    <div className="flex-rows mobile:flex-cols flex items-center justify-between bg-stone-950 px-10 py-4 text-white mobile:flex-col mobile:px-3 small:flex-col sm:flex-row sm:px-4 md:flex-row md:px-10 lg:flex-row">
      <div className="inline-flex items-center justify-between gap-x-1">
        <img src={Logo} alt="food" className="h-10 w-10" />
        <h1 className="font-inter text-2xl font-bold capitalize">Food</h1>
      </div>
      <div>
        <ul className="inline-flex ">
          <li className="after:px-1 after:text-white after:content-['|']">
            <Link to={"#"}>Home</Link>
          </li>
          <li className="after:px-1 after:text-white after:content-['|']">
            <Link to={"#"}>About Us</Link>
          </li>
          <li className="after:px-1 after:text-white after:content-['|']">
            <Link to={"#"}>Products</Link>
          </li>
          <li>
            <Link to={"#"}>Quality</Link>
          </li>
        </ul>
      </div>
      <div className="inline-flex gap-x-1 mobile:mt-4 sm:mt-0 md:mt-0">
        <div className="h-fit w-fit cursor-pointer rounded-full bg-beers p-2">
          <Link to="#">
            <TelegramSVG className="h-5 w-5 object-cover" />
          </Link>
        </div>
        <div className="h-fit w-fit cursor-pointer rounded-full bg-beers p-2">
          <Link to="#">
            <InstagramSVG className="h-5 w-5 object-cover" />
          </Link>
        </div>
        <div className="h-fit w-fit cursor-pointer rounded-full bg-beers p-2">
          <Link to="#">
            <TwitterSVG className="h-5 w-5 object-cover" />
          </Link>
        </div>
        <div className="h-fit w-fit cursor-pointer rounded-full bg-beers p-2">
          <Link to="#">
            <FacebookSVG className="h-5 w-5 object-cover" />
          </Link>
        </div>
      </div>
    </div>
  );
}
