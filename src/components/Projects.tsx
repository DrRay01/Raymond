import React from "react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Health Care Web App",
    description: "A simple but intuitive Health services web app for a client.",
    image: "https://images.unsplash.com/photo-1632054229892-21103035a686?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwaGVhbHRoJTIwcHJvZmVzc2lvbmFsc3xlbnwxfHx8fDE3NjIyMTM0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://essencesupportservices.co.uk/",
    
  },
  {
    title: "Portfolio for OB Amponsah",
    description: "A simple but intuitive portfolio design for OB Amponsah, a popular Ghanain comedian",
    image: "https://images.unsplash.com/photo-1591800411169-dbba9b110f2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaGFuYWlhbiUyMGNvbWVkaWFuJTIwcGVyZm9ybWVyfGVufDF8fHx8MTc2MjIxMzQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "Firebase", "UI/UX"],
    liveUrl: "https://obamponsah.net/"
  },
  {
    title: "PasscoHub",
    description: "An all-in-one past questions hub for all education institutions in Ghana",
    image: "https://images.unsplash.com/photo-1620829813573-7c9e1877706f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdW5pdmVyc2l0eSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzYyMjEzNDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Next.js", "Animation", "Design"],
    liveUrl: "https://pascohub.com/",
   
  },
  {
    title: "Xpress Remit Mobile and Web App",
    description: "This is a remmittance mobile app that's built to help people in the Diaspora send money back to Africa",
    image: "https://images.unsplash.com/photo-1697344344316-adc7e9d75158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25leSUyMHRyYW5zZmVyJTIwcmVtaXR0YW5jZXxlbnwxfHx8fDE3NjIyMTM0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Flutter", "API"],
    liveUrl: "https://xpressremit.co/",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          With years of experience, I've built numerous software solutions. 
          Here are just a few highlights for you to explore. Feel free to check 
          them out and share your thoughts. I've also developed several international 
          web applications which you'd love to hear about, reach out for more details.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
