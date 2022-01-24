import { Injectable } from '@nestjs/common';

@Injectable()
export class PowService {
  pow2(base: number) {
    return base * base;
  }

  powle(base: number, pow: number) {
    return Math.pow(base, pow);
  }

  powtwo(arg0: number, arg1: number) {
    return arg0 * arg1;
  }

  pow4(base: number) {
    return base * base * base * base;
  }
}
