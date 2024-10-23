import React from 'react';
import { useGame } from '../context/GameContext';
import { Trophy, Target, ArrowUp } from 'lucide-react';

export const GameStats: React.FC = () => {
  const { gameState } = useGame();

  return (
    <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <div>
            <div className="text-sm text-gray-400">Score</div>
            <div className="font-bold">{gameState.score}</div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-blue-500" />
          <div>
            <div className="text-sm text-gray-400">Lines</div>
            <div className="font-bold">{gameState.lines}</div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <ArrowUp className="w-5 h-5 text-green-500" />
          <div>
            <div className="text-sm text-gray-400">Level</div>
            <div className="font-bold">{gameState.level}</div>
          </div>
        </div>
      </div>
    </div>
  );
};