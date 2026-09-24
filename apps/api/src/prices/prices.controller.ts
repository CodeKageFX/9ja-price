import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOperation,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { PricesService } from './prices.service';
import { GetPricesDto } from './dto/get-prices.dto';
import {
  BadRequestResponseDto,
  PriceListResponseDto,
} from './dto/price-response.dto';

@ApiTags('Prices')
@ApiExtraModels(PriceListResponseDto, BadRequestResponseDto)
@Controller('prices')
export class PricesController {
  constructor(private priceService: PricesService) {}

  @Get()
  @ApiOperation({
    summary: 'Retrieve verified food price observations',
    description:
      'Returns a list of verified food price observations ordered by newest `observedAt` timestamp descending, then by `id` descending. Supports optional filtering by `commodity` slug and/or `market` name.',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved verified price observations.',
    content: {
      'application/json': {
        schema: {
          $ref: getSchemaPath(PriceListResponseDto),
        },
        examples: {
          allVerifiedPrices: {
            summary: 'GET /prices (All verified observations)',
            value: {
              statusCode: 200,
              message: 'success',
              data: {
                prices: [
                  {
                    id: 2,
                    price: '2600.00',
                    quantity: '1.000',
                    observedAt: '2026-09-21T00:00:00.000Z',
                    commodity: {
                      name: 'Rice',
                      slug: 'rice',
                    },
                    market: {
                      name: 'Wuse Market',
                      city: 'Abuja',
                      state: 'FCT',
                    },
                    unit: {
                      symbol: 'kg',
                    },
                  },
                ],
                length: 1,
              },
            },
          },
          filteredByCommodity: {
            summary: 'GET /prices?commodity=rice',
            value: {
              statusCode: 200,
              message: 'success',
              data: {
                prices: [
                  {
                    id: 2,
                    price: '2600.00',
                    quantity: '1.000',
                    observedAt: '2026-09-21T00:00:00.000Z',
                    commodity: {
                      name: 'Rice',
                      slug: 'rice',
                    },
                    market: {
                      name: 'Wuse Market',
                      city: 'Abuja',
                      state: 'FCT',
                    },
                    unit: {
                      symbol: 'kg',
                    },
                  },
                ],
                length: 1,
              },
            },
          },
          filteredByMarket: {
            summary: 'GET /prices?market=Wuse%20Market',
            value: {
              statusCode: 200,
              message: 'success',
              data: {
                prices: [
                  {
                    id: 2,
                    price: '2600.00',
                    quantity: '1.000',
                    observedAt: '2026-09-21T00:00:00.000Z',
                    commodity: {
                      name: 'Rice',
                      slug: 'rice',
                    },
                    market: {
                      name: 'Wuse Market',
                      city: 'Abuja',
                      state: 'FCT',
                    },
                    unit: {
                      symbol: 'kg',
                    },
                  },
                ],
                length: 1,
              },
            },
          },
          filteredByCommodityAndMarket: {
            summary: 'GET /prices?commodity=rice&market=Wuse%20Market',
            value: {
              statusCode: 200,
              message: 'success',
              data: {
                prices: [
                  {
                    id: 2,
                    price: '2600.00',
                    quantity: '1.000',
                    observedAt: '2026-09-21T00:00:00.000Z',
                    commodity: {
                      name: 'Rice',
                      slug: 'rice',
                    },
                    market: {
                      name: 'Wuse Market',
                      city: 'Abuja',
                      state: 'FCT',
                    },
                    unit: {
                      symbol: 'kg',
                    },
                  },
                ],
                length: 1,
              },
            },
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description:
      'Bad Request - Occurs when unallowed query parameters are provided (e.g. ?banana=true) due to forbidNonWhitelisted: true.',
    content: {
      'application/json': {
        schema: {
          $ref: getSchemaPath(BadRequestResponseDto),
        },
        examples: {
          unknownQueryParam: {
            summary: 'GET /prices?banana=true (Invalid query parameter)',
            value: {
              statusCode: 400,
              message: ['property banana should not exist'],
              error: 'Bad Request',
            },
          },
        },
      },
    },
  })
  async findAll(@Query() query: GetPricesDto) {
    return this.priceService.findAll(query);
  }
}
