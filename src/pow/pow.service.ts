import { Injectable } from '@nestjs/common';

@Injectable()
export class PowService {
  pow2(base: number) {
    return base * base;
  }

  powle(base: number, pow: number) {
    return Math.pow(base, pow);
  }
}
