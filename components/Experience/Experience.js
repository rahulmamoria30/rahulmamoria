import React from "react";
import {
  Business,
  Event,
  LocationOn,
  KeyboardArrowDown
} from "@mui/icons-material";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import experienceData from "@/data/experience-data";

export default function Experience() {
  return (
    <section className="px-5 font-boska md:px-8">
      <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-6 md:py-12 lg:py-16">
        Work Experiences
      </h1>

      <div className="space-y-4 ">
        {experienceData.map((experience, index) => (
          <Accordion
            key={index}
            className="border rounded-sm  border-gray-500"
            defaultExpanded={index === 0} // Keep the first accordion expanded by default
          >
            <AccordionSummary
              expandIcon={<KeyboardArrowDown className=""  />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              className="bg-gray-100 dark:bg-[#34373b]"
            >
              <Typography className=" sm:text-xl md:text-xl font-medium  dark:text-gray-200 font-boska">
                {experience.type}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="p-4 dark: bg-[#34373b]">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
                {/* Company and Logo */}
                <div className="flex items-center mb-4 md:mb-0">
                  <img
                    src={experience.logo}
                    alt="Company logo"
                    className="h-10 w-10 md:h-12 md:w-12 rounded-full mr-4"
                  />
                  <Typography
                    variant="h6"
                    className="text-lg sm:text-xl md:text-2xl font-semibold  dark:text-gray-200"
                  >
                    {experience.company}
                  </Typography>
                </div>

                {/* Job Title, Date, Location */}
                <div className=" dark:text-gray-300 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4">
                  <Typography className="flex items-center gap-2">
                    <Business fontSize="small" /> {experience.title}
                  </Typography>
                  <Typography className="flex items-center gap-2">
                    <Event fontSize="small" /> {experience.date}
                  </Typography>
                  <Typography className="flex items-center gap-2">
                    <LocationOn fontSize="small" /> {experience.location}
                  </Typography>
                </div>
              </div>

              {/* Job Description */}
              <div>
                <Typography className=" dark:text-gray-300 font-boska text-base sm:text-lg md:text-xl">
                  {experience.description}
                </Typography>

                {/* Responsibilities List */}
                <ul className="list-disc list-inside mt-2  dark:text-gray-300 text-base sm:text-lg md:text-xl">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="mb-1 last:mb-0">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
