import React from "react";
import { Section } from "../../Atoms";
import latestFoodData from "../../data/LatestFood.json";
import { Link } from "react-router-dom";

export default function LatestFood() {
  return (
    <Section>
      <div className="mt-10">
        <Section.Badge>Latest Blog</Section.Badge>
        <Section.Heading>Our Latest Foods News</Section.Heading>
        <div className="mx-auto mb-10 grid w-10/12 grid-cols-3 gap-x-6 small:w-10/12 small:grid-cols-1 small:gap-y-5 medium:w-full medium:grid-cols-2 medium:p-3 sm:grid-cols-2 large:grid-cols-2 md:w-10/12 xlarge:grid-cols-3">
          {latestFoodData.map((food, index) => (
            <FoodCard key={index} {...food} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function FoodCard({
  image,
  date,
  title,
  price,
  slug,
}: {
  image: string;
  date: string;
  title: string;
  price: number;
  slug: string;
}) {
  let uploadDate = new Date(date);
  const month = uploadDate.toLocaleString("default", { month: "long" });
  return (
    <div className="border-slat-800 rounded-xl border shadow-2xl">
      <img src={image} alt={title} className="rounded-t-lg h-48 w-full md:h-40 sm:h-36 mobile:h-36 object-cover" />
      <div className="p-5">
        <p className="mt-2 font-medium text-slate-500">
          {month + " " + uploadDate.getDate() + " " + uploadDate.getFullYear()}
        </p>
        <h3 className="font-inter text-lg font-bold text-slate-700">{title.length>=72?title.slice(0,69)+"...":title}</h3>
        <hr className="mb-2 mt-2" />
        <div className="flex flex-row items-center justify-between">
          <p className="font-inter text-lg font-bold">${price}</p>
          <Link to={slug}>
            <button className="cursor-pointer rounded-full border border-slate-300 p-2 hover:bg-beers hover:text-white">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
