import React from "react";
import { Code2, Play, Laptop } from "lucide-react";

export interface Project {
  image: string;
  project_name: string;
  slug: string;
  project_detail: string[];
  project_link: string;
  github_link: string;
  icon: React.ElementType;
  techstack: string[];
  description: string;
}

export const PROJECT_DATA: Project[] = [
  {
    image: "/images/projects/unit-testing.png",
    project_name: "Software Unit Testing",
    slug: "software-unit-testing",
    project_detail: [
      "An AI-powered unit test generator that automates test case creation for Java and Python codebases. The tool analyzes code repositories, generates comprehensive test cases, and provides detailed reports, significantly reducing manual testing effort while improving code coverage and quality."
    ],
    project_link: "",
    github_link: "https://github.com/rahulmamoria30/software_unit_testing",
    icon: Code2,
    techstack: [
      "Java",
      "Python",
      "React",
      "JavaScript",
      "LLM (Language Model)"
    ],
    description: `# Software Unit Testing

## Overview
An AI-powered unit test generator that automates test case creation for Java and Python codebases. The tool analyzes code repositories, generates comprehensive test cases, and provides detailed reports, significantly reducing manual testing effort while improving code coverage and quality.

## Key Features
- 🤖 **AI-Powered Analysis**: Intelligent code analysis for accurate test generation
- 📊 **Comprehensive Coverage**: Generates tests for multiple programming languages
- 📝 **Detailed Reports**: Clear documentation of test cases and results
- ⚡ **Efficient Testing**: Reduces manual effort and improves testing speed

## Tech Stack
- **Frontend**: React, TypeScript
- **Backend**: Python, Java
- **AI/ML**: LLM Integration
- **Testing**: Pytest, JUnit

## Implementation Details
The system uses advanced AI techniques to:
1. Analyze code structure and dependencies
2. Generate appropriate test cases
3. Execute tests and validate results
4. Provide comprehensive documentation

## Impact
- Reduced testing time by 70%
- Improved code coverage by 40%
- Enhanced test quality and reliability
- Streamlined development workflow`
  },
  {
    image: "/images/projects/youtube.png",
    project_name: "YouTube Clone",
    slug: "youtube-channel",
    project_detail: [
      "A feature-rich YouTube clone that replicates core functionalities including video search, playback, and detailed video information display. Built with responsive design principles and integrated with the YouTube Data API for real-time content delivery."
    ],
    project_link: "https://rahulmmyoutubeclone.netlify.app/",
    github_link: "https://github.com/rahulmamoria30/youtube-clone",
    icon: Play,
    techstack: [
      "HTML",
      "CSS",
      "JavaScript",
      "YouTube API",
      "Responsive Design"
    ],
    description: `# YouTube Clone

## Overview
A feature-rich YouTube clone that replicates core functionalities including video search, playback, and detailed video information display. Built with responsive design principles and integrated with the YouTube Data API for real-time content delivery.

## Key Features
- 🎥 **Video Playback**: Smooth video streaming experience
- 🔍 **Search Functionality**: Real-time video search
- 📱 **Responsive Design**: Works on all devices
- 📊 **Video Details**: Comprehensive video information

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **API**: YouTube Data API
- **Design**: Responsive Web Design
- **Performance**: Optimized loading

## Core Functionalities
- Video search and filtering
- Video playback controls
- User interface replication
- Responsive layout
- Real-time data fetching

## Technical Highlights
- Clean, semantic HTML
- Modern CSS techniques
- Efficient JavaScript
- API integration
- Performance optimization`
  },
  {
    image: "/images/projects/ecommerce.png",
    project_name: "An E-commerce website",
    slug: "e-commerce-webpage",
    project_detail: [
      "A modern e-commerce platform built with Next.js and MongoDB, featuring product listings, user authentication, shopping cart functionality, and secure payment integration. The platform emphasizes scalability, performance, and user experience."
    ],
    project_link: "",
    github_link: "https://github.com/rmamoria/shopify",
    icon: Laptop,
    techstack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    description: `# E-commerce Platform

## Overview
A modern e-commerce platform built with Next.js and MongoDB, featuring product listings, user authentication, shopping cart functionality, and secure payment integration. The platform emphasizes scalability, performance, and user experience.

## Key Features
- 🛍️ **Product Management**: Comprehensive product catalog
- 🔐 **User Authentication**: Secure login system
- 🛒 **Shopping Cart**: Intuitive cart management
- 💳 **Payment Processing**: Secure checkout system

## Tech Stack
- **Frontend**: Next.js, React
- **Backend**: Node.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Payment**: Stripe Integration

## Core Features
- Product listing and search
- User authentication
- Shopping cart functionality
- Secure payment processing
- Order management

## Technical Implementation
- Server-side rendering
- API route handlers
- Database optimization
- Security measures
- Performance tuning`
  }
]; 