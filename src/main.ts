import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 3000;

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  logger.log(`Application listening on port ${PORT}`);
}
bootstrap();
