import { IonSlides } from '@ionic/react';
import { Droppable } from 'react-beautiful-dnd';
import ProductSlide from './ProductSlide';

const ProductCarousel = ({ slideOpts, products, column }) => {
  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <IonSlides pager={true} options={slideOpts} ref={provided.innerRef} {...provided.droppableProps}>
          {products.map((product, index) => (
            <ProductSlide key={product.id} column={column} product={product} index={index}>
              <h1>{product.name}</h1>
            </ProductSlide>
          ))}
          {provided.placeholder}
        </IonSlides>
      )}
    </Droppable>
  );
};

export default ProductCarousel;
