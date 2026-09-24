import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './common/response/response.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.useGlobalInterceptors(new ResponseInterceptor(app.get(Reflector)));

  const config = new DocumentBuilder()
    .setTitle('9jaPrice API')
    .setDescription(
      'Structured food-price data API for Nigerian markets, providing verified price observations, commodity details, and market insights.',
    )
    .setVersion('1.0.0')
    .addTag(
      'Prices',
      'Endpoints for retrieving verified Nigerian food price observations',
    )
    .addTag('App', 'General application health check endpoints')
    .build();

  type NestAppParam = Parameters<typeof SwaggerModule.setup>[1];
  const document = SwaggerModule.createDocument(
    app as unknown as NestAppParam,
    config,
  );
  SwaggerModule.setup('docs', app as unknown as NestAppParam, document, {
    jsonDocumentUrl: 'docs-json',
  });

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap().catch((err) => {
  console.error('Error starting the application:', err);
  process.exit(1);
});
