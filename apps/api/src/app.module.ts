import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PricesModule } from './prices/prices.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PricesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
