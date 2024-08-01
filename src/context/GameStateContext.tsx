import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { fetchCards } from '../services/api';

interface Card {
  id: number;
  name: string;
  image: string;
}

interface GameStateContextProps {
  cards: Card[];
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
  loading: boolean;
}

interface GameStateProviderProps {
    children: ReactNode;
  }

const GameStateContext = createContext<GameStateContextProps | undefined>(undefined);

export const GameStateProvider: React.FC<GameStateProviderProps> = ({ children }) => {
    const [cards, setCards] = useState<Card[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadCards = async () => {
      try {
        const fetchedCards = await fetchCards();
        setCards(fetchedCards);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load cards', error);
      }
    };
    loadCards();
  }, []);

  return (
    <GameStateContext.Provider value={{ cards, setCards, loading }}>
      {children}
    </GameStateContext.Provider>
  );
};

export const useGameState = () => {
  const context = useContext(GameStateContext);
  if (context === undefined) {
    throw new Error('useGameState must be used within a GameStateProvider');
  }
  return context;
};
