import React, { ReactElement, ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

function Section({ children, className }: SectionProps): ReactElement {
  return (
    <div
      className={`p-4" border border-l-slate-950 ${className ? className : ""}`}
    >
      {children}
    </div>
  );
}

Section.Badge = function SectionBadge({
  children,
}: {
  children: string;
}): ReactElement {
  return (
    <div className="mx-auto w-fit rounded-md bg-antiqu-white px-3 text-center font-uncut-sans text-lg  capitalize text-amber-500">
      {children}
    </div>
  );
};

Section.Heading = function SectionHeading({
  children,
}: {
  children: ReactElement | string;
}): ReactElement {
  return (
    <h2 className="small: mobile:text-md mb-4 mt-4 text-center font-uncut-sans text-5xl font-extrabold capitalize small:text-xl medium:text-xl sm:text-3xl md:text-4xl">
      {children}
    </h2>
  );
};

export default Section;
