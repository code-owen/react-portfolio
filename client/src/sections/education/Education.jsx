import { useState } from "react";
import SectionsTitle from "../../components/SectionsTitle";
import { education } from "../../resources/education";

const Education = () => {
  const [selectedPeriodIndex, setselectedPeriodIndex] = useState(0);
  return (
    <div className="pb-10 pt-20">
      <SectionsTitle title="Education" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-teal-700 w-1/3 sm:w-full sm:overflow-x-scroll sm:flex-row">
          {education.map((experience, idx) => (
            <div
              className="cursor-pointer"
              onClick={() => setselectedPeriodIndex(idx)}
              key={idx}
            >
              <h1
                className={`text-xl px-5 ${
                  selectedPeriodIndex === idx
                    ? "text-teal-600 border-l-4 -ml-[3px] bg-teal-500 opacity-60 py-3"
                    : "text-white"
                } text-white`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10">
          <h1 className="text-primary">
            {education[selectedPeriodIndex].name}
          </h1>
          <p>{education[selectedPeriodIndex].program}</p>
          <p>{education[selectedPeriodIndex].period}</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
