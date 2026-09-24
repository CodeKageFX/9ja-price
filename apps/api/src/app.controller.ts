import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'Health check / root endpoint',
    description:
      'Returns a greeting message wrapped in the standard API response format.',
  })
  @ApiResponse({
    status: 200,
    description: 'Application is healthy and running.',
    schema: {
      example: {
        statusCode: 200,
        message: 'success',
        data: 'Hello World!',
      },
    },
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
