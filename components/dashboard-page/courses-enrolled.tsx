"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

const CoursesEnrolled = () => {
  const [courses, setCourses] = useState([]);

  const isEmpty = courses.length === 0;

  return (
    <div className="mt-10">
      <h2 className="text-center text-3xl font-game mb-6">
        Your Enrolled Courses
      </h2>

      {isEmpty ? (
        <div className="flex flex-col items-center gap-4 p-8 bg-zinc-900 border rounded-2xl text-center">
          <Image src="/books.png" alt="books" width={100} height={100} />
          <h3 className="font-game text-2xl">
            You don&apos;t have any enrolled courses
          </h3>

          <Button variant="pixel" size="lg" className="font-game text-xl cursor-pointer">
            Browse All Courses
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5"></div>
      )}
    </div>
  );
};

export default CoursesEnrolled;
