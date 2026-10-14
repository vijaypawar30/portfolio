// All your portfolio content lives here. Edit text here, not inside App.jsx.

export const profile = {
  name: "Vijay Pawar",
  title: "Java Full Stack Developer",
  intro:
    "I build Spring Boot REST APIs and React frontends. MCA student in Pune, looking for my first developer role.",
  email: "vijaypawar6008@gmail.com",
  linkedin: "https://www.linkedin.com/in/vijay-pawar-41a575380",
  github: "https://github.com/vijaypawar30",
  cv: "/Vijay_Pawar_CV.pdf", // put your PDF in the /public folder with this name
};

export const projects = [
  {
    title: "E-Commerce Backend API",
    text: "REST API with product, category and order modules, JWT login and exception handling.",
    stack: ["Java", "Spring Boot", "MySQL", "JWT"],
    repo: "https://github.com/vijaypawar30/ecommerce-backend",
  },
  {
    title: "Reminder & Notification Service",
    text: "Full stack app that sends emails at the time you schedule. Spring Scheduler on the backend, glassmorphism UI in React.",
    stack: ["Spring Boot", "React", "Tailwind", "Framer Motion"],
    repo: "https://github.com/vijaypawar30/reminder-notification-service",
    repo2: "https://github.com/vijaypawar30/reminder-notification-frontend",
  },
];

export const skills = [
  { group: "Backend", items: ["Java", "Spring Boot", "REST APIs", "JWT", "JPA", "Hibernate"] },
  { group: "Frontend", items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Framer Motion"] },
  { group: "Database and tools", items: ["MySQL", "Git", "GitHub", "Postman", "VS Code", "Eclipse"] },
];

export const education = [
  { degree: "MCA", place: "Savitribai Phule Pune University", year: "2026 to 2027" },
  { degree: "BBA (Computer Application)", place: "Savitribai Phule Pune University", year: "2023 to 2025" },
];

export const about =
  "I completed a Full Stack Java Development course at IT Vedant and turned it into working projects. I come from Satara, live in Pune, and I am practising data structures in Java every day.";

export const aboutGoal =
  "I am looking for a Java Full Stack Developer role, where I can keep learning and ship real features.";

export const dsaTopics = ["Arrays", "Strings", "HashMap", "Sorting", "Two Pointers", "Sliding Window", "Linked List", "Binary Search"];
