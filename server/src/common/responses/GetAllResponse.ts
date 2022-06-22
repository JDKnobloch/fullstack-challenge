import { Order } from "../../trending/schemas/order.schema";

// Set up a basic class for my response, helpful for cleaning up typing and consistency
export default class GetAllResponse {
    orders: Order[];
    totalCount: number;
  
    constructor(orders: Array<Order>, totalCount: number){
      this.orders = orders;
      this.totalCount = totalCount;
    }
  }