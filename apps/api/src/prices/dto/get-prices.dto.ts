import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class GetPricesDto {
  @ApiPropertyOptional({
    description:
      'Filter price observations by commodity slug (e.g., "rice", "beans", "maize", "tomato")',
    example: 'rice',
    type: String,
  })
  @IsOptional()
  @IsString()
  commodity?: string;

  @ApiPropertyOptional({
    description:
      'Filter price observations by market name (e.g., "Wuse Market", "Garki Market", "Mile 12 Market")',
    example: 'Wuse Market',
    type: String,
  })
  @IsOptional()
  @IsString()
  market?: string;
}
