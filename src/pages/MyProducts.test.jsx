import { render, act, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { act } from 'react-dom/test-utils';
import MyProducts from './MyProducts.jsx';

describe('MyProducts Rendering', () => {
  it('form modal closed on initial load', () => {
    const { queryByTestId } = render(<MyProducts user={{ name: 'xx', uid: 'FhyP8YTU9iWuE7vA2SdMJ6FJGcm1' }} />);
    const formModal = queryByTestId('formModal');
    expect(formModal).toBeFalsy();
  });

  it('form modal open when modal.isOpen=true', async () => {
    await act(async () => {
      const { queryByTestId, getByTestId, getByText } = render(
        <MyProducts user={{ name: 'xx', uid: 'FhyP8YTU9iWuE7vA2SdMJ6FJGcm1' }} />
      );
      //   const formModal = queryByTestId('formModal');
      //   const addButton = getByTestId('addButton');
      const addButton = getByText('Add product');

      const formModal = queryByTestId('formModal');

      //   await userEvent.click(addButton);
      await fireEvent.click(addButton);

      expect(formModal).toBeTruthy();
    });
  });
  //   it('form modal open when modal.isOpen=true', async (done) => {
  //     function handleClick() {
  //       done();
  //     }
  //     const { queryByTestId, getByTestId, getByText } = render(
  //       <MyProducts user={{ name: 'xx', uid: 'FhyP8YTU9iWuE7vA2SdMJ6FJGcm1' }} onClick={handleClick} />
  //     );
  //     //   const formModal = queryByTestId('formModal');
  //     //   const addButton = getByTestId('addButton');
  //     const addButton = getByText('Add product');

  //     //   await userEvent.click(addButton);
  //     await fireEvent.click(addButton);
  //     const formModal = queryByTestId('formModal');

  //     expect(formModal).toBeTruthy();
  //   });
});

afterEach(cleanup);
