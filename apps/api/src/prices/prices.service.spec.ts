import { Test, TestingModule } from '@nestjs/testing';
import { PricesService } from './prices.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('PricesService', () => {
  let service: PricesService;

  const mockPrismaService = {
    priceObservation: {
      findMany: jest.fn(),
    }
  }

  beforeEach(()=> {
    jest.clearAllMocks()
  })

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [  
        PricesService,
        {
          provide: PrismaService,
          useValue: mockPrismaService
        }
      ],
    }).compile();

    service = module.get<PricesService>(PricesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return verified rice prices observation', async ()=> {
      mockPrismaService.priceObservation.findMany.mockResolvedValue([
        {
          id: 1,
          price: '2600',
          quantity: '1',
          observedAt: new Date('2026-09-21'),
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
      ])

      const result = await service.findAll({
        commodity: "rice"
      })
      expect(result.prices).toHaveLength(1)
      expect(result.prices[0].commodity.slug).toBe("rice")

      expect(
        mockPrismaService.priceObservation.findMany,
      ).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            status: "VERIFIED",
            commodity: {
              slug: "rice"
            }
          })
        })
      )
  })

  it('should return verified prices observation from wuse market', async()=> {
    mockPrismaService.priceObservation.findMany.mockResolvedValue([
      {
          id: 1,
          price: '2600',
          quantity: '1',
          observedAt: new Date('2026-09-21'),
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
    ])

    const result = await service.findAll({
      market: "Wuse Market"
    })

    expect(result.prices).toHaveLength(1)
    expect(result.prices[0].market.name).toBe("Wuse Market")

    expect(
      mockPrismaService.priceObservation.findMany,
    ).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          status: "VERIFIED",
          market: {
            name: "Wuse Market"
          }
        })
      })
    )
  })
  it('should return verified rice prices observation from wuse market', async()=> {
    mockPrismaService.priceObservation.findMany.mockResolvedValue([
      {
          id: 1,
          price: '2600',
          quantity: '1',
          observedAt: new Date('2026-09-21'),
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
    ])

    const result = await service.findAll({
      market: "Wuse Market",
      commodity: "rice"
    })

    expect(result.prices).toHaveLength(1)
    expect(result.prices[0].market.name).toBe("Wuse Market")
    expect(result.prices[0].commodity.slug).toBe("rice")

    expect(
      mockPrismaService.priceObservation.findMany,
    ).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          status: "VERIFIED",
          commodity: {
            slug: "rice"
          },
          market: {
            name: "Wuse Market"
          }
        })
        
      })
    )
  })

  it('should return all verified price observations when no filters are provided', async () => {
    mockPrismaService.priceObservation.findMany.mockResolvedValue([
      {
          id: 1,
          price: '2600',
          quantity: '1',
          observedAt: new Date('2026-09-21'),
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
    ])

    const results = await service.findAll({})

    expect(results.prices).toHaveLength(1)
    expect(
      mockPrismaService.priceObservation.findMany,
    ).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          status: "VERIFIED"
        })
      })
    )
  });
});
