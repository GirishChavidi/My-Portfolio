import gmart from "../assets/images/gmart.png";
import qrProject from "../assets/images/qr-project.png";
import qrDemo from "../assets/images/qr-demo.png";
import Movies from "../assets/images/Movies.png";
import jobDashboard from "../assets/images/job.png";

export const portfolioData = {
 
  name: "GIRISH CHAVIDI",
  title: "Software Developer | Full Stack Developer | React.js",
  subtitle:
    "Frontend-focused developer specializing in React.js, REST APIs, and scalable UI development with real-world project experience.",

  email: "girishchavidi425@gmail.com",
  github: "https://github.com/GirishChavidi",
  linkedin: "https://linkedin.com/in/girishchavidi",
  ContactMe: 9347861175,


  about:
    "Software Developer with hands-on experience in building real-world web applications using React.js, JavaScript, and modern deployment tools. Developed a QR-Based Student Verification System and a full-featured React E-commerce application with dynamic routing, API integration, and responsive UI.",


  skills: [
    "React.js",
    "JavaScript (ES6+)",
    "Python",
    "HTML5",
    "CSS3",
    "Responsive Web Design",
    "React Router",
    "Context API",
    "REST API Integration",
    "Git & GitHub",
    "Netlify Deployment",
    "Nginx (Frontend Deployment)",
    "Cloudflare (DNS & Hosting)"
    
  ],

 
  experience: {
    role: "Frontend Developer",
    organization: "AI Workforce Experience Center",
    duration: "Project-Based Experience",
    points: [
      "Developed a QR-Based Student Verification System with secure token-based routing.",
      "Built responsive UI using React.js with dynamic data fetching from APIs.",
      "Deployed frontend applications using Nginx and Cloudflare for production.",
      "Implemented reusable component architecture and error handling."
    ]
  },


  education: {
    degree:
      "Bachelor of Technology (B.Tech) in Electronics & Communication Engineering",
    college: "Sir C V Raman Institute of Science and Technology",
    university: "Affiliated to JNTU Anantapur",
    year: "2019 – 2023",
    cgpa: "7.03 / 10"
  },


projects: [
  {
    title: "Student QR Verification System",
    image: qrProject,
    description:
      "QR-based student verification system with secure token-based routing, dynamic profile rendering, and production deployment using Nginx and Cloudflare.",
    tech: [
      "React.js",
      "REST API",
      "Token Routing",
      "Responsive UI",
      "Nginx",
      "Cloudflare"
    ],
    github:
      "https://github.com/GirishChavidi/AI-Workforce-Students-QR",
    live: "https://ui.aiworkforce.in"
  },

  {
    title: "G MART – E-commerce Application",
    image: gmart,
    description:
      "Full React-based e-commerce platform featuring authentication, protected routes, cart system, checkout flow, and state management using Context API.",
    tech: [
      "React.js",
      "Context API",
      "React Router",
      "Responsive Design",
      "Netlify"
    ],
    github:
      "https://github.com/GirishChavidi/react-router-ecommerce.git", 
    live: "https://g-martapp.netlify.app/"
  },

  {
    title: "Movie Search Application",
    image:Movies , 
    description:
      "Dynamic movie search web application using external REST APIs with real-time search functionality and responsive UI rendering.",
    tech: [
      "React.js",
      "REST API",
      "JavaScript",
      "Responsive UI"
    ],
    github:
      "https://github.com/GirishChavidi/Hotstar-Clone.git", 
    live: "https://hotstarcloneapplication.netlify.app" // replace
  },

  {
    title: "React Job Dashboard",
    image: jobDashboard, // replace with actual dashboard image
    description:
      "Interactive job dashboard with filtering logic, reusable UI components, and dynamic state management.",
    tech: [
      "React.js",
      "Filtering Logic",
      "Component Architecture",
      "Responsive Design"
    ],
    github:
      "https://github.com/GirishChavidi/REACT-JOB-DASHBOARD", // replace
    live: "https://girishjobfinder.netlify.app/" // replace
  }
],
  // ================= QR DEMO =================
  qrDemoImage: qrDemo,
  qrDescription:
    "Live QR verification result from deployed system where each QR uniquely verifies student profile and project details via secure API."
};