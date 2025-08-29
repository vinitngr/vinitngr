import React, { HTMLAttributes } from "react";

interface UnderlineHighlightProps extends HTMLAttributes<HTMLSpanElement> {
  children: string; // text to animate
  className?: string;
  underlineClassName?: string;
  animationDelay?: number; // ms per letter
  animationVariant?: "slideIn" | "fadeIn" | "bounceIn" | "scaleUp" | "rotateIn" | "none"; // variant
}

const UnderlineHighlight: React.FC<UnderlineHighlightProps> = ({
  children,
  className,
  underlineClassName,
  animationDelay = 50,
  animationVariant = "slideIn",
  ...rest
}) => {
  // map variant to class
  const variantClassMap: Record<string, string> = {
    slideIn: "animate-slideIn",
    fadeIn: "animate-fadeIn",
    bounceIn: "animate-bounceIn",
    scaleUp: "animate-scaleUp",
    rotateIn: "animate-rotateIn",
    none:""
  };

  return (
    <span className={`relative inline-block ${className || ""}`} {...rest}>
      {children.split("").map((char, idx) => (
        <span
          key={idx}
          className={`inline-block opacity-0 ${variantClassMap[animationVariant]}`}
          style={{
            animationDelay: `${idx * animationDelay}ms`,
            whiteSpace: char === " " ? "pre" : undefined, // preserve spaces
          }}
        >
          {char}
        </span>
      ))}
      <span
        className={`absolute left-0 bottom-0 w-full h-[1px] border-b border-dashed ${
          underlineClassName || "border-current"
        }`}
      ></span>

      <style>
        {`
          @keyframes slideIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideIn { animation: slideIn 0.3s forwards; }

          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-fadeIn { animation: fadeIn 0.3s forwards; }

          @keyframes bounceIn {
            0% { opacity: 0; transform: translateY(20px); }
            50% { transform: translateY(-5px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-bounceIn { animation: bounceIn 0.5s forwards; }

          @keyframes scaleUp {
            0% { opacity: 0; transform: scale(0); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-scaleUp { animation: scaleUp 0.3s forwards; }

          @keyframes rotateIn {
            0% { opacity: 0; transform: rotate(-15deg) translateY(10px); }
            100% { opacity: 1; transform: rotate(0deg) translateY(0); }
          }
          .animate-rotateIn { animation: rotateIn 0.4s forwards; }
        `}
      </style>
    </span>
  );
};

export default UnderlineHighlight;
