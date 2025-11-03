import React from "react";
import { Card, CardContent } from "./ui/card";
import { Code2, Palette, Smartphone, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive and performant web applications using modern frameworks and best practices.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    color: "bg-gradient-to-br from-purple-500 to-purple-600"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing interfaces that prioritize user experience.",
    technologies: ["Figma", "Adobe XD", "Design Systems", "Prototyping"],
    color: "bg-gradient-to-br from-pink-500 to-pink-600"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications with native-like performance.",
    technologies: ["React Native", "Flutter", "iOS", "Android"],
    color: "bg-gradient-to-br from-blue-500 to-blue-600"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Ensuring fast load times and smooth interactions through optimization techniques.",
    technologies: ["Web Vitals", "SEO", "Accessibility", "Testing"],
    color: "bg-gradient-to-br from-cyan-500 to-cyan-600"
  },
  {
    icon: Zap,
    title: "Photography",
    description: "Capturing captivating photographs that keep memories alive",
    technologies: ["Light Room", "Photoshop", "Capture One"],
    color: "bg-gradient-to-br from-cyan-500 to-cyan-600"
  },
  {
    icon: Zap,
    title: "Video Editing",
    description: "With a sharp eye and good skill in videography, I capture and edit top notch videos",
    technologies: ["Adobe Premier Pro", "Davinci Resolve", "LUTs", "Color Grading"],
    color: "bg-gradient-to-br from-cyan-500 to-cyan-600"
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Designing visually appealing and purpose driven visuals",
    technologies: ["Photoshop", "Figma", "Canva", "Color"],
    color: "bg-gradient-to-br from-cyan-500 to-cyan-600"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I combine technical skills with creative thinking to deliver comprehensive solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg hover:shadow-purple-500/10 transition-all hover:-translate-y-1 border-2 hover:border-purple-200 dark:hover:border-purple-800">
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-full ${skill.color} mb-4 shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3">{skill.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
