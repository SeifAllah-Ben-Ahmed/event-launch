"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/utils/asset";
import { frameworks, type Framework } from "@/utils/framework";
import cn from "@/utils/classnames";
import FrameworkRotation from "@/components/framework-rotation";
import TimerRotation from "@/components/timer-counrdown";

export default function Home() {
  const [framework, setFramework] = useState<Framework>(frameworks[0]);
  const [background, setBackground] = useState<boolean>(false);

  useEffect(() => {
    let index = 0;
    const rotate = () => {
      setFramework(frameworks[index]);
      index = (index + 1) % frameworks.length;
    };
    const intervaleId = setInterval(rotate, 2000);

    return () => clearInterval(intervaleId);
  }, []);

  useEffect(() => {
    setBackground(true);
  }, []);
  return (
    <main>
      <div
        className={cn(
          "fixed inset-0 transition-colors delay-100 duration-700 opacity-25",
          {
            "bg-purple-300": framework === "qwik",
            "bg-sky-300": framework === "safari",
            "bg-yellow-300": framework === "chrome",
            "bg-teal-300": framework === "tailwind",
            "bg-blue-300": framework === "react",
            "bg-green-300": framework === "vue",
            "bg-orange-400": framework === "svelte",
            "bg-red-300": framework === "mobile",
            "bg-neutral-300": framework === "desktop",
          }
        )}
      />
      <Image
        src={assets.gradient}
        className="fixed inset-0 w-screen h-screen object-cover"
        height={1200}
        width={1200}
        role="presentation"
        alt="background gradient"
      />
      <div className="fixed inset-0 opacity-30 bg-square bg-30" />
      <div
        className={cn(
          "bg-black fixed inset-0 transition-opacity duration-[1500ms]",
          !background ? "opacity-100" : "opacity-0"
        )}
      />
      <div className="max-w-7xl mt-20 mx-auto">
        <div className="flex flex-col items-center relative z-10  ">
          <h1 className={`text-5xl max-w-3xl text-center leading-snug mb-12`}>
            <Image
              src={assets.figma}
              className="inline-block mr-8 -mt-2"
              height="50"
              width="50"
              role="presentation"
              alt="Figma logo"
            />
            to <FrameworkRotation framework={framework} /> will{" "}
            <span
              className={cn("transition-colors duration-200", {
                "text-purple-300": framework === "qwik",
                "text-sky-300": framework === "safari",
                "text-yellow-300": framework === "chrome",
                "text-teal-300": framework === "tailwind",
                "text-blue-300": framework === "react",
                "text-green-300": framework === "vue",
                "text-orange-400": framework === "svelte",
                "text-red-300": framework === "mobile",
                "text-neutral-300": framework === "desktop",
              })}
            >
              never
            </span>{" "}
            be the same again
          </h1>

          <p className="mb-8">
            <span className="text-gray-300">
              Join us for an AI launch event by
            </span>
            <Image
              src={assets.builder}
              height={20}
              width={100}
              alt="builder.io logo"
              className="inline-block mx-1"
            />
            {" + "}
            <Image
              src={assets.figmatwo}
              height={20}
              width={55}
              alt="figma logo"
              className="inline-block mx-1"
            />
          </p>
          <div className="mb-8">
            <button
              className={cn(
                "text-black px-6 py-3 rounded-md text-sm font-semibold transition-colors duration-200",
                {
                  "bg-purple-300": framework === "qwik",
                  "bg-sky-300": framework === "safari",
                  "bg-yellow-300": framework === "chrome",
                  "bg-teal-300": framework === "tailwind",
                  "bg-blue-300": framework === "react",
                  "bg-green-300": framework === "vue",
                  "bg-orange-400": framework === "svelte",
                  "bg-red-300": framework === "mobile",
                  "bg-neutral-300": framework === "desktop",
                }
              )}
            >
              Claim Ticket
            </button>
          </div>
          <TimerRotation framework={framework} />
        </div>
      </div>
    </main>
  );
}
