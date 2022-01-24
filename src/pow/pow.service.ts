import { Injectable } from '@nestjs/common';

@Injectable()
export class PowService {
  pow2(base: number) {
    return base * base;
  }
}

@Injectable()
export class IncrementService {
  increment(base: number) {
    return base + 1;
  }
}
