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
} from '@ionic/react';
import { DragDropContext } from 'react-beautiful-dnd';
import './MyRoutines.css';
import ProductCarousel from '../components/ProductCarousel';
import RoutineBuilder from '../components/RoutineBuilder';

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

let exampleData = {
  products: {
    1: { id: '1', name: 'Moisturiser' },
    2: { id: '2', name: 'Toner' },
    3: { id: '3', name: 'Cleanser' },
    4: { id: '4', name: 'Magic Cream' },
  },
  columns: {
    products: {
      id: 'products',
      productIds: [1, 2, 3],
    },
    routine: {
      id: 'routine',
      productIds: [4],
    },
  },
};

const MyRoutines = () => {
  const [data, setData] = React.useState(exampleData);
  const productColumn = data.columns.products;
  const routineColumn = data.columns.routine;
  const productColumnProducts = productColumn.productIds.map((productId) => data.products[productId]);
  const routineColumnProducts = routineColumn.productIds.map((productId) => data.products[productId]);

  function onDragEnd(result) {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const column = exampleData.columns[source.droppableId];
    const newProductIds = Array.from(column.productIds);
    newProductIds.splice(source.index, 1);
    newProductIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      productIds: newProductIds,
    };

    const newExampleData = {
      ...exampleData,
      columns: {
        ...newColumn,
        [newColumn.id]: newColumn,
      },
    };

    setData(newExampleData);
  }

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
          <ProductCarousel
            key={productColumn.id}
            column={productColumn}
            products={productColumnProducts}
            slideOpts={slideOpts}
          />
          <RoutineBuilder key={routineColumn.id} column={routineColumn} products={routineColumnProducts} />
        </DragDropContext>
      </IonContent>
    </IonPage>
  );
};

export default MyRoutines;
