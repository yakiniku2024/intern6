import React from 'react';
import { useGame } from '../context/GameContext';
import { Play, Pause, RotateCcw } from 'lucide-react';

export const GameControls: React.FC = () => {
  const { gameState, startGame, pauseGame } = useGame();

  return (
    <div className="flex flex-col gap-3">
      {!gameState.started ? (
        <button
          onClick={startGame}
          className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          <Play className="w-5 h-5" />
          Start Game
        </button>
      ) : (
        <button
          onClick={pauseGame}
          className="flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          <Pause className="w-5 h-5" />
          {gameState.paused ? 'Resume' : 'Pause'}
        </button>
      )}
      
      <button
        onClick={startGame}
        className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
      >
        <RotateCcw className="w-5 h-5" />
        Restart
      </button>
    </div>
  );
};