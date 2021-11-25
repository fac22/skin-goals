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
import React from 'react';

const HomeRoutineCard = ({ user, routines, products }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Hello {user.email}</IonCardSubtitle>
        <IonCardTitle>Your last routine:</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {routines.map((routine) => (
          <IonList>
            <IonItem>
              <IonLabel>
                <h1>{routine.name}</h1>
              </IonLabel>
            </IonItem>
            {routine.productIds.map((product) => (
              <IonItem>
                <IonLabel>{products[product]?.name}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        ))}
      </IonCardContent>
    </IonCard>
  );
};

export default HomeRoutineCard;
