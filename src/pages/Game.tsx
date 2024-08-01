import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonSpinner } from '@ionic/react';
import { useGameState } from '../context/GameStateContext';

const Game: React.FC = () => {
  const { cards, loading } = useGameState();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Memory Game</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <IonSpinner />
          </div>
        ) : (
          <IonGrid>
            <IonRow>
              {cards.map((card) => (
                <IonCol size="3" key={card.id}>
                  <img src={card.image} alt={card.name} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Game;
