import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ title, description, image, tags, liveUrl, githubUrl }: ProjectCardProps) {
  const badgeColors = [
    "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
    "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
    "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300",
    "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300"
  ];

  return (
    <Card className="overflow-hidden group hover:shadow-xl hover:shadow-purple-500/10 transition-all border-2 hover:border-purple-300 dark:hover:border-purple-700">
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20">
        <ImageWithFallback 
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className={badgeColors[index % badgeColors.length]}>
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-purple-600 dark:text-purple-400 hover:underline"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-pink-600 dark:text-pink-400 hover:underline"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
