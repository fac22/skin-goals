import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonToggle,
  IonRadio,
  IonCheckbox,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonContent,
} from '@ionic/react';
import { Droppable } from 'react-beautiful-dnd';
import Product from './Product';
import ProductListItem from './ProductListItem';

const RoutineBuilder = ({ products, column }) => {
  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <IonList ref={provided.innerRef} {...provided.droppableProps}>
          {products.map((product, index) => (
            <ProductListItem key={product.id} column={column} product={product} index={index}>
              <h1>{product.name}</h1>
            </ProductListItem>
          ))}
          {provided.placeholder}
        </IonList>
      )}
    </Droppable>
  );
};

export default RoutineBuilder;
