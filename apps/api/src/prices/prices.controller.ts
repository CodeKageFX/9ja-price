import { Controller, Get, Query } from '@nestjs/common';
import { PricesService } from './prices.service';
// import { Message } from 'src/common/message/message.decorator';
import { GetPricesDto } from './dto/get-prices.dto';

@Controller('prices')
export class PricesController {
  constructor(private priceService: PricesService) {}

  @Get()
  async findAll(@Query() query: GetPricesDto) {
    return this.priceService.findAll(query);
  }
}
