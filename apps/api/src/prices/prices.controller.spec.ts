import { Test, TestingModule } from '@nestjs/testing';
import { PricesController } from './prices.controller';
import { PricesService } from './prices.service';

describe('PricesController', () => {
  let controller: PricesController;

  const mockPricesService = {
    findAll: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PricesController],
      providers: [{
        provide: PricesService,
        useValue: mockPricesService
      }]
    }).compile();

    controller = module.get<PricesController>(PricesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
