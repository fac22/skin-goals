import { IonSlides, IonSlide } from '@ionic/react';
import { Droppable } from 'react-beautiful-dnd';
import Product from './Product';

const ProductCarousel = ({ slideOpts, products, column }) => {
  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <IonSlides pager={true} options={slideOpts} ref={provided.innerRef} {...provided.droppableProps}>
          {products.map((product, index) => (
            <Product key={product.id} column={column} product={product} index={index}>
              <h1>{product.name}</h1>
            </Product>
          ))}
          {provided.placeholder}
        </IonSlides>
      )}
    </Droppable>
  );
};

export default ProductCarousel;
