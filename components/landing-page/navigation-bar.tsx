"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, ChevronDown } from "lucide-react";

const courses = [
  {
    id: 1,
    name: "HTML",
    desc: "Learn the fundamentals of HTML and build the structure of modern web pages.",
    path: "/course/1/detail",
  },
  {
    id: 2,
    name: "CSS",
    desc: "Master CSS to style and design responsive, visually appealing web layouts.",
    path: "/course/2/detail",
  },
  {
    id: 3,
    name: "React",
    desc: "Build dynamic and interactive web applications using the React JavaScript library.",
    path: "/course/3/detail",
  },
  {
    id: 4,
    name: "React Advanced",
    desc: "Deep dive into advanced React concepts including hooks, state management, performance optimization, and architectural patterns.",
    path: "/course/4/detail",
  },
  {
    id: 5,
    name: "Python",
    desc: "Learn Python programming from basics to intermediate level, covering logic building, functions, and real-world applications.",
    path: "/course/5/detail",
  },
  {
    id: 6,
    name: "Python Advanced",
    desc: "Master advanced Python concepts such as OOP, modules, APIs, data processing, and automation.",
    path: "/course/6/detail",
  },
  {
    id: 7,
    name: "Generative AI",
    desc: "Explore prompt engineering, LLMs, embeddings, image generation, and build GenAI-powered applications.",
    path: "/course/7/detail",
  },
  {
    id: 8,
    name: "Machine Learning",
    desc: "Understand ML concepts, algorithms, data preprocessing, model training, evaluation, and deployment.",
    path: "/course/8/detail",
  },
  {
    id: 9,
    name: "JavaScript",
    desc: "Learn core JavaScript concepts, asynchronous programming, DOM manipulation, and modern ES6+ features.",
    path: "/course/9/detail",
  },
];

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  return (
    <div className="p-4 max-w-7xl flex justify-between items-center w-full mx-auto">
      <div className="flex gap-2 items-center">
        <h2 className="font-bold text-3xl font-game">CodeBridge</h2>
      </div>

      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="gap-10">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="cursor-pointer">
                Courses
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid md:grid-cols-2 gap-2 sm:w-[400px] md:w-[500px] lg:w-[600px]">
                  {courses.map((course, index) => (
                    <Link key={index} href={course.path}>
                      <div className="p-2 hover:bg-accent rounded-xl cursor-pointer">
                        <h2 className="font-medium">{course.name}</h2>
                        <p className="text-sm text-gray-500">{course.desc}</p>
                      </div>
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link href={"/projects"}>Projects</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link href={"/pricing"}>Pricing</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link href={"/contact-us"}>Contact Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <Button
        className="font-game text-2xl cursor-pointer hidden md:block"
        variant={"pixel"}
        size={"lg"}
      >
        Sign Up
      </Button>

      <button
        className="md:hidden p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-background z-50 md:hidden">
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-2xl font-game">CodeBridge</h2>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="space-y-4">
                <div className="space-y-2">
                  <button
                    className="flex items-center justify-between w-full py-3 text-left border-b"
                    onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                  >
                    <span className="text-lg font-medium">Courses</span>
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        isCoursesOpen ? "rotate-180" : ""
                      }`}
                      size={20}
                    />
                  </button>
                  
                  {isCoursesOpen && (
                    <div className="max-h-48 overflow-y-auto ml-2 border-l-2 border-gray-200 pl-4">
                      <div className="space-y-2 py-2">
                        {courses.map((course, index) => (
                          <Link
                            key={index}
                            href={course.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 px-3 hover:bg-accent rounded-lg transition-all duration-200 hover:translate-x-1"
                          >
                            <h3 className="font-medium">{course.name}</h3>
                            <p className="text-sm text-gray-500 line-clamp-1">
                              {course.desc}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {[
                  { href: "/projects", label: "Projects" },
                  { href: "/pricing", label: "Pricing" },
                  { href: "/contact-us", label: "Contact Us" }
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-lg font-medium border-b hover:text-blue-600 transition-colors duration-200 hover:translate-x-2"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mb-[300px]">
              <Button
                className="font-game text-xl cursor-pointer w-full"
                variant={"pixel"}
                size={"lg"}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;