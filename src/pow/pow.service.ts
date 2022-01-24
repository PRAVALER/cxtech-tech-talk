import { Injectable } from '@nestjs/common';

@Injectable()
export class PowService {
  pow2(base: number) {
    return base * base;
  }
}

@Injectable()
export class Sum {
  sumProps(base: number) {
    return base + base;
  }
}