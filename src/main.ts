import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

interface IServerConfig {
  port: number;
}

async function bootstrap() {
  const serverConfig: IServerConfig = config.get('server');
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  const PORT = process.env.PORT || serverConfig.port;

  await app.listen(PORT);
  logger.log(`Application listening on port ${PORT}`);
}
bootstrap();
