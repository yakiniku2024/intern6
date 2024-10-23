import React, { useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { NextPiece } from './NextPiece';
import { GameStats } from './GameStats';
import { GameControls } from './GameControls';
import { GameGrid } from './GameGrid';
import { GameOver } from './GameOver';

export const GameBoard: React.FC = () => {
  const { gameState, startGame } = useGame();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') gameState.movePiece(-1);
      if (e.key === 'ArrowRight') gameState.movePiece(1);
      if (e.key === 'ArrowDown') gameState.dropPiece();
      if (e.key === 'ArrowUp') gameState.hardDrop();
      if (e.key === 'a') gameState.rotatePiece(-1);
      if (e.key === 'f') gameState.rotatePiece(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
      <div className="relative">
        <GameGrid />
        {gameState.gameOver && <GameOver onRestart={startGame} />}
      </div>
      
      <div className="flex flex-col gap-6">
        <NextPiece />
        <GameStats />
        <GameControls />
      </div>
    </div>
  );
};