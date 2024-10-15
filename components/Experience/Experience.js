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
import { useTheme } from "@/ThemeContext"; // Import useTheme

export default function Experience() {
  const { theme } = useTheme(); 

  console.log("Current theme : ", theme);

  return (
    <section className={`px-5 font-boska md:px-8`}>
      <h1
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-6 md:py-12 lg:py-16`}
      >
        Work Experiences
      </h1>

      <div className="space-y-4 ">
        {experienceData.map((experience, index) => (
          <Accordion
            key={index}
            className={`border rounded-sm border-gray-500`} // Apply theme for background and text
            defaultExpanded={index === 0} // Keep the first accordion expanded by default
            sx={{ backgroundColor: theme.background }} // Apply theme background to Accordion using sx
          >
            <AccordionSummary
              expandIcon={<KeyboardArrowDown />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{
                backgroundColor: "inherit", // Ensure background color is inherited
                // color: theme.text // Apply theme text color
              }}
        
            >
              <Typography
                className="sm:text-xl md:text-xl font-medium"
                sx={{ color: theme.text   }}
              >
                {experience.type}
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                backgroundColor: theme.background, 
                color: theme.text
              }}
              className={`p-4`} // Apply theme background and text class
            >
              <div
                className={`flex flex-col md:flex-row items-start md:items-center justify-between mb-4 `}
              >
                {/* Company and Logo */}
                <div className="flex items-center mb-4 md:mb-0">
                  <img
                    src={experience.logo}
                    alt="Company logo"
                    className="h-10 w-10 md:h-12 md:w-12 rounded-full mr-4"
                  />
                  <Typography
                    variant="h6"
                    className="text-lg sm:text-xl md:text-2xl font-semibold"
                    sx={{ color: theme.text }}
                  >
                    {experience.company}
                  </Typography>
                </div>

                {/* Job Title, Date, Location */}
                <div
                  className={`flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4`}
                >
                  <Typography className="flex items-center gap-2 text-sm">
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
              <div className={`mt-2`}>
                <Typography className="font-boska sm:text-lg md:text-md">
                  {experience.description}
                </Typography>

                {/* Responsibilities List */}
                <ul
                  className={`list-disc list-inside mt-2 text-base sm:text-lg md:text-md`}
                >
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
