import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetPricesDto } from './dto/get-prices.dto';

@Injectable()
export class PricesService {
  constructor(private prisma: PrismaService) {}

  async findAll(query: GetPricesDto) {
    const { market, commodity } = query;
    const prices = await this.prisma.priceObservation.findMany({
      where: {
        status: 'VERIFIED',
        commodity: commodity
          ? {
              slug: commodity,
            }
          : undefined,
        market: market
          ? {
              name: market,
            }
          : undefined,
      },

      select: {
        id: true,
        price: true,
        quantity: true,
        observedAt: true,

        commodity: {
          select: {
            name: true,
            slug: true,
          },
        },
        market: {
          select: {
            name: true,
            city: true,
            state: true,
          },
        },
        unit: {
          select: {
            symbol: true,
          },
        },
      },

      orderBy: [
        {
          observedAt: 'desc',
        },
        {
          id: 'desc',
        },
      ],
    });

    return {
      prices,
      length: prices.length,
    };
  }
}
