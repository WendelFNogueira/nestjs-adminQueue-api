import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import 'dotenv/config'

const logger = new Logger('Main')
const host = process.env.HOST;
const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RMQ_URL],
      queue: 'admin-backend'
    }
  });



  logger.log(`Microservices is listening on ${host}:${port}`);
}
bootstrap();
