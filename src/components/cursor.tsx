import { assets } from "@/utils/asset";
import Image from "next/image";
import React, { RefObject, useEffect, useState } from "react";

const Cursor = ({ buttonRef }: { buttonRef: RefObject<HTMLButtonElement> }) => {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });
  useEffect(() => {
    async function animateCursor() {
      if (!buttonRef?.current) return;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const x = buttonRect.x + buttonRect.width / 2;
      const y = buttonRect.y + buttonRect.height / 2;

      setPosition({ x, y });
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newY = y + 150;
      setPosition({ x, y: newY });
      buttonRef.current.style.transition = "transform 700ms ease-in-out";
      buttonRef.current.style.transform = "translateY(150px)";

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setPosition({ x: window.innerWidth - 100, y: -100 });
    }
    animateCursor();
  }, [buttonRef]);

  return (
    <Image
      src={assets.cursor}
      height={80}
      width={80}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
      className="absolute transition-all duration-700 ease-in-out z-50"
      alt="cursor"
    />
  );
};

export default Cursor;
