import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/react';

const HomeFirstCard = ({ user }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Hello {user.email}</IonCardSubtitle>
        <IonCardTitle>
          Great skin is not simply a matter of DNA — your daily habits, in fact, have a big impact on what you see in
          the mirror.
        </IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonList>
          <IonItem>
            <IonLabel>
              <h1>Start today</h1>
            </IonLabel>
          </IonItem>
          <IonItem button>1: Add your first product</IonItem>
          <IonItem button>2: Create your first routine</IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default HomeFirstCard;
