import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PowService } from './pow/pow.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly powService: PowService,
  ) {}

  @Get()
  getHello(): string {
    return `Hello ${this.powService.powle(5,3)}`;
  }

  @Get('/pow4')
  getPow4(): string {
    return `Hello ${this.powService.pow4(5)}`;
  }
}
