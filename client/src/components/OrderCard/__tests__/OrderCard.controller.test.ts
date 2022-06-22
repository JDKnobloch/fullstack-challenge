import OrderCardController from '../OrderCard.controller';

describe("OrderCard Controller Test", () => {

  it("calculateTime Should return mins", () => {
      const minutes = 59;
      const currentDate = new Date();
      const pastDate = new Date(currentDate.getTime() - minutes*60000);
        
      const result = OrderCardController.calculateTime(pastDate);
      expect(result).toEqual('59m ago');
   
  });

  it("calculateTime Should return hours", () => {
    const minutes = 60;
    const currentDate = new Date();
    const pastDate = new Date(currentDate.getTime() - minutes*60000);
      
    const result = OrderCardController.calculateTime(pastDate);
      expect(result).toEqual('1h ago');
   
});

});
