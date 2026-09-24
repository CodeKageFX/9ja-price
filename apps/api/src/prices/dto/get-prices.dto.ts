import { IsOptional, IsString } from 'class-validator';

export class GetPricesDto {
  @IsOptional()
  @IsString()
  commodity?: string;

  @IsOptional()
  @IsString()
  market?: string;
}
