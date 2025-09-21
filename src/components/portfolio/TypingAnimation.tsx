import { useState, useEffect } from "react";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

const TypingAnimation = ({ 
  text, 
  speed = 50, 
  delay = 1000, 
  className = "" 
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && <span className="animate-pulse text-neon-cyan">|</span>}
    </span>
  );
};

export default TypingAnimation;