import { useCallback, useEffect, useRef, useState } from "react";
import { AboutPrevProps } from "../utils/type";

export default function SkillMeter({
  animatedItems,
  handleMouseEnter,
  handleMouseLeave,
}: AboutPrevProps) {
  const SNAKE_SIZE = 10;

  const [snake, setSnake] = useState([{ x: 2, y: 2 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [dir, setDir] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10); // countdown in seconds

  const gridSize = Math.floor(100 / (SNAKE_SIZE / 2));
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const newFood = useCallback(() => ({
    x: Math.floor(Math.random() * gridSize),
    y: Math.floor(Math.random() * gridSize),
  }), [gridSize]);

  // Arrow keys
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!running) return;
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key))
        e.preventDefault();

      if (e.key === "ArrowUp" && dir.y === 0) setDir({ x: 0, y: -1 });
      if (e.key === "ArrowDown" && dir.y === 0) setDir({ x: 0, y: 1 });
      if (e.key === "ArrowLeft" && dir.x === 0) setDir({ x: -1, y: 0 });
      if (e.key === "ArrowRight" && dir.x === 0) setDir({ x: 1, y: 0 });
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [dir, running]);

  // Game loop
  useEffect(() => {
    if (!running) return;

    intervalRef.current = setInterval(() => {
      setSnake(prev => {
        const head = { x: prev[0].x + dir.x, y: prev[0].y + dir.y };
        const newSnake = [head, ...prev];

        // Collision
        if (
          head.x < 0 ||
          head.x >= gridSize ||
          head.y < 0 ||
          head.y >= gridSize ||
          prev.some(s => s.x === head.x && s.y === head.y)
        ) {
          setRunning(false);
          setDir({ x: 0, y: 0 });
          setScore(0);
          setTimer(10);
          return [{ x: 2, y: 2 }];
        }

        // Eat food
        if (head.x === food.x && head.y === food.y) {
          setFood(newFood());
          setScore(s => s + 1);
          setTimer(10); // reset countdown
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 60);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [dir, running, food, gridSize, newFood]);

  useEffect(() => {
     if (!running) return;
    timerRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          setRunning(false);
          setDir({ x: 0, y: 0 });
          setScore(0);
          return 10;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  } , [running])

  const startGame = () => {
    setSnake([{ x: 2, y: 2 }]);
    setFood(newFood());
    setDir({ x: 1, y: 0 });
    setScore(0);
    setTimer(10);
    setRunning(true);
  };

  return (
    <div
      id="card3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`grid-item order-3 col-span-3 sm:col-span-1 bg-[#1a1a22] relative overflow-hidden 
        shadow-md border border-[#2d2d3a]/80 h-full transition-all duration-300 ${
          animatedItems.includes("card3")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2"
        }`}
    >
      {!running ? (
        <div className="absolute inset-0 h-full flex flex-col justify-center items-center gap-3">
          <h2 className="text-md text-[#e0e0e0] font-semibold tracking-tight">
            ;) Retro Snake
          </h2>
          <button
            onClick={startGame}
            className="px-3 py-1 text-xs rounded bg-[#191921] text-white border border-white/10 cursor-pointer font-bold shadow-md hover:scale-105 transition-all"
          >
            {score > 0 ? "Retry" : "Start"}
          </button>
          <p className="text-[7px]">Have fun</p>
          <p className="text-[7px]">Crafter by GPT 🤖</p>
          <p className="text-[7px]">Had no idea what to Embed</p>
        </div>
      ) : (
        <>
          <span className="absolute top-1 left-2 text-[10px] text-white font-mono">
            Score: {score} | {timer}s
          </span>
          <div className="absolute inset-0">
            {snake.map((s, i) => (
              <div
                key={i}
                className="absolute bg-green-400"
                style={{
                  left: s.x * SNAKE_SIZE,
                  top: s.y * SNAKE_SIZE,
                  width: SNAKE_SIZE,
                  height: SNAKE_SIZE,
                }}
              />
            ))}
            <div
              className="absolute bg-pink-500"
              style={{
                left: food.x * SNAKE_SIZE,
                top: food.y * SNAKE_SIZE,
                width: SNAKE_SIZE,
                height: SNAKE_SIZE,
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}
