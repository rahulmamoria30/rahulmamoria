import { UserPlus, FileSearch, CheckCircle, ClipboardList, Brain, Calendar } from "lucide-react";

export const hackathonImages = [
  {
    src: "/images/image.jpeg",
    alt: "Team working on hackathon project",
    description: "Our team collaborating on the winning solution"
  },
  {
    src: "/images/awards.jpeg",
    alt: "Celebration moment",
    description: "Celebrating our victory with the team"
  },
  {
    src: "/images/hackathong-group.jpeg",
    alt: "Hackathon presentation",
    description: "Presenting our innovative solution to the judges"
  },
  {
    src: "/images/group1.jpeg",
    alt: "Celebration moment",
    description: "Celebrating our victory with the team"
  }
];

export const linkedinPosts = [
  {
    id: 1,
    content: `🚀 Hackathon Win at Grid Dynamics! 🏆 Thrilled to share that our team emerged as winners at the Grid Dynamics Hackathon 2025! 🎉
Big thanks to Grid Dynamics for hosting such an inspiring event and giving us the platform to innovate.`,
    date: "May 05, 2025",
    link: "https://www.linkedin.com/posts/rahulmm07_hackathonwinner-griddynamics-ai-activity-7325209580890685440-pA1L?utm_source=share&utm_medium=member_desktop&rcm=ACoAACz4G_MBvcDH6qTYpEj0-fqwQfssXNTmHds"
  },
  {
    id: 2,
    content: `So happy to be part of the Hackathon. Huge thanks to Rajeev Sharma , KV Sharma (Venkateshwar Sharma Kappagantula) for the incredible opportunity. What a fantastic experience!
hashtag#Griddynamics hashtag#Innovation`,
    date: "May 20, 2025",
    link: "https://www.linkedin.com/posts/grid-dynamics-career_india-hackathon-activity-7330587293524668416-gBJq?utm_source=share&utm_medium=member_desktop&rcm=ACoAACz4G_MBvcDH6qTYpEj0-fqwQfssXNTmHds"
  }
];

export const recruitmentSteps = [
  {
    title: "Real Business Scenario Application",
    description: "A candidate applies via the Grid Dynamics Careers page.",
    icon: UserPlus,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "AI-Based Resume Matching",
    description: "Behind the scenes, AI compares the candidate's resume with the job description and generates a fitment score.",
    icon: FileSearch,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Shortlisting",
    description: "If the fitment score meets the criteria, the candidate moves to the next round. If not, the application is rejected automatically.",
    icon: CheckCircle,
    color: "from-green-500 to-green-600"
  },
  {
    title: "Assessment Questions",
    description: "For shortlisted candidates: AI generates pre-screening questions for assessments. These questions can be sent as a link or used by the TA team during screening. The same questions can also support Technical Interviews (TI).",
    icon: ClipboardList,
    color: "from-yellow-500 to-yellow-600"
  },
  {
    title: "Behavioral Analysis",
    description: "The system tracks how candidates perform during the assessment (time taken, switching tabs, copy paste and more cheating analysis etc.). Analyzes answers to measure skill level and intent.",
    icon: Brain,
    color: "from-red-500 to-red-600"
  },
  {
    title: "Interview Scheduling and Transcript Analysis",
    description: "Interviews are scheduled automatically based on availability. Post-interview, AI analyzes the transcript(Future Scope) for insights on communication skills, technical depth, and cultural fit.",
    icon: Calendar,
    color: "from-indigo-500 to-indigo-600"
  }
]; 