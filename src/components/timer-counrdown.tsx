import { useEffect, useState } from "react";
import cn from "@/utils/classnames";
import { type Framework } from "@/utils/framework";
import { countDoun } from "@/utils/countdown";

const getClass = (num: number, number: number) => {
  return num === number
    ? "opacity-100 transition-none"
    : num < number
    ? "opacity-0 -translate-y-2"
    : "opacity-0 translate-y-2";
};

function TimerRotation({ framework }: { framework: Framework }) {
  const [countdown, setCountdown] = useState(countDoun());
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countDoun());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-2.5 text-center">
      <Unite framework={framework} label="DAYS" value={countdown.days} />
      <Unite framework={framework} label="HOURS" value={countdown.hours} />
      <Unite framework={framework} label="MINUTES" value={countdown.minutes} />
      <Unite framework={framework} label="SECONDS" value={countdown.seconds} />
    </div>
  );
}

const Unite = ({
  label,
  value,
  framework,
}: {
  label: string;
  value: number;
  framework: Framework;
}) => {
  return (
    <div className="flex flex-col">
      <div className="text-white text-3xl font-semibold">
        <NumberRotation number={value} />
      </div>
      <div
        className={cn("text-[8px] font-medium", {
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
        {label}
      </div>
    </div>
  );
};

const NumberRotation = ({ number }: { number: number }) => {
  const numbers = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div className="relative h-10 w-10">
      {numbers.map((num) => (
        <div
          key={num}
          className={cn(
            "w-full h-full absolute transition-all duration-200",
            getClass(num, number)
          )}
        >
          {`${num}`.padStart(2, "0")}
        </div>
      ))}
    </div>
  );
};

export default TimerRotation;
