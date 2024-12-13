import React from "react";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { TbFileTypeCss } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const stackItems = [
  {
    id: 1,
    name: "HTML",
    icon: FaHtml5,
    color: "#E54C21",
  },
  {
    id: 2,
    name: "CSS",
    icon: TbFileTypeCss,
    color: "#264DE4",
  },
  {
    id: 3,
    name: "Javascript",
    icon: IoLogoJavascript,
    color: "#FFF200",
  },
  {
    id: 4,
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    id: 5,
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    id: 6,
    name: "Node.js",
    icon: DiNodejs,
    color: "#339933",
  },
  {
    id: 7,
    name: "Express.js",
    icon: SiExpress,
    color: "",
  },
  {
    id: 8,
    name: "Tailwind",
    icon: RiTailwindCssFill,
    color: "#49ABB4",
  },
  {
    id: 9,
    name: "Vercel",
    icon: SiVercel,
    color: "",
  },
  {
    id: 10,
    name: "Netlify",
    icon: BiLogoNetlify,
    color: "#33B4BA",
  },
  {
    id: 11,
    name: "Github",
    icon: FaGithub,
    color: "",
  },
  {
    id: 12,
    name: "AWS",
    icon: FaAws,
    color: "#FF9A00",
  },
  {
    id: 13,
    name: "Mysql",
    icon: SiMysql,
    color: "#00618A",
  },
  {
    id: 14,
    name: "Java",
    icon: FaJava,
    color: "#EC2025",
  },
];

export const Stack = () => {
  return (
    <section className="py-16 glass stack">
      <div className="max-w-[1200px] mx-auto px-4 text-center ">
        <h2 className="text-5xl text-gray-200 font-bold mb-4">My Stack</h2>

        {/* Grid Layout for mobile with 3 icons per row */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stackItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center flex-col rounded-xl p-4"
            >
              <div className="mb-4 bg-white/10 p-6 rounded-xl">
                {React.createElement(item.icon, {
                  className: "w-24 h-24",
                  style: { color: item.color },
                })}
              </div>
              <div className="text-gray-400 font-semibold">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
