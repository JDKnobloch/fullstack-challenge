import { render } from '@testing-library/react';
import OrderCard from '../OrderCard';
import { OrderTypeProps } from '../OrderCard.types';

describe("OrderCard Component Test", () => {
  let props: OrderTypeProps;

  beforeEach(() => {
    props = {
      orders: order
    };
  });

  const renderComponent = () => render(<OrderCard {...props} />);

  it("Should render default component correctly", () => {

    const { getByTestId } = renderComponent();

    const component = getByTestId("order-card-14");

    expect(component).toHaveTextContent("Name");
    expect(component).toHaveTextContent("58");
  });

  it("Should render multiple components correctly", () => {

    props.orders = orders;

    const { getByTestId } = renderComponent();

    const component1 = getByTestId("order-card-134");
    const component2 = getByTestId("order-card-14");
    const component3 = getByTestId("order-card-13");

    expect(component1).toHaveTextContent("Name1");
    expect(component1).toHaveTextContent("54");

    expect(component2).toHaveTextContent("Name2");
    expect(component2).toHaveTextContent("765");

    expect(component3).toHaveTextContent("Name3");
    expect(component3).toHaveTextContent("26");
  });

});

const order = [
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
]

const orders = [
  {
    purchasedAt: "1234",
    currency: "USD",
    totalPrice: 123,
    products: [
      {
        _id: "134",
        name: "Name1",
        price: 896,
        quantity: 54
      },
      {
        _id: "14",
        name: "Name2",
        price: 896,
        quantity: 765
      },
      {
        _id: "13",
        name: "Name3",
        price: 896,
        quantity: 26
      },
    ],
    orderId: 1234,
    createdAt: "time",
    updatedAt: "another time"
  }
]