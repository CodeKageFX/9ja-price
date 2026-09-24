import { ApiProperty } from '@nestjs/swagger';

export class CommodityItemDto {
  @ApiProperty({ description: 'Name of the food commodity', example: 'Rice' })
  name: string;

  @ApiProperty({
    description: 'Unique slug identifier for the commodity',
    example: 'rice',
  })
  slug: string;
}

export class MarketItemDto {
  @ApiProperty({ description: 'Name of the market', example: 'Wuse Market' })
  name: string;

  @ApiProperty({
    description: 'City where the market is located',
    example: 'Abuja',
  })
  city: string;

  @ApiProperty({
    description: 'State or region where the market is located',
    example: 'FCT',
  })
  state: string;
}

export class UnitItemDto {
  @ApiProperty({ description: 'Measurement unit symbol', example: 'kg' })
  symbol: string;
}

export class PriceObservationItemDto {
  @ApiProperty({
    description: 'Unique ID of the price observation',
    example: 2,
  })
  id: number;

  @ApiProperty({
    description: 'Observed price in Nigerian Naira (NGN)',
    example: '2600.00',
  })
  price: string;

  @ApiProperty({
    description: 'Quantity associated with the observation',
    example: '1.000',
  })
  quantity: string;

  @ApiProperty({
    description: 'Timestamp when the price was observed',
    example: '2026-09-21T00:00:00.000Z',
  })
  observedAt: Date;

  @ApiProperty({ type: CommodityItemDto })
  commodity: CommodityItemDto;

  @ApiProperty({ type: MarketItemDto })
  market: MarketItemDto;

  @ApiProperty({ type: UnitItemDto })
  unit: UnitItemDto;
}

export class PriceListResultDto {
  @ApiProperty({
    type: [PriceObservationItemDto],
    description: 'List of verified price observations',
  })
  prices: PriceObservationItemDto[];

  @ApiProperty({
    description: 'Total count of price observations returned',
    example: 1,
  })
  length: number;
}

export class PriceListResponseDto {
  @ApiProperty({ description: 'HTTP status code', example: 200 })
  statusCode: number;

  @ApiProperty({ description: 'Response message', example: 'success' })
  message: string;

  @ApiProperty({ type: PriceListResultDto })
  data: PriceListResultDto;
}

export class BadRequestResponseDto {
  @ApiProperty({ description: 'HTTP status code', example: 400 })
  statusCode: number;

  @ApiProperty({
    description: 'List of validation error messages',
    example: ['property banana should not exist'],
  })
  message: string[];

  @ApiProperty({ description: 'Error title', example: 'Bad Request' })
  error: string;
}
