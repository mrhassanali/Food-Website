import React, { ReactElement } from "react";
import { Section } from "../../Atoms";
import { ReactComponent as CompanyBadageSVG } from "../../assets/svg/company-succes-badage.svg";
import { ReactComponent as VoedingSVG } from "../../assets/svg/voeding.svg";
import LunchImg from "../../assets/images/lunch.png";

export default function AboutCompany(): ReactElement {
  return (
    <Section className="pb-20 pt-20">
      <Section.Heading>About The Company</Section.Heading>
      <div className="m-4 mx-auto mt-10 grid w-5/6 grid-cols-3 mobile:mt-4 small:grid-cols-1 medium:mt-4 medium:grid-cols-2 sm:mt-7 sm:w-full md:mt-10 md:w-5/6 md:grid-cols-3">
        <div className="inline-block p-3 text-center">
          <div className="mx-auto w-fit rounded-full bg-antiqu-white">
            <CompanyBadageSVG className="h-28 w-28 mix-blend-multiply" />
          </div>
          <h2 className="mt-2 text-xl font-semibold">More Then 10 Years</h2>
          <p className="mt-2 text-slate-700 font-inter font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            vero possimus error odio quam? Ad?
          </p>
        </div>
        <div className="inline-block p-3 text-center">
          <div className="mx-auto w-fit rounded-full bg-antiqu-white p-2">
            <VoedingSVG className="h-24 w-24 mix-blend-multiply" />
          </div>
          <h2 className="mt-2 text-xl font-semibold">
            Cuting-Edge Infrastrucure
          </h2>
          <p className="mt-2 text-slate-700 font-inter font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            vero possimus error odio quam? Ad?
          </p>
        </div>
        <div className="inline-block p-3 text-center">
          <div className="mx-auto w-fit rounded-full bg-antiqu-white p-2">
            <img
              src={LunchImg}
              alt="school lunch"
              className="h-24 w-24 object-cover mix-blend-multiply"
            />
          </div>
          <h2 className="mt-2 text-xl font-semibold">
            Discover Our Acclaimed Products
          </h2>
          <p className="mt-2 text-slate-700 font-inter font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            vero possimus error odio quam? Ad?
          </p>
        </div>
      </div>
    </Section>
  );
}
