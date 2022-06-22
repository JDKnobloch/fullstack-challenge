import GetAllResponse from '../common/responses/GetAllResponse';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './schemas/order.schema';

@Injectable()
export class TrendingService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  /**
   * Get a status check on weather service is running
   * @returns Promise<string>
   */
  async getStatus(): Promise<string> {
    return 'Up and running...';
  }

  /**
   * Get total number of orders in db
   * @returns Promise<number>
   */
  async getTotalOrders(): Promise<number> {
    try {
      return await this.orderModel.count().exec();
    } catch (err) {
      console.log('Error thrown while querying db: ', err);
      throw new HttpException(
        {
          status: HttpStatus.SERVICE_UNAVAILABLE,
          error: 'Oops! Something went wrong!',
        },
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }


    /**
   * Get paginated trending orders
   * @returns Promise<GetAllResponse>
   */
     async getAllTrendingOrders(perPage: number, page: number): Promise<GetAllResponse> {
      try {

        // Get the date from 48 hours ago (this will be based on server time, not user)
        const trendingDate = new Date(new Date().getTime() - (48 * 60 * 60 * 1000));

        // Find all orders whose time is greater than 48 hours ago.
        // Sort these orders to ensure the orders with the largest quantity are shown first
        // Also apply pagination to query
        const orders = await this.orderModel.find({purchasedAt: {$gte: trendingDate}})
        .sort({
              'products.quantity':-1
        })
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec()

        // Count the total orders that occured within the past 48 hours
        const totalTrendingOrders = await this.orderModel.count({purchasedAt: {$gte: trendingDate}})
        .exec()

        // Return our orders and the number of pages we have available
        return new GetAllResponse(orders, Math.floor(totalTrendingOrders / perPage));
      } catch (err) {
        // Just kept basic error response handling from above
        console.log('Error thrown while querying db: ', err);
        throw new HttpException(
          {
            status: HttpStatus.SERVICE_UNAVAILABLE,
            error: 'Oops! Something went wrong!',
          },
          HttpStatus.SERVICE_UNAVAILABLE,
        );
      }
    }
}
