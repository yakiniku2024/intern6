import React from 'react';
import { XCircle } from 'lucide-react';

interface GameOverProps {
  onRestart: () => void;
}

export const GameOver: React.FC<GameOverProps> = ({ onRestart }) => {
  return (
    <div className="absolute inset-0 bg-black/80 flex items-center justify-center backdrop-blur-sm">
      <div className="text-center p-8 rounded-lg">
        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Game Over</h2>
        <button
          onClick={onRestart}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};