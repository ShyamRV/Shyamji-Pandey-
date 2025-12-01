import { 
  BrainCircuit, 
  Code, 
  Cpu, 
  Globe, 
  Layers, 
  Network, 
  Server, 
  Terminal, 
  Zap,
  Award,
  BookOpen
} from "lucide-react";

export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  email: "mailto:contact@shyamjipandey.dev"
};

export const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "Deep Learning Research",
    project: "UAV Vision System",
    description: "Developed advanced computer vision algorithms for autonomous aerial vehicles to detect and track objects in real-time.",
    tech: ["PyTorch", "YOLOv8", "OpenCV"],
    icon: BrainCircuit,
    color: "cyan"
  },
  {
    id: 2,
    role: "Deep Learning Research",
    project: "Graph Link Prediction",
    description: "Implemented GNNs to predict missing links in complex networks, improving recommendation system accuracy by 15%.",
    tech: ["TensorFlow", "Graph Neural Networks", "Python"],
    icon: Network,
    color: "purple"
  },
  {
    id: 3,
    role: "ML Engineer",
    project: "Breast Cancer Classification",
    description: "Built a high-accuracy KNN-based classification model for early detection of malignant tumors using histopathological images.",
    tech: ["Scikit-learn", "Pandas", "Medical Imaging"],
    icon: Zap,
    color: "cyan"
  },
  {
    id: 4,
    role: "Robotics Engineer",
    project: "Humanoid Receptionist",
    description: "Designed the interaction logic and NLP pipeline for a humanoid robot capable of handling visitor queries autonomously.",
    tech: ["ROS", "NLP", "Python"],
    icon: Cpu,
    color: "purple"
  },
  {
    id: 5,
    role: "AI Developer",
    project: "Talonix AI Music Engine",
    description: "Created a generative AI model for synthesizing background music tracks based on emotional prompts.",
    tech: ["Generative AI", "Audio Processing", "React"],
    icon: Layers,
    color: "cyan"
  }
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Neural Vision API",
    description: "A scalable REST API for image recognition tasks deployed on cloud infrastructure.",
    tags: ["FastAPI", "Docker", "AWS"],
    repoUrl: "#"
  },
  {
    id: 2,
    title: "CyberSec Threat Monitor",
    description: "Real-time dashboard visualizing network traffic anomalies using ML.",
    tags: ["React", "D3.js", "WebSockets"],
    repoUrl: "#"
  },
  {
    id: 3,
    title: "Auto-Trade Bot",
    description: "Algorithmic trading bot leveraging reinforcement learning for crypto markets.",
    tags: ["Python", "Reinforcement Learning", "Binance API"],
    repoUrl: "#"
  }
];

export const SKILLS_DATA = [
  { name: "Deep Learning", level: 95, category: "AI" },
  { name: "Computer Vision", level: 90, category: "AI" },
  { name: "React / Next.js", level: 85, category: "Web" },
  { name: "Python / PyTorch", level: 92, category: "Core" },
  { name: "Robotics / ROS", level: 80, category: "Hardware" },
  { name: "Cloud Architecture", level: 75, category: "Ops" },
];

export const ACHIEVEMENTS_DATA = [
  { title: "Hackmatrix IIT Patna", rank: "3rd Place", icon: Award },
  { title: "SIH Internal Hackathon", rank: "Runner-up", icon: Award },
  { title: "Nirmaan Hackathon", rank: "4th Place", icon: Award },
  { title: "Google Student Ambassador", rank: "Community", icon: Globe },
  { title: "GDG Organizer", rank: "Leadership", icon: Server },
];

export const EDUCATION_DATA = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Institute of Technology",
    year: "2021 - 2025",
    grade: "CGPA: 9.2",
    details: "Specialization in Artificial Intelligence and Machine Learning"
  }
];