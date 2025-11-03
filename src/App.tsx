import React from "react";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-purple-100 dark:border-purple-900">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a
            href="#"
            className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Raymond Attah
          </a>
          <div className="flex gap-6">
            <a
              href="#projects"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>
            © 2025 Raymond Attah Kwame. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}