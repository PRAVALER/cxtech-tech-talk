import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PowService } from './pow/pow.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PowService],
})
export class AppModule {}
