import React, { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { IonButton, IonInput } from '@ionic/react';
import { push, child, ref, update } from '@firebase/database';
import { db } from '../firebase';
import './RoutineBuilder.css';

// import ProductCarousel from '../components/ProductCarousel';
import RoutineList from './RoutineList';

// const slideOpts = {
//   initialSlide: 1,
//   speed: 400,
// };

let exampleData = {
  products: {
    1: { id: '1', name: 'Moisturiser' },
    2: { id: '2', name: 'Toner' },
    3: { id: '3', name: 'Cleanser' },
    4: { id: '4', name: 'Magic Cream' },
    5: { id: '5', name: 'Snake Oil' },
  },
  columns: {
    products: {
      id: 'products',
      productIds: ['1', '2', '3'],
    },
    routine: {
      id: 'routine',
      productIds: ['4', '5'],
    },
  },
};

const RoutineBuilder = ({ products, setModal, uid }) => {
  const [newRoutineName, setNewRoutineName] = useState('');
  const [data, setData] = useState(exampleData);
  useEffect(() => {
    const productsObj = { ...products };
    const columnsObj = {
      products: {
        id: 'products',
        productIds: [],
      },
      routine: {
        id: 'routine',
        productIds: [],
      },
    };
    Object.keys(products).forEach((id) => columnsObj.products.productIds.push(id));
    const initialData = { products: { ...productsObj }, columns: { ...columnsObj } };
    setData(initialData);
  }, []);

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

    const start = data.columns[source.droppableId];
    const end = data.columns[destination.droppableId];

    if (start === end) {
      const newProductIds = Array.from(start.productIds);
      newProductIds.splice(source.index, 1);
      newProductIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        productIds: newProductIds,
      };

      const newExampleData = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };
      setData(newExampleData);
      return;
    }

    const startProductIds = Array.from(start.productIds);
    startProductIds.splice(source.index, 1);
    const newStart = {
      ...start,
      productIds: startProductIds,
    };

    const endProductIds = Array.from(end.productIds);
    endProductIds.splice(destination.index, 0, draggableId);
    const newEnd = {
      ...end,
      productIds: endProductIds,
    };

    const newExampleData = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newEnd.id]: newEnd,
      },
    };
    setData(newExampleData);
  }

  function writeRoutine(newRoutine) {
    const routineData = { productIds: newRoutine, name: newRoutineName };
    const newRoutineKey = push(child(ref(db), 'routines')).key;
    routineData.id = newRoutineKey;

    const updates = {};
    updates[`/users/${uid}/routines/${newRoutineKey}`] = routineData;

    return update(ref(db), updates);
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <h2>Products</h2>
        {/* <ProductCarousel
            key={productColumn.id}
            column={productColumn}
            products={productColumnProducts}
            slideOpts={slideOpts}
          /> */}
        <RoutineList key={productColumn.id} column={productColumn} products={productColumnProducts} />
        <h2>Routine</h2>
        <IonInput
          color="primary"
          placeholder="Enter routine name"
          onIonChange={(e) => setNewRoutineName(e.detail.value)}
        ></IonInput>
        <RoutineList key={routineColumn.id} column={routineColumn} products={routineColumnProducts} />
      </DragDropContext>
      <IonButton
        onClick={async () => {
          const newRoutine = data.columns.routine.productIds;
          if (newRoutine.length) {
            await writeRoutine(newRoutine);
            setModal({ isOpen: false });
          } else {
            setModal({ isOpen: false });
          }
        }}
      >
        Save Routine
      </IonButton>
    </>
  );
};

export default RoutineBuilder;
