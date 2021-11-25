import { render } from '@testing-library/react';
import AddProductForm from './AddProductForm';

describe('Add Product Form Component', () => {
  it('rendered add product form', () => {
    const { getByTestId } = render(<AddProductForm productsArray={[]} />);
    const inputName = getByTestId('inputName');
    expect(inputName).toBeTruthy();
  });
});
