import React from 'react';
import { useGame } from '../context/GameContext';
import { COLORS } from '../constants';

export const GameGrid: React.FC = () => {
  const { gameState } = useGame();

  return (
    <div className="bg-gray-900 p-2 rounded-lg shadow-xl border border-gray-700">
      <div className="grid grid-cols-10 gap-px bg-gray-700">
        {gameState.board.map((row, y) =>
          row.map((cell, x) => (
            <div
              key={`${x}-${y}`}
              className="w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-150"
              style={{
                backgroundColor: cell ? COLORS[cell - 1] : '#1a1a1a',
                boxShadow: cell ? 'inset 0 0 10px rgba(0,0,0,0.3)' : 'none'
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};