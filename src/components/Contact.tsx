import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative
            ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <Card className="border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-colors">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="mb-1">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    raymondattahkwame@gmail.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-pink-200 dark:hover:border-pink-800 transition-colors">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 shadow-lg">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="mb-1">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    +233 (024) 1405 195
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="mb-1">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Accra, Ghana
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="lg:col-span-2 border-2 border-purple-100 dark:border-purple-900">
            <CardContent className="p-8">
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-purple-200 dark:border-purple-800 focus:border-purple-500 dark:focus:border-purple-500"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-purple-200 dark:border-purple-800 focus:border-purple-500 dark:focus:border-purple-500"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-purple-200 dark:border-purple-800 focus:border-purple-500 dark:focus:border-purple-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}