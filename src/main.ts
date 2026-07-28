import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200', // your Angular dev server
    credentials: true, // allows cookies/auth headers to be sent cross-origin
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips properties NOT defined in the DTO
      forbidNonWhitelisted: true, // throws an error instead of silently stripping
      transform: true, // auto-converts payloads into real DTO class instances
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
