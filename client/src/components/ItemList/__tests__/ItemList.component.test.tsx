import { render } from '@testing-library/react';
import ItemList from '../ItemList';
import axios from "axios";
import { ImportMock } from 'ts-mock-imports';
import React from 'react';

describe("ItemList Component Test", () => {

  const renderComponent = () => render(<ItemList />);

  it("Should render default component correctly", async () => {

    let mockAxios = ImportMock.mockFunction(axios,'get',Promise.resolve(order));

    const { findByTestId } = renderComponent();

    const component = await findByTestId("item-list");

    expect(component).toHaveTextContent("Name");
    expect(component).toHaveTextContent("58");

    mockAxios.restore();
  });

  it("Should render error component correctly", async () => {

    let mockAxios = ImportMock.mockFunction(axios,'get',Promise.reject("fail"));

    const { findByTestId } = renderComponent();

    const component = await findByTestId("item-list");

    expect(component).toHaveTextContent("No Trending Orders Found");
    expect(component).toHaveTextContent("Retry");

    mockAxios.restore();
  });

  it("Should reset page to 1 if max page reached", async () => {

    order.data.totalCount = 1;

    let mockAxios = ImportMock.mockFunction(axios,'get',Promise.resolve(order));

    const { findByTestId } = renderComponent();

    const component = await findByTestId("item-list");

    expect(component).toHaveTextContent("Name");
    expect(component).toHaveTextContent("58");

    mockAxios.restore();
  });

  it("Clicking retry button should call API for data", async () => {

    let mockAxios = ImportMock.mockFunction(axios,'get',Promise.resolve(order));
    let mockUseEffect = ImportMock.mockFunction(React, 'useEffect', true)
    
    const { findByText, findByTestId } = renderComponent();

    const component = await findByText("Retry");

    expect(component).toBeInTheDocument();
    
    component.click();

    const updatedComponent = await findByTestId("item-list");

    expect(updatedComponent).toHaveTextContent("Name");
    expect(updatedComponent).toHaveTextContent("58");
    expect(component).not.toBeInTheDocument();

    mockUseEffect.restore();
    mockAxios.restore();
  });
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