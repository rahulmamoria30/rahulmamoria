import Image from "next/image";
import PROJECT_DATA from "@/data/project_data";
import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  Typography,
  IconButton,
  DialogActions,
  DialogContent
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub"; // Import the GitHub icon
import ReactMarkdown from "react-markdown"; // Import react-markdown
import { useTheme } from "@/ThemeContext";
// import { theme } from "antd";
// Dialog Component
const ProjectDialog = ({ project, onClose }) => {
  const { theme } = useTheme();

  return (
    <Dialog
      open={true}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "1200px", // Increase the width as needed
          height: "600px", // Increase the height as needed
          backgroundColor: theme.background,
          color: theme.text
        }
      }}
    >
      <DialogTitle
        sx={{ backgroundColor: theme.background, color: theme.text }}
      >
        {project.project_name}
      </DialogTitle>
      <DialogContent
        sx={{
          overflowY: "auto",
          backgroundColor: theme.background
        }}
      >
        {/* Display tech stack */}
        <Typography
          variant="subtitle1"
          sx={{
            mb: 2,
            fontWeight: "bold",
            color: theme.text,
            paddingTop: "10px"
          }}
        >
          Tech Stack:
        </Typography>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techstack.map((tech, idx) => (
            <span
              key={idx}
             
              className={` bg-gray-300 text-gray-800 px-2 py-1 rounded`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Display project details */}
        <Typography
          variant="subtitle1"
          sx={{ mb: 1, fontWeight: "bold", color: theme.text }}
        >
          Project Details:
        </Typography>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          {project.project_detail.map((detail, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <ReactMarkdown>{detail}</ReactMarkdown>
            </li>
          ))}
        </ul>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: theme.background }}>
        <Button onClick={onClose}  className=" text-[#FF6347] hover:bg-[#E5533C] hover:text-white">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

function ProjectCard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { theme } = useTheme();
  const handleCheckProjectClick = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {PROJECT_DATA.map((project, index) => (
        <Card
          key={index}
          className="flex flex-col bg-transparent shadow-none border border-gray-600 pt-6 rounded-lg"
        >
          <Image
            src={project.image}
            height={800}
            width={800}
            alt={project.project_name}
            className="object-cover h-48 w-full"
          />
          <CardContent className="flex flex-col justify-between font-boska ">
            <Typography
              variant="h6"
              sx={{
                color: theme.text
              }}
              className="mb-2"
            >
              {project.project_name}
            </Typography>

            {/* Display project tech stack */}
            <div className="flex flex-wrap gap-2 mb-2 text-sm">
              {project.techstack.map((tech, idx) => (
                <span
                  key={idx}
                  className={` bg-gray-300 text-gray-800 px-2 py-1 rounded`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="border border-b-0 my-3"></div>
            <div className="flex justify-between items-center">
              <IconButton
                className=""
                onClick={() => window.open(project.github_link, "_blank")}
              >
                <GitHubIcon
                  sx={{
                    color: theme.text
                  }}
                />
              </IconButton>
              <Button onClick={() => handleCheckProjectClick(project)} 
              className=" text-[#FF6347] hover:bg-[#E5533C] hover:text-white">
                Description
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Dialog for project details */}
      {isDialogOpen && selectedProject && (
        <ProjectDialog project={selectedProject} onClose={closeDialog} />
      )}
    </div>
  );
}

export default ProjectCard;
