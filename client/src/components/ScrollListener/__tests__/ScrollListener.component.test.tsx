import { fireEvent, render, waitFor, waitForDomChange } from '@testing-library/react';
import ScrollListener from '../ScrollListener';
import axios from "axios";
import { ImportMock } from 'ts-mock-imports';
import React from 'react';
import { ScrollProps } from '../ScrollListener.types';
import ScrollController from '../ScrollListener.controller';

describe("ScrollListener Component Test", () => {

  let props: ScrollProps;
  beforeEach(()=>{
    props = {
      isLoading: false,
      loadOnMount: false,
      loadingComponent: <h1>Loading Component</h1>,
      loadSuccess: false,
      onBottomHit: ()=>{}
    }
  })
  const renderComponent = () => render(<ScrollListener {...props}> 
    <div style={{height: '500vh'}} />
  </ScrollListener>);

  it("Should add event listener on load", async () => {
   
    let mockEvent = jest.spyOn(document, 'addEventListener')
    
    renderComponent();

    expect(mockEvent).toHaveBeenCalled();

    mockEvent.mockRestore();
  });

  it("Should remove event listener at unmount", async () => {
   
    let mockEvent = jest.spyOn(document, 'removeEventListener')
    
    const { unmount } = renderComponent();

    unmount();
    expect(mockEvent).toHaveBeenCalled();

    mockEvent.mockRestore();
  });

  it("Should not trigger onBottomHit on default load", async () => {

    let mockFunction = jest.spyOn(props, 'onBottomHit')
    
    renderComponent();
  
    expect(props.onBottomHit).not.toHaveBeenCalled();
  
    mockFunction.mockRestore();
  });

  it("Should trigger onBottomHit on load if loadOnMount enabled", async () => {
    props.loadOnMount = true;
    let mockFunction = jest.spyOn(props, 'onBottomHit')
    
    renderComponent();
  
    expect(props.onBottomHit).toHaveBeenCalled();
  
    mockFunction.mockRestore();
  });

  // Needs to be changed since we are attempting to trigger a document scroll event

  // it("Should trigger onBottomHit on load if loadOnMount enabled", async () => {

  //   let mockFunction = jest.spyOn(props, 'onBottomHit')
    
  //   const {rerender} = renderComponent();
  
  //   expect(props.onBottomHit).not.toHaveBeenCalled();

  //   fireEvent.scroll(window, {target:{ scrollY: 4000}})
    
  //   await waitFor(()=>{
  //     expect(props.onBottomHit).toHaveBeenCalled();
  //   })
    

  //   mockFunction.mockRestore();

  // });

});

const order = {
  data:{
    orders:[
      {
        purchasedAt: "1234",
        currency: "USD",
        totalPrice: 123,
        products: [
          {
            _id: "14",
            name: "Name",
            price: 896,
            quantity: 58
          },
        ],
        orderId: 1234,
        createdAt: "time",
        updatedAt: "another time"
      }
    ],
    totalCount: 2
  }
  
}