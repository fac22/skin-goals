import { IonList } from '@ionic/react';
import { Droppable } from 'react-beautiful-dnd';
// import Product from './ProductSlide';
import ProductListItem from './ProductListItem';
import './RoutineList.css';

const RoutineList = ({ products, column }) => {
  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <IonList className='routine-list' ref={provided.innerRef} {...provided.droppableProps}>
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

export default RoutineList;
