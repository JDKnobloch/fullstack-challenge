import ItemListController from '../ItemList.controller';


describe("ItemList Controller Test", () => {

  it("sortArray Should return properly sorted array", () => {
        
      ItemListController.sortArray(sampleArray);

      expect(sampleArray[0].products[0].quantity).toEqual(765);
      expect(sampleArray[0].products[1].quantity).toEqual(54);
      expect(sampleArray[0].products[2].quantity).toEqual(26);

      expect(sampleArray[1].products[0].quantity).toEqual(852);
      expect(sampleArray[1].products[1].quantity).toEqual(456);
      expect(sampleArray[1].products[2].quantity).toEqual(45);
   
  });

});

const sampleArray = [
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
  },
  {
    purchasedAt: "1234",
    currency: "USD",
    totalPrice: 123,
    products: [
      {
        _id: "134",
        name: "Name1",
        price: 896,
        quantity: 45
      },
      {
        _id: "14",
        name: "Name2",
        price: 896,
        quantity: 852
      },
      {
        _id: "13",
        name: "Name3",
        price: 896,
        quantity: 456
      },
    ],
    orderId: 1234,
    createdAt: "time",
    updatedAt: "another time"
  }
]