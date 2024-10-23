import React from 'react';
import { GameBoard } from './components/GameBoard';
import { GameProvider } from './context/GameContext';
import { Gameboy } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="flex items-center justify-center gap-3 mb-8">
          <Gameboy className="w-8 h-8" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            React Tetris
          </h1>
        </header>
        
        <GameProvider>
          <GameBoard />
        </GameProvider>
      </div>
    </div>
  );
}

export default App;