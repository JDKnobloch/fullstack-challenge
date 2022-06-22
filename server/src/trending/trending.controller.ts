import { Controller, Get, HttpCode, Req } from '@nestjs/common';
import { TrendingService } from './trending.service';
import {Request} from "express";
import GetAllResponse from '#common/responses/GetAllResponse';


@Controller('trending')
export class TrendingController {
  constructor(private readonly appService: TrendingService) {}

  @Get('status')
  @HttpCode(200)
  async getStatus(): Promise<string> {
    return await this.appService.getStatus();
  }

  @Get('count')
  @HttpCode(200)
  async getTotalOrders(): Promise<number> {
    return await this.appService.getTotalOrders();
  }

  // Route endpoint for getting paginated trending orders
  @Get('all')
  @HttpCode(200)
  async getAllTrendingOrders(@Req() request: Request): Promise<GetAllResponse> {
    let perPage = Number(request.query.perPage);
    let page = Number(request.query.page)
    return await this.appService.getAllTrendingOrders(perPage, page);
  }
}
