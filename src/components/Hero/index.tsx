import { ReactElement } from "react";
import { Section } from "../../Atoms";
import HeroImage from "../../assets/images/vegetables-salad-leaf-vegetable.png";
import LemonRightImage from "../../assets/images/lemon-emonade-rotate.png";
import LemonLeftImage from "../../assets/images/lemon-emonade.png";
import { HeartIcon, StarIcon } from "@heroicons/react/20/solid";

export default function Hero(): ReactElement {
  return (
    <>
      <Section>
        <div className="small flex h-[99vh] flex-row small:h-auto small:flex-col-reverse sm:h-auto sm:flex-col-reverse md:flex-row lg:flex-row">
          <div className="flex-cols relative mx-auto flex w-3/4 items-center justify-center p-5 small:w-full sm:w-full md:w-3/4">
            <div className="absolute -bottom-32 left-0 small:-bottom-11 sm:-bottom-20 md:-bottom-32">
              <img
                src={LemonLeftImage}
                alt="Lemon cut"
                className="h-52 w-40 mix-blend-multiply small:h-32 small:w-24 sm:h-32 sm:w-24 md:h-52 md:w-40 lg:h-52 lg:w-40"
              />
            </div>

            <div className="ml-5">
              <div className="md:text-md w-fit rounded-lg bg-antiqu-white px-2 py-1 uppercase text-beers small:text-xs lg:text-lg">
                Welcome to Our Restaurant
              </div>
              <h1 className="font-inter font-semibold capitalize leading-snug small:text-2xl sm:text-3xl md:text-3xl lg:text-5xl">
                Delicious Foods <br /> For Every Occasion <br /> And Festival
              </h1>
              <p className="mt-12 w-10/12 text-slate-600 small:mt-3 small:w-full sm:mt-3 md:mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, sed.
              </p>
              <button className="xs:w-full mt-12 rounded-full bg-beers px-5 py-3 text-lg text-white small:mt-4 small:w-fit sm:mt-4 sm:w-fit md:mt-6 md:w-1/3">
                Order Now
              </button>
            </div>
          </div>
          <div className="relative mx-auto flex w-3/4 items-center justify-center small:w-full sm:w-full md:w-3/4">
            <div className="absolute right-0 top-0">
              <img
                src={LemonRightImage}
                alt="Lemon cut"
                className="h-52 w-40 mix-blend-multiply small:h-32 small:w-24 sm:h-32 sm:w-24 md:h-52 md:w-40 lg:h-52 lg:w-40"
              />
            </div>

            <div className="absolute bottom-0 right-5 hidden md:block lg:block xl:block">
              <HeroCard />
            </div>

            <img src={HeroImage} alt="vegetables-salad-leaf-vegetable z-100" />
            <div className="lg:bottom-18 medium:-bottom-18 absolute bottom-28 left-0 -z-20 small:-bottom-0 sm:bottom-20 md:bottom-4 ">
              <img
                src={LemonRightImage}
                alt="Lemon cut"
                className="h-52 w-40 mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function HeroCard() {
  return (
    <div className="medium:w-38 w-52 rounded-lg bg-white p-3 shadow-2xl sm:w-40 md:w-44">
      <div className="bg-slate-100 p-2">
        <img
          src="/images/popular-food/barbe-que.jpg"
          alt="Salad Special"
          className="mx-auto h-32 w-32 object-cover mix-blend-multiply"
        />
      </div>
      <div className="flex-rows mt-2 flex items-center  justify-between">
        <h1 className="font-inter font-bold">Salad Special</h1>
        <HeartIcon className="h-6 w-6 text-beers" />
      </div>
      <p className="inline-flex items-center gap-x-1 font-semibold text-beers">
        <StarIcon className="h-5 w-5 text-beers" />
        12.99
      </p>
    </div>
  );
}
