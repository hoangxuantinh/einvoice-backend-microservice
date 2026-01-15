import { Module } from '@nestjs/common';
import { TCP_SERVICES, TcpProvider } from '@common/configuration/tcp.config';
import { ProductController } from './controllers/product.controller';

@Module({
  controllers: [ProductController],
  providers: [TcpProvider(TCP_SERVICES.PRODUCT_SERVICE)],
  exports: [],
})
export class ProductModule {}
