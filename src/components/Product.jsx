import React from 'react';
import { IonSlide, IonIcon } from '@ionic/react';
import { Draggable } from 'react-beautiful-dnd';
import { reorderThreeOutline } from 'ionicons/icons';

const Product = ({ column, product, index }) => {
  return (
    <Draggable draggableId={product.id} index={index}>
      {(provided) => (
        <IonSlide {...provided.draggableProps} ref={provided.innerRef}>
          {product.name}
          <IonIcon icon={reorderThreeOutline} {...provided.dragHandleProps} />
        </IonSlide>
      )}
    </Draggable>
  );
};

export default Product;
