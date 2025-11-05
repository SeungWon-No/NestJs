import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //await app.listen(process.env.PORT ?? 3000);

  // swagger test
  const config = new DocumentBuilder()
    .setTitle('Inflearn API 문서')
    .setDescription('Inflearn API 문서입니다.')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true, // 페이지 새로고침 시에도 인증 정보 유지
    },
  });

  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
