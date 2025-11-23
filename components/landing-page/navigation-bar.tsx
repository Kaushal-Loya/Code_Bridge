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
import { Menu, ChevronDown } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";

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
  const [openCourses, setOpenCourses] = useState(false);
  const router = useRouter();

  return (
    <div className="p-4 max-w-7xl flex justify-between items-center w-full mx-auto">
      <h2
        className="font-bold text-3xl font-game cursor-pointer"
        onClick={() => router.push("/")}
      >
        CodeBridge
      </h2>

      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="gap-10">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="cursor-pointer">
                Courses
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid md:grid-cols-2 gap-2 sm:w-[400px] md:w-[500px] lg:w-[600px] p-2">
                  {courses.map((course) => (
                    <Link key={course.id} href={course.path}>
                      <div className="p-2 hover:bg-accent rounded-xl cursor-pointer">
                        <h2 className="font-medium">{course.name}</h2>
                        <p className="text-sm text-gray-500">{course.desc}</p>
                      </div>
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {[
              { href: "/projects", label: "Projects" },
              { href: "/pricing", label: "Pricing" },
              { href: "/contact-us", label: "Contact Us" },
            ].map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link href={item.href}>{item.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <SignedIn>
        <div className="hidden md:flex items-center gap-3">
          <Link href="/dashboard">
            <Button
              className="font-game text-lg px-4 py-1 cursor-pointer"
              variant="pixel"
            >
              Dashboard
            </Button>
          </Link>

          <UserButton
            appearance={{
              elements: {
                userButtonOuter: "m-0 p-0",
                userButtonBox: "m-0 p-0",
              },
            }}
          />
        </div>
      </SignedIn>

      <SignedOut>
        <div className="hidden md:flex items-center">
          <SignInButton mode="modal">
            <Button
              variant="pixel"
              className="font-game text-xl cursor-pointer"
            >
              Sign In
            </Button>
          </SignInButton>
        </div>
      </SignedOut>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu size={28} />
        </SheetTrigger>

        <SheetContent side="right" className="p-4 w-80">
          <div className="mt-2 space-y-6">
            <button
              className="flex items-center justify-between w-full py-3 text-left border-b"
              onClick={() => setOpenCourses(!openCourses)}
            >
              <span className="font-medium text-lg">Courses</span>
              <ChevronDown
                className={`transition-transform ${
                  openCourses ? "rotate-180" : ""
                }`}
              />
            </button>

            {openCourses && (
              <div className="space-y-3 pl-2 max-h-56 overflow-y-auto">
                {courses.map((course) => (
                  <Link key={course.id} href={course.path} className="block">
                    <div className="py-2 px-3 hover:bg-accent rounded-lg">
                      <h3 className="font-medium">{course.name}</h3>
                      <p className="text-sm text-gray-500 line-clamp-1">
                        {course.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <div className="space-y-4">
              {[
                { href: "/projects", label: "Projects" },
                { href: "/pricing", label: "Pricing" },
                { href: "/contact-us", label: "Contact Us" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-lg font-medium border-b pb-2 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="pt-6 border-t">
              <SignedIn>
                <div className="flex items-center justify-between">
                  <Link href="/dashboard">
                    <Button
                      className="font-game text-lg px-4 py-1"
                      variant="pixel"
                    >
                      Dashboard
                    </Button>
                  </Link>

                  <UserButton
                    appearance={{
                      elements: {
                        userButtonOuter: "m-0 p-0",
                        userButtonBox: "m-0 p-0",
                      },
                    }}
                  />
                </div>
              </SignedIn>

              <SignedOut>
                <Link href="/sign-up">
                  <Button
                    className="font-game text-xl w-full mt-4"
                    variant="pixel"
                  >
                    Sign Up
                  </Button>
                </Link>
              </SignedOut>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavigationBar;
