import Image from "next/image";
import cn from "@/utils/classnames";
import { assets } from "@/utils/asset";
import { frameworks, type Framework } from "@/utils/framework";

function FrameworkRotation({ framework }: { framework: Framework }) {
  return (
    <div className="w-20 h-20 mx-2 mt-2 align-middle inline-flex relative">
      {frameworks.map((name, i) => (
        <Image
          key={name}
          src={assets[name]}
          height="80"
          width="80"
          alt={name}
          style={{ aspectRatio: 1 }}
          className={cn(
            "w-full h-full object-contain object-center absolute top-0 left-0 transition-all duration-300",
            framework === name
              ? "opacity-100 transform-none"
              : i > frameworks.indexOf(framework as Framework)
              ? "opacity-0 -translate-y-2"
              : "opacity-0 translate-y-2"
          )}
        />
      ))}
    </div>
  );
}

export default FrameworkRotation;
