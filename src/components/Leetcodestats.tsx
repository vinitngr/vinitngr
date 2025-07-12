import { useEffect, useState } from 'react';


interface Stats {
    totalSolved: number;
    totalQuestions: number;
    easySolved: number;
    totalEasy: number;
    mediumSolved: number;
    totalMedium: number;
    hardSolved: number;
    totalHard: number;
    acceptanceRate: number;
    ranking: number;
    contributionPoints: number;
    reputation: number;
}
interface LeetCodeStatsProps {
  username: string;
}

export function LeetCodeStats({ username }: LeetCodeStatsProps) {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') setStats(data);
      });
  }, []);

  if (!stats) return <div>Loading...</div>;

  return (
    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
      {/* Left: Problems Solved as Circle */}
      <div className="flex-1 bg-[#151515] rounded-2xl p-8 shadow-lg border flex flex-col items-center">
        <h3 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <svg className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 21 12 17.27 7.82 21 9 12.91l-5-3.64 5.91-.91z"/></svg>
        Problems Solved
        </h3>
        {/* Circle Progress */}
        <div className="relative flex items-center justify-center mb-6">
        <svg width="140" height="140" className="block">
          <circle
            cx="70"
            cy="70"
            r="60"
            stroke="#27272a"
            strokeWidth="14"
            fill="none"
          />
          <circle
            cx="70"
            cy="70"
            r="60"
            stroke="#22d3ee"
            strokeWidth="14"
            fill="none"
            strokeDasharray={2 * Math.PI * 60}
            strokeDashoffset={
            2 * Math.PI * 60 * (1 - stats.totalSolved / stats.totalQuestions)
            }
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 1s' }}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-3xl font-mono text-green-400">{stats.totalSolved}</span>
          <span className="text-white/50 text-lg">/ {stats.totalQuestions}</span>
        </div>
        </div>
        <div className="space-y-2 text-lg w-full">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-green-400 inline-block"></span>
          <span>Easy:</span>
          <span className="font-mono text-green-300">{stats.easySolved}</span>
          <span className="text-white/50">/ {stats.totalEasy}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-yellow-400 inline-block"></span>
          <span>Medium:</span>
          <span className="font-mono text-yellow-300">{stats.mediumSolved}</span>
          <span className="text-white/50">/ {stats.totalMedium}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-pink-400 inline-block"></span>
          <span>Hard:</span>
          <span className="font-mono text-pink-300">{stats.hardSolved}</span>
          <span className="text-white/50">/ {stats.totalHard}</span>
        </div>
        </div>
      </div>
    </div>
  );
}
