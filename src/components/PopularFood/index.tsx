import React, { ReactElement } from "react";
import { Section } from "../../Atoms";
import popularFood from "../../data/PopularFood.json";

export default function PopularFood(): ReactElement {
  return (
    <Section className={"bg-slate-100 pb-20 pt-10"} id="products">
      <Section.Heading>Our Popular Foods Menu</Section.Heading>
      <div className="mobile:mt-18 mx-auto mt-32 grid w-10/12 grid-cols-4 gap-x-7 p-2 mobile:w-full mobile:grid-cols-2 mobile:gap-y-32 medium:grid-cols-3 sm:mt-28 sm:w-full sm:gap-y-32 large:w-11/12 md:mt-32 md:grid-cols-4">
        {popularFood.map((item, index) => {
          return <PopularFoodCard {...item} key={index} />;
        })}
      </div>
    </Section>
  );
}

function PopularFoodCard({
  name,
  type,
  price,
  img,
}: {
  name: string;
  type: string;
  price: string;
  img: string;
}): ReactElement {
  return (
    <div className="relative h-72 rounded-3xl bg-white p-3 shadow-lg small:h-48 medium:h-48 sm:h-56 large:h-48 xlarge:h-60 xxlarge:h-72">
      <div className="shadow-full absolute -top-20 left-0 right-0 mx-auto w-11/12 rounded-full bg-white shadow-2xl">
        <img
          src={img}
          alt={name}
          className="mx-auto h-full w-fit object-contain mix-blend-multiply"
        />
      </div>
      <div className="absolute bottom-2 left-0 mt-4 w-full text-center">
        <h1 className="font-inter text-xl font-semibold">{name}</h1>
        <p className="font-inter font-medium text-slate-500">{type}</p>
        <p className="font-inter text-2xl font-bold ">${price}</p>
      </div>
    </div>
  );
}
