"use client";

import Image from "next/image";

const options = [
  {
    id: 1,
    title: "Quizz Pack",
    desc: "Sharpen your skills with quick, fun challenges.",
    icon: "/pack.png",
  },
  {
    id: 2,
    title: "Daily Challenge",
    desc: "Solve one fresh coding task every day.",
    icon: "/game.png",
  },
  {
    id: 3,
    title: "Learning Tracker",
    desc: "View your streaks, progress, and completed lessons.",
    icon: "/degree.png",
  },
  {
    id: 4,
    title: "Talk with AI",
    desc: "Get help, clarity, and debugging tips instantly.",
    icon: "/robot.png",
  },
];


const ExploreMore = () => {
  return (
    <div className="mt-10">
      <h2 className="text-center text-3xl font-game mb-6">Explore More</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {options.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-4 bg-zinc-900 rounded-xl border hover:bg-zinc-800 transition"
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={70}
              height={70}
              className="shrink-0"
            />

            <div className="cursor-pointer">
              <h3 className="font-game text-xl">{item.title}</h3>
              <p className="font-game text-gray-400 text-sm mt-1 leading-snug">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;
