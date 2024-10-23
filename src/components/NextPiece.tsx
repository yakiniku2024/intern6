import React from 'react';
import { useGame } from '../context/GameContext';
import { COLORS } from '../constants';

export const NextPiece: React.FC = () => {
  const { gameState } = useGame();

  return (
    <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
      <h2 className="text-lg font-semibold mb-2">Next Piece</h2>
      <div className="grid grid-cols-4 gap-px bg-gray-700 w-min">
        {gameState.nextPiece.shape.map((row, y) =>
          row.map((cell, x) => (
            <div
              key={`${x}-${y}`}
              className="w-6 h-6"
              style={{
                backgroundColor: cell ? COLORS[gameState.nextPiece.type] : '#1a1a1a'
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};