import { useCallback, useEffect, useRef, useState } from "react";
import { AboutPrevProps } from "../utils/type";

export default function SkillMeter({
  animatedItems,
  handleMouseEnter,
  handleMouseLeave,
}: AboutPrevProps) {

  const gameEndedRef = useRef(false);

  const [token, setToken] = useState<string | null>(null);
  const [sig, setSig] = useState<string | null>(null);
  const [leaderboard, setLeaderboard] = useState<{ name: string; score: number }[]>([]);

  const SNAKE_SIZE = 10;
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [snake, setSnake] = useState([{ x: 2, y: 2 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [dir, setDir] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);

  const [gridCols, setGridCols] = useState(0);
  const [gridRows, setGridRows] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const updateGrid = useCallback(() => {
    if (containerRef.current) {
      const { clientWidth, clientHeight } = containerRef.current;
      setGridCols(Math.floor(clientWidth / SNAKE_SIZE));
      setGridRows(Math.floor(clientHeight / SNAKE_SIZE));
    }
  }, []);

  // --- Leaderboard fetch ---
  useEffect(() => {
    fetch('https://snake.vinitnagar56.workers.dev/api/scores').then(r => r.json()).then(setLeaderboard);
  }, []);

  useEffect(() => {
    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, [updateGrid]);

  const newFood = useCallback(() => ({
    x: Math.floor(Math.random() * gridCols),
    y: Math.floor(Math.random() * gridRows),
  }), [gridCols, gridRows]);

  const endGame = useCallback(async () => {
    if (gameEndedRef.current) return; // 🧠 prevent double call
    gameEndedRef.current = true;

    setRunning(false);
    setDir({ x: 0, y: 0 });

    if (token && sig && score > 0) {
      const name = prompt("Enter name for leaderboard (optional):") || "anon";
      await fetch('https://snake.vinitnagar56.workers.dev/api/score', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ token, sig, score, name }),
      });
      const updated = await fetch('https://snake.vinitnagar56.workers.dev/api/scores').then(r => r.json());
      setLeaderboard(updated);
    }

    setScore(0);
    setTimer(10);
  }, [token, sig, score, setLeaderboard]);


  // --- Key Controls ---
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

  // --- Game Loop ---
  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setSnake(prev => {
        const head = { x: prev[0].x + dir.x, y: prev[0].y + dir.y };
        const newSnake = [head, ...prev];

        // Collision check
        if (
          head.x < 0 || head.x >= gridCols ||
          head.y < 0 || head.y >= gridRows ||
          prev.some(s => s.x === head.x && s.y === head.y)
        ) {
          endGame();
          return [{ x: 2, y: 2 }];
        }

        // Eat food
        if (head.x === food.x && head.y === food.y) {
          setFood(newFood());
          setScore(s => s + 1);
          setTimer(10);
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 100);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [dir, running, food, gridCols, gridRows, newFood, endGame]);

  // --- Timer ---
  useEffect(() => {
    if (!running) return;
    timerRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          endGame();
          return 10;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [running, endGame]);

  // --- Start Game ---
  const startGame = async () => {
    gameEndedRef.current = false; // reset guard
    const res = await fetch('https://snake.vinitnagar56.workers.dev/api/start', { method: 'POST' });
    const data = await res.json();
    setToken(data.token);
    setSig(data.sig);

    setSnake([{ x: 2, y: 2 }]);
    setFood(newFood());
    setDir({ x: 1, y: 0 });
    setScore(0);
    setTimer(10);
    setRunning(true);
  };

  return (
    <div
      ref={containerRef}
      id="card3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`grid-item order-3 col-span-3 sm:col-span-1 bg-[#1a1a22] relative overflow-hidden 
        shadow-md border border-[#2d2d3a]/80 h-full transition-all duration-300 ${animatedItems.includes("card3")
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
          <div className="mt-2 text-xs  text-gray-300/50">
            <p>🏆 Top Scores</p>
            {leaderboard.map((s, i) => (
              <div key={i}>{i + 1}. {s.name}: {s.score}</div>
            ))}
          </div>
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
