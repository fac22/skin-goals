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

const HomeRoutineCard = ({ user, routines, products }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Hello {user.name}</IonCardSubtitle>
        <IonCardTitle>Your last routine:</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {[routines[routines.length - 1]].map((routine) => (
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
