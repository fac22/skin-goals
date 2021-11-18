import React from 'react';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonReorder,
  IonReorderGroup,
  IonSlides,
  IonSlide,
} from '@ionic/react';
import { DragDropContext } from 'react-beautiful-dnd';
import './MyRoutines.css';
import ProductCarousel from '../components/ProductCarousel';

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

const items = ['Cleanser', 'Toner', 'Moisturiser'];

const exampleData = {
  products: {
    1: { id: '1', name: 'Moisturiser' },
    2: { id: '2', name: 'Toner' },
    3: { id: '3', name: 'Cleanser' },
  },
  columns: {
    products: {
      id: 'products',
      productIds: [1, 2, 3],
    },
  },
};

console.log(items);

function doReorder(event) {
  console.log(event.detail.from, event.detail.to);
  const movingItem = items.splice(event.detail.from, 1);
  items.splice(event.detail.to, 0, movingItem[0]);
  event.detail.complete();
  console.log(items);
}

function onDragEnd(result) {
  console.log('Dragged!');
}

const MyRoutines = () => {
  const [data, setData] = React.useState(exampleData);
  const productColumn = data.columns.products;
  const products = productColumn.productIds.map((productId) => data.products[productId]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Routines</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Routines</IonTitle>
          </IonToolbar>
        </IonHeader>

        <DragDropContext onDragEnd={onDragEnd}>
          <ProductCarousel key={productColumn.id} column={productColumn} products={products} slideOpts={slideOpts} />
        </DragDropContext>

        <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
          <IonItem>
            <IonLabel>Cleanser</IonLabel>
            <IonReorder slot="end" />
          </IonItem>
          <IonItem>
            <IonLabel>Toner</IonLabel>
            <IonReorder slot="end" />
          </IonItem>
          <IonItem>
            <IonLabel>Moisturiser</IonLabel>
            <IonReorder slot="end" />
          </IonItem>
        </IonReorderGroup>
      </IonContent>
    </IonPage>
  );
};

export default MyRoutines;
