import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//Como arranca el servidor
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4040);
}
bootstrap();
