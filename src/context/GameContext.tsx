import React, { createContext, useContext, useState, useCallback } from 'react';
import { BOARD_HEIGHT, BOARD_WIDTH, SHAPES, INITIAL_STATE } from '../constants';

interface GameContextType {
  gameState: typeof INITIAL_STATE;
  startGame: () => void;
  pauseGame: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState(INITIAL_STATE);

  const startGame = useCallback(() => {
    setGameState(prev => ({
      ...INITIAL_STATE,
      started: true,
      paused: false
    }));
  }, []);

  const pauseGame = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      paused: !prev.paused
    }));
  }, []);

  return (
    <GameContext.Provider value={{ gameState, startGame, pauseGame }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};