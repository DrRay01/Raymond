import React from 'react';
import { Button } from "./ui/button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { HeroCarousel } from "./HeroCarousel";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <HeroCarousel />
        
        <div className="max-w-4xl mx-auto text-center mt-12">
        <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Raymond!
          </span>
        </h1>

        <p className="mb-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        A versatile software engineer with experience working with international 
        brands such as InnoCV Solutions and Lottoland in Spain. I specialize in building 
        engaging front-end experiences, blending clean code with strong UI/UX design. 
        Beyond development, I bring a creative touch through photography and graphic 
        design — crafting user-centered, visually compelling digital experiences
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            View Some Works<ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"
          >
            Contact Me
          </Button>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:raymondattahkwame@gmail.com"
            className="p-3 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-900/50 transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}