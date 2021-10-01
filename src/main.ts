import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Usando validator global no nível da aplicação
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
